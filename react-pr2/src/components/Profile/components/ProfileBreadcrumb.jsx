import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export default function AccountBreadcrumb() {
  const history = useHistory();
  const { t } = useTranslation();

  function handleClick(event) {
    event.preventDefault();
    history.push('/');
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      {t('Home')}
    </Link>,
    <Typography key="2" color="text.primary">
      {t('Account')}
    </Typography>,
  ];

  return (
    <Stack p="12px 24px" sx={{ display: 'block' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb ">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
