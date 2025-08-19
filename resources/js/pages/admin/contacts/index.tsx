import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/components/app-layout';


interface Contact {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    is_read: boolean;
    created_at: string;
}

interface PaginatedContacts {
    data: Contact[];
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
}

interface Props {
    contacts: PaginatedContacts;
    [key: string]: unknown;
}

export default function ContactsIndex({ contacts }: Props) {
    const handleDelete = (contact: Contact) => {
        if (confirm('Are you sure you want to delete this message?')) {
            router.delete(`/admin/contacts/${contact.id}`);
        }
    };

    const handleMarkAsRead = (contact: Contact) => {
        if (!contact.is_read) {
            router.get(`/admin/contacts/${contact.id}`);
        }
    };

    return (
        <AppLayout>
            <Head title="Contact Messages" />
            
            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Messages 📬</h1>
                    <p className="text-gray-600 dark:text-gray-400">Manage messages from your portfolio visitors</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Contact
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Subject
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                {contacts.data.map((contact) => (
                                    <tr 
                                        key={contact.id} 
                                        className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${
                                            !contact.is_read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                        }`}
                                    >
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="flex items-center">
                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {contact.name}
                                                    </div>
                                                    {!contact.is_read && (
                                                        <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                                                    )}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    {contact.email}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900 dark:text-white">
                                                {contact.subject}
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                                {contact.message.substring(0, 100)}...
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                contact.is_read
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                            }`}>
                                                {contact.is_read ? '✅ Read' : '📧 New'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {new Date(contact.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                            <Link 
                                                href={`/admin/contacts/${contact.id}`}
                                                className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                                onClick={() => handleMarkAsRead(contact)}
                                            >
                                                👁️ View
                                            </Link>
                                            <a
                                                href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                                                className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                                            >
                                                📧 Reply
                                            </a>
                                            <button
                                                onClick={() => handleDelete(contact)}
                                                className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                            >
                                                🗑️ Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {contacts.data.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📬</div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                No messages yet
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                When visitors contact you through your portfolio, messages will appear here.
                            </p>
                        </div>
                    )}

                    {/* Pagination */}
                    {contacts.links.length > 3 && (
                        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3">
                            <div className="flex justify-center space-x-2">
                                {contacts.links.map((link, index) => (
                                    <div key={index}>
                                        {link.url ? (
                                            <Link
                                                href={link.url}
                                                className={`px-3 py-2 text-sm rounded-md ${
                                                    link.active
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                                }`}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        ) : (
                                            <span
                                                className="px-3 py-2 text-sm text-gray-400 dark:text-gray-600"
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}