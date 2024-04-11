import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/Gameplay.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Phenomenon",
  description: "THE blockchain based social strategy game",
  openGraph: {
    title: "Phenomenon",
    description: "THE blockchain based social strategy game",
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/Gameplay.png`],
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
