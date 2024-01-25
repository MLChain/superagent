import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex h-full flex-1 flex-col space-y-12 px-6 py-4">
      <div className="space-y-8">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-20 w-[450px]" />
      </div>
      <div className="flex h-full flex-1 space-x-12">
        <div className="flex-1 flex-col">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="flex-1 flex-col space-y-6">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-14" />
          <Skeleton className="h-4 w-5" />
        </div>
      </div>
    </div>
  )
}
