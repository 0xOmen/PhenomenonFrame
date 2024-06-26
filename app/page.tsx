import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/Gameplay.png`,
  post_url: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/api/frame?id=0`,
});

export const metadata: Metadata = {
  title: "Phenomenon",
  description: "THE blockchain based social strategy game",
  openGraph: {
    title: "Phenomenon",
    description: "THE blockchain based social strategy game",
    images: [`https://phenomenonframe.vercel.app/Gameplay.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Phenomenon</h1>
    </>
  );
}
