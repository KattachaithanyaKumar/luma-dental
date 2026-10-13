"use client";

import { useAppointment } from "@/components/providers/AppointmentProvider";
import {
  Button,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/ui/Button";

type AppointmentButtonProps = {
  children: React.ReactNode;
  treatment?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  label?: string;
};

export function AppointmentButton({
  children,
  treatment,
  variant,
  size,
  className,
  onClick,
  label,
}: AppointmentButtonProps) {
  const { open } = useAppointment();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      aria-label={label}
      onClick={() => {
        onClick?.();
        open(treatment);
      }}
    >
      {children}
    </Button>
  );
}
