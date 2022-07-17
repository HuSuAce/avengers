/*
 * @Descripttion: 
 * @version: 
 * @Author: Piers
 * @Date: 2021-04-10 23:43:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-14 11:32:45
 */
import { useHttp } from "utils/http";
import { QueryKey, useMutation, useQuery } from "react-query";
import { useAddConfig, useDeleteConfig } from "utils/use-optimistic-options";
import { Epic } from "types/epic";

export const useEpics = (param?: Partial<Epic>) => {
  const client = useHttp();

  return useQuery<Epic[]>(["epics", param], () =>
    client("epics", { data: param })
  );
};

export const useAddEpic = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Epic>) =>
      client(`epics`, {
        data: params,
        method: "POST",
      }),
    useAddConfig(queryKey)
  );
};

export const useDeleteEpic = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`epics/${id}`, {
        method: "DELETE",
      }),
    useDeleteConfig(queryKey)
  );
};
