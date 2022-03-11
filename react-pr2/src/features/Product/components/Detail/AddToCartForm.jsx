import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityField from '../../../../components/form-controls/QuantityField';
import { useTranslation } from 'react-i18next';

function AddToCartForm({ onSubmit = null }) {
  const { t } = useTranslation();
  const schema = yup
    .object()
    .shape({
      quantity: yup
        .number()
        .required('Please enter quantity')
        .min(1, 'Minimum value is 1')
        .typeError('Please enter a number'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    onSubmit && onSubmit(values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label={t('Quantity')} form={form} />
      <Button type="submit" variant="contained" color="primary" style={{ width: '250px' }} size="large">
        {t('Add To Cart')}
      </Button>
    </form>
  );
}

export default AddToCartForm;
