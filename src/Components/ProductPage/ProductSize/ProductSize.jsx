import { Field } from "formik";
import style from './ProductSize.module.scss';

export const ProductSize = ({size}) => (
  <div className={style.size}>
      <p className={style.title}>Размер</p>
      <div className={style.list}>
          {size?.map(item => {
              return (
                  <label className={style.item} key={item}>
                      <Field className={style.input} type='radio' name='size' value={item} />
                      <span className={style.check}>{item}</span>
                  </label>
              );
          })}
      </div>
  </div>
);