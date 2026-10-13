"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AppointmentModal } from "@/components/ui/AppointmentModal";

type AppointmentContextValue = {
  isOpen: boolean;
  treatment: string | null;
  open: (treatment?: string) => void;
  close: () => void;
};

const AppointmentContext = createContext<AppointmentContextValue | null>(null);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [treatment, setTreatment] = useState<string | null>(null);

  const open = useCallback((nextTreatment?: string) => {
    setTreatment(nextTreatment ?? null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, treatment, open, close }),
    [isOpen, treatment, open, close],
  );

  return (
    <AppointmentContext.Provider value={value}>
      {children}
      <AppointmentModal
        open={isOpen}
        treatment={treatment}
        onClose={close}
      />
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error(
      "useAppointment must be used within an AppointmentProvider",
    );
  }
  return context;
}
