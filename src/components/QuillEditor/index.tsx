import './index.less'
import Quill from 'quill'
import { useEffect, useRef, useState } from 'react'
import { Editor } from './types'

export default function QuillEditor(props: Editor) {
  // 禁用toolbar
  const options = {
    modules: {
      toolbar: props.toolbar || false
    },
    theme: 'snow',
    placeholder: props.placeholder
  }
  const editRef = useRef<HTMLDivElement>(null)
  const insertRef = useRef<any>()
  const footerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = editRef.current
    if (container) {
      // 用ref接收初始化的Quill
      const editor = new Quill(container, options)
      editor.clipboard.addMatcher(Node.ELEMENT_NODE, (_, delta) => {
        const ops: any = []
        delta.ops.forEach(op => {
          if (op.insert && typeof op.insert === 'string') {
            ops.push({
              insert: op.insert
            })
          }
        })
        delta.ops = ops
        return delta
      })
      editor.on('text-change', () => {
        props.setValue(editor.root.innerHTML)
        if (props.getValue) {
          props.getValue(editor.root.innerHTML)
        }
        // 实时统计文字长度
        const text = editor.getText().replace(/\s/g, '')
        const imgs = editor.root.querySelectorAll('img')
        const status = `文字：${text.length}/${props.maxLetter || 200}，图片：${
          imgs.length
        }/${props.maxPictureNum || 5}`
        if (
          text.length > (props.maxLetter || 200) ||
          imgs.length > (props.maxPictureNum || 5)
        ) {
          props.submitRef.current.disabled = 'disabled'
        } else {
          props.submitRef.current.removeAttribute('disabled')
        }
        // 禁用插入图片
        if (imgs.length >= (props.maxPictureNum || 5)) {
          insertRef.current.disabled = 'disabled'
          //   throw Error(`最多插入${props.maxPictureNum || 5}张图片`)
        } else {
          insertRef.current?.removeAttribute('disabled')
        }
        if (footerRef.current) {
          footerRef.current.innerText = status
        }
      })

      // 手动插入图片
      insertRef.current.addEventListener('change', async () => {
        const url = await props.uploadFile?.(insertRef?.current.files[0])
        const selection = editor.getSelection()
        const index = selection ? selection.index : editor.getLength()
        editor.insertEmbed(index, 'image', url)
      })
    }
  }, [editRef])

  return (
    <div className="editor">
      {props.position === 'top' ? (
        <div ref={editRef} className="editorContent" />
      ) : null}
      <div className="bottomToolBar">
        <label className="pictureBar">
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/gif"
            ref={insertRef}
            value=""
            onChange={() => {}}
            style={{ display: 'none' }}
          />
          <span>插入图片</span>
        </label>
        <div ref={footerRef}>
          文字：0/{props.maxLetter || 200}，图片：0/
          {props.maxPictureNum || 5}
        </div>
      </div>
      {props.position === 'bottom' ? <div ref={editRef} /> : null}
    </div>
  )
}
