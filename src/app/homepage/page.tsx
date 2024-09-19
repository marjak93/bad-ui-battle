import { DragDropForm } from "@/components/DragDropForm";
import { Rating } from "@/components/Rating";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6 max-w-screen-sm mx-auto py-20">
      <DragDropForm />
      <div className="flex justify-center">
        <Rating />
      </div>
    </main>
  );
}
