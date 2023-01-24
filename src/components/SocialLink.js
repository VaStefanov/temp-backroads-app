const SocialLink = ({ href, icon, subClass }) => {
  return (
    <li >
      <a
        href={ href }
        target="_blank"
        rel="noreferrer"
        className={subClass}
      >
        <i className={ icon }></i>
      </a>
    </li>
  )
}
export default SocialLink