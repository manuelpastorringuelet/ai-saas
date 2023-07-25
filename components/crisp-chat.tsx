"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d6890d13-8cf0-4b15-95ad-fd936cd3fb0f");
  }, []);

  return null;
};
