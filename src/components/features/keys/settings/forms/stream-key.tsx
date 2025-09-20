import { Eye, EyeOff } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Button } from '@/components/ui/common/button'
import { Input } from '@/components/ui/common/input'
import { CardContainer } from '@/components/ui/elements/card-container'
import { CopyButton } from '@/components/ui/elements/copy-button'

interface StreamKeyProps {
	value: string | null
}

export function StreamKey({ value }: StreamKeyProps) {
	const t = useTranslations('dashboard.keys.key')

	const [isShow, setIsShow] = useState(false)

	const Icon = isShow ? Eye : EyeOff

	return (
		<CardContainer
			heading={t('heading')}
			isRightContentFull
			rightContent={
				<div className='flex w-full items-center gap-x-4'>
					<Input
						placeholder={t('heading')}
						value={value ?? ''}
						type={isShow ? 'text' : 'password'}
						disabled
					/>
					<CopyButton value={value} />
					<Button
						variant='ghost'
						size='lgIcon'
						onClick={() => setIsShow(!isShow)}
					>
						<Icon className='size-5' />
					</Button>
				</div>
			}
		/>
	)
}
