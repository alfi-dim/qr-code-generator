import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/app/components/ui/empty";

export default function NotFound() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>The page you&apos;re looking for doesn&apos;t exist.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <EmptyDescription>
          Need help? <a href="mailto:alfi.dim@gramedia.com">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
