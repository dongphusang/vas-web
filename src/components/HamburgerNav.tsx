export default function HamburgerNav ({ navigationOpen } : { navigationOpen:boolean }) {
    return (
        <svg className="overflow-visible"
             width="20"
             height="12"
             viewBox="0 0 20 12">
            <rect className="transition-all origin-center"
                   y={navigationOpen ? "5" : "0"}
                   width="20"
                   height="2"
                   rx="1"
                   fill="black"
                   transform={`rotate(${navigationOpen ? "45" : "0"})`}/>

            <rect className="transition-all origin-center"
                  y="5"
                  width="20"
                  height="2"
                  rx="1"
                  fill="black"
                  transform={`rotate(${navigationOpen ? "45" : "0"})`}/>


            <rect className="transition-all origin-center"
                  y={navigationOpen ? "5" : "10"}
                  width="20"
                  height="2"
                  rx="1"
                  fill="black"
                  transform={`rotate(${navigationOpen ? "-45" : "0"})`}/>
        </svg>
    );
}