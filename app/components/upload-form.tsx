"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { uploadFile } from "../actions/upload"
import { UploadIcon, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function UploadForm() {
  const [isUploading, setIsUploading] = useState(false)
  const [fileName, setFileName] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!fileInputRef.current?.files?.length) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append("file", fileInputRef.current.files[0])

      const result = await uploadFile(formData)

      if (result.error) {
        toast({
          title: "Upload failed",
          description: result.error,
          variant: "destructive",
        })
      } else {
        toast({
          title: "File uploaded successfully",
          description: "Your file has been uploaded to Vercel Blob",
        })

        // Reset form
        setFileName("")
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      }
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="file">File</Label>
        <Input id="file" type="file" ref={fileInputRef} onChange={handleFileChange} className="cursor-pointer" />
      </div>

      <Button type="submit" disabled={isUploading || !fileName}>
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload to Vercel Blob
          </>
        )}
      </Button>
    </form>
  )
}
