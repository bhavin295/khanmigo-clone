'use client'

import { Volume2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { MathRenderer } from '@/components/student/MathRenderer'

type MessageBubbleProps = {
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
  mathSteps?: Array<{ step_num: number; explanation: string; expression: string }>
  solution?: string
}

type Segment = { type: 'text'; value: string } | { type: 'math'; value: string; display: boolean }

function parseContent(content: string): Segment[] {
  const regex = /(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g
  const segments: Segment[] = []
  let lastIndex = 0

  for (const match of content.matchAll(regex)) {
    const index = match.index ?? 0
    if (index > lastIndex) {
      segments.push({ type: 'text', value: content.slice(lastIndex, index) })
    }
    const raw = match[0]
    const display = raw.startsWith('$$')
    segments.push({ type: 'math', value: raw.replace(/^\$\$?|\$\$?$/g, '').trim(), display })
    lastIndex = index + raw.length
  }

  if (lastIndex < content.length) {
    segments.push({ type: 'text', value: content.slice(lastIndex) })
  }

  return segments.length > 0 ? segments : [{ type: 'text', value: content }]
}

export function MessageBubble({ role, content, timestamp, mathSteps, solution }: MessageBubbleProps) {
  const [speaking, setSpeaking] = useState(false)
  const segments = useMemo(() => parseContent(content), [content])
  const timeLabel = timestamp ?? new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

  const speak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    const utterance = new SpeechSynthesisUtterance(content)
    utterance.onend = () => setSpeaking(false)
    setSpeaking(true)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }

  const contentNode = (
    <div className="space-y-3">
      {segments.map((segment, index) => {
        if (segment.type === 'math') {
          return <MathRenderer key={`${segment.value}-${index}`} expression={segment.value} showSteps={Boolean(mathSteps?.length)} steps={mathSteps} solution={solution} />
        }
        return <p key={`${segment.value}-${index}`} className="whitespace-pre-wrap text-sm leading-relaxed">{segment.value}</p>
      })}
    </div>
  )

  if (role === 'assistant') {
    return (
      <div className="mb-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl text-lg" style={{ background: 'rgba(167,139,250,0.18)', color: '#6D28D9' }}>🎓</div>
          <div className="max-w-[80%] rounded-[4px_18px_18px_18px] border px-5 py-4 md:max-w-[65%]" style={{ background: 'rgba(167,139,250,0.10)', borderColor: 'rgba(167,139,250,0.22)', color: 'var(--text)' }}>
            {contentNode}
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{timeLabel}</p>
              <button type="button" onClick={speak} className="inline-flex h-8 w-8 items-center justify-center rounded-full" style={{ background: speaking ? 'rgba(167,139,250,0.22)' : 'rgba(15,23,42,0.05)', color: speaking ? '#6D28D9' : 'var(--text-muted)' }}>
                <Volume2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-5">
      <div className="flex items-end justify-end gap-3">
        <div className="max-w-[80%] rounded-[18px_18px_4px_18px] px-5 py-4 md:max-w-[65%]" style={{ background: 'rgba(45,212,191,0.14)', border: '0.5px solid rgba(45,212,191,0.25)', color: 'var(--text)' }}>
          {contentNode}
          <p className="mt-2 mr-2 text-right text-xs" style={{ color: 'rgba(15,23,42,0.42)' }}>{timeLabel}</p>
        </div>
      </div>
    </div>
  )
}
