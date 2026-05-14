import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

function Toast({
  open,
  title,
  description,
  onOpenChange,
  className,
  ...props
}) {
  if (!open) {
    return null
  }

  return (
    <div
      className={cn(
        "pointer-events-auto relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-950/10",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          {title && <p className="text-sm font-semibold text-slate-950">{title}</p>}
          {description && <p className="text-sm leading-6 text-slate-600">{description}</p>}
        </div>
        <button
          type="button"
          onClick={() => onOpenChange?.(false)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          aria-label="Dismiss toast"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function ToastViewport({ className, ...props }) {
  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col gap-3 p-4 md:p-0",
        className
      )}
      {...props}
    />
  )
}

export { Toast, ToastViewport }
