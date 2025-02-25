"use client";

import { useEffect, useState } from "react";
import sdk, { type Context } from "@farcaster/frame-sdk";
import { PROJECT_TITLE } from "~/lib/constants";

export default function Frame() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [context, setContext] = useState<Context.FrameContext>();

  useEffect(() => {
    const initializeFrame = async () => {
      try {
        const ctx = await sdk.context;
        if (!ctx) {
          throw new Error("Failed to get frame context");
        }
        
        setContext(ctx);
        await sdk.actions.ready({});
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to initialize frame");
        setIsLoading(false);
      }
    };

    initializeFrame();
  }, []);

  const handleCheckin = async () => {
    try {
      // Add the current frame to the stack
      await sdk.actions.addFrame({
        url: "/checkin",
        post: {
          fid: context?.fid,
        },
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to check in");
    }
  };

  if (isLoading) {
    return (
      <div className="w-[300px] mx-auto py-2 px-2 text-center">
        <p>Loading frame...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[300px] mx-auto py-2 px-2 text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-[300px] mx-auto py-2 px-2">
      <h1 className="text-2xl font-bold text-center mb-4">
        {PROJECT_TITLE}
      </h1>
      
      <div className="flex justify-center">
        <button
          onClick={handleCheckin}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Check In Now
        </button>
      </div>
    </div>
  );
}
