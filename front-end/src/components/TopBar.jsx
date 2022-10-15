export const TopBar = () => {
  return (
    <nav className="bg-white w-full">
      <div className="items-center mx-auto md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <img
              src="/logo.png"
              width={200}
              alt="Disruptive Studio"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
