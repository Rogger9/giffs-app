const scrollTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

const ArrowUpCircle = ({size=24, color="#000000"}) => (
  <svg className="arrowUpTop" onClick={scrollTop} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V9"/></svg>
)

export default ArrowUpCircle;