"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export type PaginationButtonProps = {
  totalPage: number;
  page: number;
  baseUrl: string;
};

export const PaginationButton = (props: PaginationButtonProps) => {
  const router = useRouter();

  return (
    <div className=" flex  gap-2">
      <Button
        variant="secondary"
        size="sm"
        disabled={props.page === 0}
        onClick={() => {
          const searchParams = new URLSearchParams({
            page: String(props.page - 1),
          });
          const url = `${props.baseUrl}?${searchParams.toString()}`;
          router.push(url);
        }}
      >
        Précédent
      </Button>
      <Button
        variant="outline"
        size="sm"
        disabled={props.page === props.totalPage}
        onClick={() => {
          const searchParams = new URLSearchParams({
            page: String(props.page + 1),
          });
          const url = `${props.baseUrl}?${searchParams.toString()}`;
          router.push(url);
        }}
      >
        Suivant
      </Button>
    </div>
  );
};
