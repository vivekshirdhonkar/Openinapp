import React from 'react'
import base from '../../assets/base.svg'
import { Link} from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS} from '../../lib/constants'

const linkClass =
	'flex items-center gap-3 text-gray-500 text-base font-nunito font-semibold px-3 py-3 hover:bg-gradient-accent hover:no-underline active:bg-neutral-600 rounded-sm'
export default function Sidebar() {
	return (
		<div className="bg-white w-60  py-2 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
            <img src={base} className="w-10 h-10 absolute top-12 left-16" />
				<span className="font-nunito text-2xl font-semibold leading-6 absolute top-14 left-28">Base</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5 mt-16">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
				))}
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	return (
		<Link
			to={link.path}
			className={linkClass}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}