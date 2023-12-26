import React from 'react'
import LinkButton from './LinkButton'

function AdminLeftMenu() {
    return (
        <div className='leftmenu'>
            <div className='left_top'>
                <LinkButton name="Dashboard" icon="" link="/admin/home" />
            </div>
            <div class="sidebar-list">
                <LinkButton  name="Hostel Type" icon="" link="/hosteltype" />
                <LinkButton name="Hostels" icon="" link="/hostels" />
                <LinkButton name="Tenants" icon="" link="/tenants" />
                <LinkButton name="Bookings" icon="" link="/bookings" />
                <LinkButton name="Payments" icon="" link="/payments" />
                <LinkButton name="Reports" icon="" link="/reports" />
                <LinkButton name="Users" icon="" link="/users" />
            </div>
        </div>
    )
}

export default AdminLeftMenu