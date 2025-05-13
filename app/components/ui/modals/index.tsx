import { Drawer, DrawerContent } from "../drawer";
import { Dialog, DialogContent, type ModalProps } from "../dialog";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
export function ModalView({
  open,
  children,

  ...props
}: {
  open: boolean;
  children: React.ReactNode;
} & ModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={() => null}>
        <DialogContent {...props} className="dark:bg-grey-8 border-transparent">
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={() => null}>
      {/* <DrawerTrigger>Open</DrawerTrigger> */}
      <DrawerContent className="border-none max-h-[98%] dark:bg-grey-8">
        <div className="overflow-auto">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
