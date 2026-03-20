import type { Subject } from "@/lib/supabase/types";
import clsx from "clsx";

type SubjectPickerProps = {
  subject: Subject;
  onSelect: (s: Subject) => void;
};

const SUBJECT_OPTIONS: {
  key: Subject;
  label: string;
  active: string;
  inactive: string;
}[] = [
  {
    key: "math",
    label: "📐 Math",
    active: "bg-[rgba(96,165,250,0.18)] text-[rgba(15,23,42,0.92)] border border-[rgba(96,165,250,0.35)]",
    inactive: "bg-[rgba(15,23,42,0.04)] text-[rgba(15,23,42,0.60)] hover:bg-[rgba(15,23,42,0.06)] border border-[rgba(15,23,42,0.10)]",
  },
  {
    key: "reading",
    label: "📖 Reading",
    active: "bg-[rgba(45,212,191,0.18)] text-[rgba(15,23,42,0.92)] border border-[rgba(45,212,191,0.32)]",
    inactive: "bg-[rgba(15,23,42,0.04)] text-[rgba(15,23,42,0.60)] hover:bg-[rgba(15,23,42,0.06)] border border-[rgba(15,23,42,0.10)]",
  },
  {
    key: "science",
    label: "🔬 Science",
    active: "bg-[rgba(252,211,77,0.22)] text-[rgba(15,23,42,0.92)] border border-[rgba(252,211,77,0.40)]",
    inactive: "bg-[rgba(15,23,42,0.04)] text-[rgba(15,23,42,0.60)] hover:bg-[rgba(15,23,42,0.06)] border border-[rgba(15,23,42,0.10)]",
  },
];

export function SubjectPicker({ subject, onSelect }: SubjectPickerProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {SUBJECT_OPTIONS.map((option) => (
        <button
          key={option.key}
          type="button"
          onClick={() => onSelect(option.key)}
          className={clsx(
            "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
            subject === option.key ? option.active : option.inactive
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
