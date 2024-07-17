"use client";
import WaiButton from "@/components/WaiButton";
import useToast from "@/hooks/useToast";
import RyCenter from "@/layouts/RyCenter";
import RyContainer from "@/layouts/RyContainer";
import RyBox from "@/layouts/RyBox";

export default function Home() {
      const { showToast, triggerToast } = useToast();
      return (
            <RyContainer>
                  <RyCenter>
                        <WaiButton
                              isDisabled={false}
                              colorScheme="teal"
                              size="lg"
                              onClick={() =>
                                    triggerToast({
                                          type: "success",
                                          position: "bottom-right",
                                          message: "Error Toast",
                                    })
                              }
                        >
                              Test Toast
                        </WaiButton>
                        {showToast}
                  </RyCenter>
            </RyContainer>
      );
}
