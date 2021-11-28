import { getSession } from "next-auth/react";

import dynamic from "next/dynamic";
const Center = dynamic(() => import("../components/Center"), {
  ssr: false,
});
const Sidebar = dynamic(() => import("../components/Sidebar"), {
  ssr: false,
});
const Player = dynamic(() => import("../components/Player"), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
