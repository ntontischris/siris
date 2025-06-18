import { list } from "@vercel/blob"
import Image from "next/image"
import { FileIcon, ImageIcon, FileTextIcon, FileAudioIcon, FileVideoIcon } from "lucide-react"

export async function FileList() {
  const { blobs } = await list()

  if (blobs.length === 0) {
    return (
      <div className="text-center p-8 border border-dashed rounded-lg">
        <p className="text-muted-foreground">No files uploaded yet</p>
      </div>
    )
  }

  const getFileIcon = (pathname: string) => {
    const extension = pathname.split(".").pop()?.toLowerCase()

    if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension || "")) {
      return <ImageIcon className="h-5 w-5" />
    } else if (["mp3", "wav", "ogg"].includes(extension || "")) {
      return <FileAudioIcon className="h-5 w-5" />
    } else if (["mp4", "webm", "mov"].includes(extension || "")) {
      return <FileVideoIcon className="h-5 w-5" />
    } else if (["txt", "pdf", "doc", "docx"].includes(extension || "")) {
      return <FileTextIcon className="h-5 w-5" />
    }

    return <FileIcon className="h-5 w-5" />
  }

  const isImage = (pathname: string) => {
    const extension = pathname.split(".").pop()?.toLowerCase()
    return ["jpg", "jpeg", "png", "gif", "webp"].includes(extension || "")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {blobs.map((blob) => (
        <div key={blob.url} className="border rounded-lg overflow-hidden bg-card">
          <div className="aspect-square relative bg-muted">
            {isImage(blob.pathname) ? (
              <Image src={blob.url || "/placeholder.svg"} alt={blob.pathname} fill className="object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full">{getFileIcon(blob.pathname)}</div>
            )}
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2">
              {getFileIcon(blob.pathname)}
              <p className="text-sm font-medium truncate">{blob.pathname}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-muted-foreground">{(blob.size / 1024).toFixed(2)} KB</span>
              <a
                href={blob.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                View
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
