import { getUsers } from '@/api/admin.API';
import { useEffect, useState } from 'react';


const PAGE_SIZE = 10;

export function useUserManagement() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [checkedRows, setCheckedRows] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const isAllChecked = users.length > 0 && checkedRows.length === users.length;

  useEffect(() => {
    const skip = (page - 1) * PAGE_SIZE;
    getUsers({ skip, take: PAGE_SIZE, keyword, role: roleFilter })
      .then((json) => {
        if (json.success) {
          setUsers(json.data.users);
          setTotalCount(json.data.totalCount);
          setCheckedRows([]);
        }
      })
      .catch(console.error);
  }, [page, keyword, roleFilter, refreshKey]);

  const handleAllCheck = () => {
    setCheckedRows(isAllChecked ? [] : users.map((u) => u.id));
  };

  const handleRowCheck = (id) => {
    setCheckedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id],
    );
  };

  const handleKeywordChange = (v) => {
    setPage(1);
    setKeyword(v);
  };

  const handleRoleFilterChange = (role) => {
    setPage(1);
    setRoleFilter(role);
  };

  const refresh = () => setRefreshKey((k) => k + 1);

  return {
    page,
    setPage,
    keyword,
    roleFilter,
    users,
    totalCount,
    checkedRows,
    setCheckedRows,
    isAllChecked,
    handleAllCheck,
    handleRowCheck,
    handleKeywordChange,
    handleRoleFilterChange,
    refresh,
    PAGE_SIZE,
  };
}