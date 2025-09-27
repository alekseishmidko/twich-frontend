'use client'

import { useTranslations } from 'next-intl'

import { Skeleton } from '@/components/ui/common/skeleton'
import { CardContainer } from '@/components/ui/elements/card-container'

import { useCurrent } from '@/hooks/use-current'

import { DisableTotp } from './disable-totp'
import { EnableTotp } from './enable-totp'

export function WrapperTotp() {
	const t = useTranslations('dashboard.settings.account.twoFactor')

	const { user, isLoadingProfile } = useCurrent()

	return isLoadingProfile ? (
		<WrapperTotpSkeleton />
	) : (
		<CardContainer
			heading={t('heading')}
			description={t('description')}
			rightContent={
				<div className='flex items-center gap-x-4'>
					{!user?.isTotpEnabled ? <EnableTotp /> : <DisableTotp />}
				</div>
			}
		/>
	)
}

export function WrapperTotpSkeleton() {
	return <Skeleton className='h-24 w-full' />
}
