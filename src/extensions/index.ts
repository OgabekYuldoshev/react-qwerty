import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'

export const defaultExtension = [
    StarterKit,
    Placeholder.configure({
        placeholder: 'Write something …',
    })
]