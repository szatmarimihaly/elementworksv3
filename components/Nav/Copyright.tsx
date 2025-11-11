import { getTranslations } from 'next-intl/server'
import React from 'react'

type Props = {
    locale : string
}

const Copyright = async ({ locale } : Props) => {

    const t = await getTranslations({ locale })

  return (
    <p className='text-center mt-10 mb-10 text-gray-500 text-sm transiton-all duration-300 hover:text-gray-100'>{t('Footer.copyright')}</p>
  )
}

export default Copyright