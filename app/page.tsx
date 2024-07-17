"use client";
import useToast from "@/hooks/useToast";
import RyCenter from "@/layouts/RyCenter";
import RyContainer from "@/layouts/RyContainer";
import RyBox from "@/layouts/ryBox";

export default function Home() {
      const { showToast, triggerToast } = useToast();
      return (
            <RyContainer>
                  <RyCenter>
                        <button
                              onClick={() =>
                                    triggerToast({
                                          type: "success",
                                          position: "bottom-right",
                                          message: "Error Toast",
                                    })
                              }
                        >
                              Test Toast
                        </button>
                        {showToast}
                  </RyCenter>
            </RyContainer>
      );
}
