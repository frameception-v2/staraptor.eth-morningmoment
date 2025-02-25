"use client";

import { useEffect, useState } from "react";
import sdk, { type Context } from "@farcaster/frame-sdk";
import { PROJECT_TITLE } from "~/lib/constants";

export default function Frame() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Context.FrameContext>();

  useEffect(() => {
    const load = async () => {
      const context = await sdk.context;
      if (!context) return;
      
      setContext(context);
      sdk.actions.ready({});
    };

    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[300px] mx-auto py-2 px-2">
      <h1 className="text-2xl font-bold text-center mb-4">
        {PROJECT_TITLE}
      </h1>
      
      <div className="flex justify-center">
        <a 
          href="/checkin"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Check In Now
        </a>
      </div>
    </div>
  );
}
