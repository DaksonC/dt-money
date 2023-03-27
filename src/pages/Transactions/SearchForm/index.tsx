import * as z from "zod";
import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchFromContainer } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormProps = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransaction } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransitions(data: SearchFormProps) {
    await fetchTransaction(data.query)
  };

  return (
    <SearchFromContainer onSubmit={handleSubmit(handleSearchTransitions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFromContainer>
  );
}