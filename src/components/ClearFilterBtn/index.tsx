import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { fetchAllMeals } from "../../api/mealApi";
import { Recipe } from "../../api/type";
import styles from './ClearFilterBtn.module.css'
type ClearFilterBtnProps = {
  clearActiveCategory: () => void;
};

const ClearFilterBtn: React.FC<ClearFilterBtnProps> = ({
  clearActiveCategory,
}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => fetchAllMeals(),
    onSuccess: (newData: Recipe[]) => {
      queryClient.setQueryData(["recipes"], newData);
    },
  });

  const foo = () => {
    clearActiveCategory();
    mutation.mutate();
  };

  return <button className={styles.btn} type="button" onClick={foo}>Clear</button>;
};

export default ClearFilterBtn;
