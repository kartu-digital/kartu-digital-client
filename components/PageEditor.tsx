import { KanbanBoard } from "@/components/KanbanBoard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

// import Draggable from "./Draggable";

// export default function PageEditor() {
//   return (
//     <>
//       <div
//         style={{
//           boxShadow: "0px 5px 50px -25px #00000040",
//         }}
//         className="absolute top-[244px] left-[40px] bg-Neutral300 w-[310px] h-fit pb-[24px] border-[2px] border-Neutral500 rounded-[15px] px-[20px]"
//       >
//         <div className="w-full h-[68px] flex items-center">
//           <p className="text-[16px] font-bold">Halaman</p>
//         </div>
//         <div className="flex flex-col gap-5">
//             <Draggable parameter="Cover Depan"/>
//             <Draggable parameter="Halaman 2"/>
//             <Draggable parameter="Halaman 3"/>
//             <Draggable parameter="Halaman 4"/>
//             <Draggable parameter="Halaman 5"/>
//             <Draggable parameter="Halaman 6"/>
//         </div>
//         <div className="border-t-[2px] border-Neutral500 -mx-[20px] px-[20px] mt-[24px]">
//           <button className="bg-Black900 text-white h-[52px] w-[261px] rounded-[15px] mt-[24px]">
//             Tambahkan Halaman
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      variant="link"
      asChild
      className="scroll-m-20 text-xl font-semibold tracking-tight"
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
          <header className="flex justify-between w-full flex-row p-4">
            <Button variant="link" asChild className="text-primary h-8 w-8 p-0">
              <a href="https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui">
                <Github className="fill-current h-full w-full" />
              </a>
            </Button>
            <Button variant="link" asChild className="text-primary h-16 w-16">
              <a href="https://griffa.dev">@griffadev</a>
            </Button>
            <ThemeToggle />
          </header>
          <main className="mx-4 flex flex-col gap-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Drag and Drop Kanban Board
            </h1>
            <KanbanBoard />
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              With Keyboard Controls and Screen Reader interactions.
            </p>
          </main>
          <footer className="mt-6">
            <ul className="flex items-center justify-center">
              <li>
                <FooterLink>
                  <a href="https://react.dev/">React</a>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <a href="https://dndkit.com">dndkit</a>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <a href="https://tailwindcss.com/">tailwind</a>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <a href="https://ui.shadcn.com/">shadcn/ui</a>
                </FooterLink>
              </li>
            </ul>
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
