"use server"

import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File

  if (!file) {
    return { error: "No file provided" }
  }

  try {
    const blob = await put(file.name, file, {
      access: "public",
    })

    revalidatePath("/")
    return { success: true, url: blob.url }
  } catch (error) {
    console.error("Error uploading file:", error)
    return { error: "Failed to upload file" }
  }
}
