import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  Box,
  CircularProgress,
  InputAdornment,
  Typography,
  Avatar,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSearchField, setShowSearchField] = useState(false);
  const containerRef = useRef(null);
  const history = useHistory();
  const isMobile = useMediaQuery("(max-width:750px)");

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        fetchSearch(searchQuery);
      } else {
        setResults([]);
        setShowPopup(false);
      }
    }, 400);
    return () => clearTimeout(delay);
  }, [searchQuery]);

  const fetchSearch = async (query) => {
    setShowPopup(true);
    try {
      setLoading(true);
      const res = await axios.get(apiConfig.userProductList, {
        params: { search: query },
      });

      if (res.data?.responseCode === 200) {
        setLoading(false);
        const data = res.data.result.docs || [];
        setResults(data.slice(0, 5));
      } else {
        setLoading(false);
        setResults([]);
      }
    } catch (err) {
      setLoading(false);
      console.error("Search error:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setResults([]);
    setShowPopup(false);
    if (isMobile) {
      setShowSearchField(false); // 👈 hides the field on mobile
    }
  };

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setShowPopup(false);
      if (isMobile) {
        setShowSearchField(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: isMobile
          ? showSearchField
            ? 240 // smaller width for search bar on mobile
            : "fit-content"
          : 350,
      }}
    >
      {isMobile && !showSearchField ? (
        <CiSearch
          size={24}
          style={{ cursor: "pointer", color: "#7E563D" }}
          onClick={() => setShowSearchField(true)}
        />
      ) : (
        <TextField
          size="small"
          fullWidth
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ backgroundColor: "white", borderRadius: 2 }}
          InputProps={{
            sx: {
              height: "2.4rem",
              padding: "4px 8px",
              border: "none",
              boxSizing: "border-box",
            },
            startAdornment: (
              <InputAdornment position="start">
                <CiSearch size={20} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {loading ? (
                  <CircularProgress size={18} />
                ) : (
                  searchQuery && (
                    <RxCross2
                      style={{ fontSize: 20, cursor: "pointer" }}
                      onClick={clearSearch}
                    />
                  )
                )}
              </InputAdornment>
            ),
          }}
        />
      )}

      {showPopup && (
        <Box
          sx={{
            position: "absolute",
            top: "40px",
            width: isMobile ? 240 : "100%",
            bgcolor: "#fff",
            boxShadow: 3,
            borderRadius: 2,
            overflowY: "auto",
            maxHeight: 300,
            zIndex: 10,
          }}
        >
          {loading ? (
            <Box sx={{ p: 2, textAlign: "center" }}>
              <CircularProgress size={20} />
            </Box>
          ) : results.length > 0 ? (
            results.map((item) => (
              <Box
                key={item._id}
                sx={{
                  px: 2,
                  py: 1,
                  borderBottom: "1px solid #eee",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#f0f0f0" },
                }}
                onClick={() => {
                  setShowPopup(false);
                  if (isMobile) {
                    setShowSearchField(false);
                  }
                  history.push({
                    pathname: "/product-page",
                    state: { productId: item._id }, // ✅ Correct way to pass state
                  });
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    src={item.images?.[0]}
                    variant="square"
                    alt={item.productTitle}
                    sx={{ width: 40, height: 40, borderRadius: 1 }}
                  />
                  <Typography variant="body2" sx={{ color: "black" }}>
                    {item.productTitle}
                  </Typography>
                </Stack>
              </Box>
            ))
          ) : (
            <Box sx={{ p: 2, textAlign: "center", color: "#888" }}>
              No results found
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
