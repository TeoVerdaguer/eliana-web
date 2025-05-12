
const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-10 md:px-30 py-6 border-t-1 border-[var(--grey)] font-[family-name:var(--font-jost)]">
      <h3 className="text-[var(--grey)]">2025 © Copyright</h3>
      <h3 className="text-[var(--grey)] text-end max-w-30 sm:max-w-100">
        <a href="https://mateoverdaguer.netlify.app/" target="_blank" className="hover:text-[var(--darker)]">
          Desarrollado por Mateo Verdaguer
        </a>
      </h3>
    </footer>
  )
}

export default Footer
