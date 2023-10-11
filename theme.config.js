const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block' }}>
      <time>{YEAR}</time> © Philip Meisner Pedersen.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
            padding-left: 1em;
            padding-right: 1em;
          }
        }
      `}</style>
    </small>
  )
}
