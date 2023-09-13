
<template>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <RouterLink to="/dashboard">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="dashboard" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="ml-3">Dashboard</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/categories">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="category" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Category</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/admins">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="admin" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Admins</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/users">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="user" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/sellers">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="info" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Sellers</span>
                        </div>
                    </RouterLink>                
                </li>
                <li>
                    <RouterLink to="/buyers">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="info" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Buyers</span>
                        </div>
                    </RouterLink>                
                </li>
                <li>
                    <RouterLink to="/storages">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="info" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Storages</span>
                        </div>
                    </RouterLink>                
                </li>
                <li>
                    <RouterLink to="/info">
                        <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="info" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Ma'lumot</span>
                        </div>
                    </RouterLink>                
                </li>
           
        </ul>
    </div>
</aside></template>
