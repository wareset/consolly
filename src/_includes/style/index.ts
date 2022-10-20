import css_base from './base.pcss'

export const style = ((
  styleTextContent, node?: HTMLElement
) => (): void => {
  if (!node) {
    node = document.createElement('style')
    node.textContent = styleTextContent
    document.head.appendChild(node)
  }
})(css_base)
