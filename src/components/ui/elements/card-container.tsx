import type { LucideIcon } from 'lucide-react'
import type { PropsWithChildren, ReactNode } from 'react'
import type { IconType } from 'react-icons'

import { Card } from '@/components/ui/common/card'

import { cn } from '@/utils/tw-merge'

interface CardContainerProps {
	heading: string
	description?: string
	Icon?: IconType | LucideIcon
	isRightContentFull?: boolean
	rightContent?: ReactNode
}

export function CardContainer({
	heading,
	description,
	Icon,
	isRightContentFull,
	rightContent,
	children
}: PropsWithChildren<CardContainerProps>) {
	return (
		<Card className='p-4'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-row items-center gap-x-4'>
					{Icon && (
						<div className='bg-foreground rounded-full p-2.5'>
							<Icon className='text-secondary size-7' />
						</div>
					)}
					<div className='space-y-1'>
						<h2 className='font-semibold tracking-wide'>{heading}</h2>
						{description && (
							<p className='text-muted-foreground max-w-4xl text-sm'>
								{description}
							</p>
						)}
					</div>
				</div>
				{rightContent && (
					<div className={cn(isRightContentFull && 'ml-6 w-full')}>
						{rightContent}
					</div>
				)}
			</div>
			{children && <div className='mt-4'>{children}</div>}
		</Card>
	)
}
