'use client'

import { type PropsWithChildren, useEffect } from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { useSidebar } from '@/hooks/use-sidebar'

import { cn } from '@/utils/tw-merge'

export function LayoutContainer({ children }: PropsWithChildren<unknown>) {
	const isMobile = useMediaQuery('(max-width: 1024px)')

	const { isCollapsed, open, close } = useSidebar()

	useEffect(() => {
		if (isMobile) {
			if (!isCollapsed) close()
		} else {
			if (isCollapsed) open()
		}
	}, [isMobile, close, open, isCollapsed])

	return (
		<main
			className={cn(
				'mt-[75px] flex-1 p-8',
				isCollapsed ? 'ml-16' : 'ml-16 lg:ml-64'
			)}
		>
			{children}
		</main>
	)
}
