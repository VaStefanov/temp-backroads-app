const PageLink = ({id, href, text, subClass}) => {
  return (
    <li key={ id }>
      <a href={ href } className={subClass}> { text } </a>
    </li>
  )
}
export default PageLink