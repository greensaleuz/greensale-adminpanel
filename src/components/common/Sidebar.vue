
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
                    <RouterLink to="/category">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="category" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Category</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/admin">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="admin" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Admins</span>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/user">
                        <div
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <icon name="user" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                            <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                        </div>
                    </RouterLink>
                </li>
                <li><button type="button"
                        class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" aria-expanded="true"><svg
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                            height="24px" viewBox="0 0 24 24" version="1.1" class="text-gray-900 dark:text-white w-5 h-5">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <polygon fill="currentColor" opacity="0.3"
                                    points="12 20.0218549 8.47346039 21.7286168 6.86905972 18.1543453 3.07048824 17.1949849 4.13894342 13.4256452 1.84573388 10.2490577 5.08710286 8.04836581 5.3722735 4.14091196 9.2698837 4.53859595 12 1.72861679 14.7301163 4.53859595 18.6277265 4.14091196 18.9128971 8.04836581 22.1542661 10.2490577 19.8610566 13.4256452 20.9295118 17.1949849 17.1309403 18.1543453 15.5265396 21.7286168">
                                </polygon>
                                <polygon fill="currentColor"
                                    points="14.0890818 8.60255815 8.36079737 14.7014391 9.70868621 16.049328 15.4369707 9.950447">
                                </polygon>
                                <path
                                    d="M10.8543431,9.1753866 C10.8543431,10.1252593 10.085524,10.8938719 9.13585777,10.8938719 C8.18793881,10.8938719 7.41737243,10.1252593 7.41737243,9.1753866 C7.41737243,8.22551387 8.18793881,7.45690126 9.13585777,7.45690126 C10.085524,7.45690126 10.8543431,8.22551387 10.8543431,9.1753866"
                                    fill="currentColor" opacity="0.3"></path>
                                <path
                                    d="M14.8641422,16.6221564 C13.9162233,16.6221564 13.1456569,15.8535438 13.1456569,14.9036711 C13.1456569,13.9520555 13.9162233,13.1851857 14.8641422,13.1851857 C15.8138085,13.1851857 16.5826276,13.9520555 16.5826276,14.9036711 C16.5826276,15.8535438 15.8138085,16.6221564 14.8641422,16.6221564 Z"
                                    fill="currentColor" opacity="0.3"></path>
                        </g>
                        </svg><span class="flex-1 ml-3 text-left whitespace-nowrap">E'lonlar</span>
                        <icon name="product" class="text-gray-900 dark:text-white w-6 h-6"></icon>
                    </button>
                    <ul id="dropdown-example" class="py-2 space-y-2">
                        <li><a href="/sellerannouncements" class=""><a href="#"
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sotuvchilar
                                    e'loni</a></a></li>
                        <li><a href="/buyerannnouncements" class=""><a href="#"
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Oluvchilar
                                    e'loni</a></a></li>
                        <li><a href="/storagsannouncements" class=""><a href="#"
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Yukxonalar
                                    e'loni</a></a></li>
                    </ul>
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
