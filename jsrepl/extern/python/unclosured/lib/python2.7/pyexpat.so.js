"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 144;
  var $1___SIZE = 16;
  var $2___SIZE = 196;
  var $3___SIZE = 20;
  var $4___SIZE = 368;
  var $4___FLATTENER = [ 0, 76, 332 ];
  var $struct_ATTRIBUTE___SIZE = 16;
  var $struct_BINDING___SIZE = 28;
  var $struct_BLOCK___SIZE = 12;
  var $struct_CONTENT_SCAFFOLD___SIZE = 28;
  var $struct_DEFAULT_ATTRIBUTE___SIZE = 12;
  var $struct_DTD___SIZE = 188;
  var $struct_DTD___FLATTENER = [ 0, 20, 40, 60, 80, 104, 128, 129, 130, 131, 132, 152, 160, 164, 168, 172, 176, 180, 184 ];
  var $struct_ELEMENT_TYPE___SIZE = 24;
  var $struct_ENCODING___SIZE = 76;
  var $struct_ENCODING___FLATTENER = [ 0, 16, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 73 ];
  var $struct_ENTITY___SIZE = 36;
  var $struct_ENTITY___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 33, 34 ];
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_HASH_TABLE___SIZE = 20;
  var $struct_HASH_TABLE_ITER___SIZE = 8;
  var $struct_HandlerInfo___SIZE = 20;
  var $struct_INIT_ENCODING___SIZE = 80;
  var $struct_NAMED___SIZE = 4;
  var $struct_NS_ATT___SIZE = 12;
  var $struct_OPEN_INTERNAL_ENTITY___SIZE = 24;
  var $struct_POSITION___SIZE = 8;
  var $struct_PREFIX___SIZE = 8;
  var $struct_PROLOG_STATE___SIZE = 24;
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyCodeObject___SIZE = 72;
  var $struct_PyExpat_CAPI___SIZE = 80;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyListObject___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_PyTryBlock___SIZE = 12;
  var $struct_PyTupleObject___SIZE = 16;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_STRING_POOL___SIZE = 24;
  var $struct_TAG___SIZE = 48;
  var $struct_TAG___FLATTENER = [ 0, 4, 8, 12, 36, 40, 44 ];
  var $struct_TAG_NAME___SIZE = 24;
  var $struct_XML_Content___SIZE = 20;
  var $struct_XML_Encoding___SIZE = 1036;
  var $struct_XML_Encoding___FLATTENER = [ 0, 1024, 1028, 1032 ];
  var $struct_XML_Feature___SIZE = 12;
  var $struct_XML_Memory_Handling_Suite___SIZE = 12;
  var $struct_XML_ParserStruct___SIZE = 496;
  var $struct_XML_ParserStruct___FLATTENER = [ 0, 4, 8, 12, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 228, 232, 236, 237, 240, 244, 248, 252, 256, 280, 284, 288, 292, 296, 300, 304, 308, 312, 316, 320, 324, 328, 332, 336, 340, 344, 348, 352, 353, 356, 360, 364, 368, 372, 376, 380, 384, 388, 392, 396, 400, 404, 408, 416, 440, 464, 468, 472, 476, 480, 488, 489, 492 ];
  var $struct_XML_ParsingStatus___SIZE = 8;
  var $struct__IO_marker___SIZE = 12;
  var $struct__frame___SIZE = 316;
  var $struct__frame___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 312 ];
  var $struct__typeobject___SIZE = 196;
  var $struct_attribute_id___SIZE = 12;
  var $struct_attribute_id___FLATTENER = [ 0, 4, 8, 9 ];
  var $struct_normal_encoding___SIZE = 368;
  var $struct_normal_encoding___FLATTENER = [ 0, 76, 332, 336, 340, 344, 348, 352, 356, 360, 364 ];
  var $struct_unknown_encoding___SIZE = 1912;
  var $struct_unknown_encoding___FLATTENER = [ 0, 368, 372, 376, 888 ];
  var $struct_xmlparseobject___SIZE = 52;
  var __str;
  var _ErrorObject;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var __str10;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __str16;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var ___PRETTY_FUNCTION___9747;
  var __str21;
  var __str22;
  var __str23;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var __str28;
  var __str29;
  var __str30;
  var __str31;
  var __str32;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  var __str37;
  var __str38;
  var __str39;
  var __str40;
  var __str41;
  var __str42;
  var __str43;
  var __str44;
  var _xmlparse_Parse__doc__;
  var __str45;
  var __str46;
  var __str47;
  var _xmlparse_ParseFile__doc__;
  var __str48;
  var __str49;
  var _xmlparse_SetBase__doc__;
  var __str50;
  var _xmlparse_GetBase__doc__;
  var __str51;
  var _xmlparse_GetInputContext__doc__;
  var _xmlparse_ExternalEntityParserCreate__doc__;
  var __str52;
  var _xmlparse_SetParamEntityParsing__doc__;
  var __str53;
  var _xmlparse_UseForeignDTD__doc__;
  var __str54;
  var __str55;
  var __str56;
  var __str57;
  var __str58;
  var __str59;
  var __str60;
  var __str61;
  var _xmlparse_methods;
  var _template_string;
  var _template_buffer;
  var __str62;
  var __str63;
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var __str70;
  var __str71;
  var __str72;
  var __str73;
  var __str74;
  var __str75;
  var __str76;
  var __str77;
  var __str78;
  var __str79;
  var __str80;
  var __str81;
  var __str82;
  var __str83;
  var _Xmlparsetype__doc__;
  var __str84;
  var _Xmlparsetype;
  var _pyexpat_ParserCreate__doc__;
  var __str85;
  var _kwlist_11530;
  var __str86;
  var __str87;
  var __str88;
  var __str89;
  var _pyexpat_ErrorString__doc__;
  var __str90;
  var _pyexpat_methods;
  var __str91;
  var __str92;
  var _pyexpat_module_documentation;
  var __str93;
  var __str94;
  var __str95;
  var __str96;
  var __str97;
  var __str98;
  var __str99;
  var __str100;
  var __str101;
  var __str102;
  var __str103;
  var __str104;
  var __str105;
  var __str106;
  var __str107;
  var __str108;
  var __str109;
  var __str110;
  var __str111;
  var __str112;
  var __str113;
  var __str114;
  var __str115;
  var __str116;
  var __str117;
  var __str118;
  var __str119;
  var __str120;
  var __str121;
  var __str122;
  var __str123;
  var __str124;
  var __str125;
  var __str126;
  var __str127;
  var __str128;
  var __str129;
  var __str130;
  var __str131;
  var __str132;
  var __str133;
  var __str134;
  var __str135;
  var __str136;
  var __str137;
  var __str138;
  var __str139;
  var __str140;
  var __str141;
  var __str142;
  var __str143;
  var __str144;
  var __str145;
  var __str146;
  var __str147;
  var __str148;
  var __str149;
  var __str150;
  var __str151;
  var __str152;
  var __str153;
  var __str154;
  var __str155;
  var __str156;
  var __str157;
  var __str158;
  var __str159;
  var __str160;
  var __str161;
  var __str162;
  var __str163;
  var __str164;
  var _capi_11609;
  var __str165;
  var __str166;
  var __str167;
  var __str168;
  var __str169;
  var __str170;
  var __str171;
  var __str172;
  var __str173;
  var __str174;
  var __str175;
  var __str176;
  var __str177;
  var __str178;
  var __str179;
  var __str180;
  var __str181;
  var __str182;
  var __str183;
  var __str184;
  var __str185;
  var __str186;
  var __str187;
  var _handler_info;
  var _implicitContext;
  var __str188;
  var __str1189;
  var ___PRETTY_FUNCTION___3819;
  var _message_3967;
  var __str2190;
  var __str3191;
  var __str4192;
  var __str5193;
  var __str6194;
  var __str7195;
  var __str8196;
  var __str9197;
  var __str10198;
  var __str11199;
  var __str12200;
  var __str13201;
  var __str14202;
  var __str15203;
  var __str16204;
  var __str17205;
  var __str18206;
  var __str19207;
  var __str20208;
  var __str21209;
  var __str22210;
  var __str23211;
  var __str24212;
  var __str25213;
  var __str26214;
  var __str27215;
  var __str28216;
  var __str29217;
  var __str30218;
  var __str31219;
  var __str32220;
  var __str33221;
  var __str34222;
  var __str35223;
  var __str36224;
  var __str37225;
  var __str38226;
  var __str39227;
  var __str40228;
  var __str41229;
  var __str42230;
  var _features_3989;
  var __str43231;
  var __str44232;
  var __str45233;
  var __str46234;
  var __str47235;
  var _xmlNamespace_5259;
  var _xmlnsNamespace_5261;
  var _externalSubsetName_6003;
  var _atypeCDATA_6004;
  var _atypeID_6005;
  var _atypeIDREF_6006;
  var _atypeIDREFS_6007;
  var _atypeENTITY_6008;
  var _atypeENTITIES_6009;
  var _atypeNMTOKEN_6010;
  var _atypeNMTOKENS_6011;
  var _enumValueSep_6013;
  var _notationPrefix_6012;
  var _enumValueStart_6014;
  var _KW_ANY;
  var _KW_ATTLIST;
  var _KW_CDATA;
  var _KW_DOCTYPE;
  var _KW_ELEMENT;
  var _KW_EMPTY;
  var _KW_ENTITIES;
  var _KW_ENTITY;
  var _KW_FIXED;
  var _KW_ID;
  var _KW_IDREF;
  var _KW_IDREFS;
  var _KW_IGNORE;
  var _KW_IMPLIED;
  var _KW_INCLUDE;
  var _KW_NDATA;
  var _KW_NMTOKEN;
  var _KW_NMTOKENS;
  var _KW_NOTATION;
  var _KW_PCDATA;
  var _KW_PUBLIC;
  var _KW_REQUIRED;
  var _KW_SYSTEM;
  var _types_1939;
  var _namingBitmap;
  var _nmstrtPages;
  var _namePages;
  var _utf8_encoding_ns;
  var _utf8_encoding;
  var _internal_utf8_encoding_ns;
  var _internal_utf8_encoding;
  var _latin1_encoding_ns;
  var _latin1_encoding;
  var _ascii_encoding_ns;
  var _ascii_encoding;
  var _little2_encoding_ns;
  var _little2_encoding;
  var _internal_little2_encoding_ns;
  var _internal_little2_encoding;
  var _CDATA_LSQB_9078;
  var _big2_encoding_ns;
  var _big2_encoding;
  var _KW_version;
  var _KW_standalone;
  var _KW_yes;
  var _KW_no;
  var _KW_ISO_8859_1;
  var _KW_US_ASCII;
  var _KW_UTF_16;
  var _KW_UTF_16BE;
  var _KW_UTF_16LE;
  var _encodingNames_12955;
  var _encodings;
  var _encodingsNS;
  function _set_error_attr($err, $name, $value) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $err_addr;
      var $name_addr;
      var $value_addr;
      var $retval;
      var $0;
      var $v;
      $err_addr = $err;
      $name_addr = $name;
      $value_addr = $value;
      
      var $2 = _PyInt_FromLong($value_addr);
      $v = $2;
      
      
      if ($v == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      var $8 = _PyObject_SetAttrString($err_addr, $name_addr, $v);
      var $9 = $8 == -1;
      var $_pr = $v;
      if ($9) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      if ($_pr != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      var $14 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $14;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $25 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$25]($v);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      var $29 = HEAP[$_pr] - 1;
      
      
      HEAP[$v] = $29;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $40 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$40]($v);
      __label__ = 8;
      break;
     case 8:
      $0 = 1;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _set_error($self, $code) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 256;
    _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $code_addr;
      var $retval;
      var $0;
      var $err;
      var $buffer = __stackBase__;
      var $parser;
      var $lineno;
      var $column;
      $self_addr = $self;
      $code_addr = $code;
      
      
      
      $parser = HEAP[$self_addr + 8];
      
      var $5 = _PyExpat_XML_GetCurrentLineNumber($parser);
      $lineno = $5;
      
      var $7 = _PyExpat_XML_GetCurrentColumnNumber($parser);
      $column = $7;
      
      var $9 = _PyExpat_XML_ErrorString($code_addr);
      var $buffer1 = $buffer;
      
      
      var $12 = _sprintf($buffer1, __str, allocate([ $9, 0, 0, 0, $lineno, 0, 0, 0, $column, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      var $13 = HEAP[_ErrorObject];
      var $buffer2 = $buffer;
      var $14 = _PyObject_CallFunction($13, __str1, allocate([ $buffer2, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $err = $14;
      
      
      if ($err != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      var $19 = _set_error_attr($err, __str2, $code_addr);
      
      if ($19 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      var $23 = _set_error_attr($err, __str3, $column);
      
      if ($23 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $27 = _set_error_attr($err, __str4, $lineno);
      
      if ($27 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $29 = HEAP[_ErrorObject];
      
      _PyErr_SetObject($29, $err);
      __label__ = 5;
      break;
     case 5:
      
      
      if ($err != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      var $35 = HEAP[$err] - 1;
      
      
      HEAP[$err] = $35;
      
      
      
      
      if (HEAP[$err] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $46 = HEAP[HEAP[$err + 4] + 24];
      
      FUNCTION_TABLE[$46]($err);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      
      $retval = $0;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _have_handler($self, $type) {
    
    var $self_addr;
    var $type_addr;
    var $retval;
    var $0;
    var $handler;
    $self_addr = $self;
    $type_addr = $type;
    
    
    
    
    
    
    $handler = HEAP[HEAP[$self_addr + 48] + 4 * $type_addr];
    
    
    
    $0 = $handler != 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _get_handler_name($hinfo) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $hinfo_addr;
      var $retval;
      var $0;
      var $name;
      $hinfo_addr = $hinfo;
      
      
      
      $name = HEAP[$hinfo_addr + 16];
      
      
      if ($name == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$hinfo_addr];
      var $9 = _PyString_FromString($8);
      $name = $9;
      
      
      
      HEAP[$hinfo_addr + 16] = $name;
      
      
      if ($name != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $17 = HEAP[$name] + 1;
      
      
      HEAP[$name] = $17;
      __label__ = 3;
      break;
     case 3:
      
      $0 = $name;
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _conv_string_to_unicode($str) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $str_addr;
      var $retval;
      var $0;
      $str_addr = $str;
      
      
      if ($str_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      
      var $6 = _strlen($str_addr);
      
      var $8 = _PyUnicodeUCS2_DecodeUTF8($str_addr, $6, __str5);
      $0 = $8;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _conv_string_len_to_unicode($str, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $str_addr;
      var $len_addr;
      var $retval;
      var $0;
      $str_addr = $str;
      $len_addr = $len;
      
      
      if ($str_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      
      
      var $7 = _PyUnicodeUCS2_DecodeUTF8($str_addr, $len_addr, __str5);
      $0 = $7;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _conv_string_to_utf8($str) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $str_addr;
      var $retval;
      var $0;
      $str_addr = $str;
      
      
      if ($str_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      
      var $6 = _PyString_FromString($str_addr);
      $0 = $6;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _conv_string_len_to_utf8($str, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $str_addr;
      var $len_addr;
      var $retval;
      var $0;
      $str_addr = $str;
      $len_addr = $len;
      
      
      if ($str_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      
      
      var $7 = _PyString_FromStringAndSize($str_addr, $len_addr);
      $0 = $7;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _error_external_entity_ref_handler($parser, $context, $base, $systemId, $publicId) {
    
    var $parser_addr;
    var $context_addr;
    var $base_addr;
    var $systemId_addr;
    var $retval;
    var $0;
    $parser_addr = $parser;
    $context_addr = $context;
    $base_addr = $base;
    $systemId_addr = $systemId;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _noop_character_data_handler($userData, $data, $len) {
    
    var $userData_addr;
    var $data_addr;
    $userData_addr = $userData;
    $data_addr = $data;
    return;
  }
  function _flag_error($self) {
    
    var $self_addr;
    $self_addr = $self;
    
    _clear_handlers($self_addr, 0);
    
    
    var $3 = HEAP[$self_addr + 8];
    _PyExpat_XML_SetExternalEntityRefHandler($3, FUNCTION_TABLE_OFFSET + 2);
    return;
  }
  function _getcode($slot, $func_name, $lineno) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $slot_addr;
      var $func_name_addr;
      var $lineno_addr;
      var $retval;
      var $0;
      $slot_addr = $slot;
      $func_name_addr = $func_name;
      $lineno_addr = $lineno;
      
      
      
      
      
      if (HEAP[_handler_info + $slot_addr * 20 + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = $slot_addr;
      
      
      var $9 = _PyCode_NewEmpty(__str6, $func_name_addr, $lineno_addr);
      
      
      HEAP[_handler_info + $6 * 20 + 12] = $9;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      $0 = HEAP[_handler_info + $slot_addr * 20 + 12];
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _trace_frame($tstate, $f, $code, $val) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tstate_addr;
      var $f_addr;
      var $code_addr;
      var $val_addr;
      var $retval;
      var $iftmp_11;
      var $iftmp_10;
      var $0;
      var $result;
      $tstate_addr = $tstate;
      $f_addr = $f;
      $code_addr = $code;
      $val_addr = $val;
      $result = 0;
      
      
      
      
      if (HEAP[$tstate_addr + 20] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$tstate_addr + 16] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 17;
      break;
     case 3:
      
      
      
      
      if (HEAP[$tstate_addr + 24] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[$tstate_addr + 16] + 1;
      
      
      HEAP[$tstate_addr + 16] = $16;
      
      
      var $21 = HEAP[$tstate_addr + 24];
      
      
      var $24 = HEAP[$tstate_addr + 32];
      
      
      
      var $28 = FUNCTION_TABLE[$21]($24, $f_addr, $code_addr, $val_addr);
      $result = $28;
      
      
      
      
      if (HEAP[$tstate_addr + 28] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$tstate_addr + 24] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $iftmp_10 = 1;
      __label__ = 8;
      break;
     case 7:
      $iftmp_10 = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      
      HEAP[$tstate_addr + 20] = $iftmp_10;
      
      
      
      var $43 = HEAP[$tstate_addr + 16] - 1;
      
      
      HEAP[$tstate_addr + 16] = $43;
      
      
      if ($result != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      $0 = $result;
      __label__ = 17;
      break;
     case 10:
      
      
      
      
      if (HEAP[$tstate_addr + 28] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 11:
      
      
      
      var $56 = HEAP[$tstate_addr + 16] + 1;
      
      
      HEAP[$tstate_addr + 16] = $56;
      
      
      var $61 = HEAP[$tstate_addr + 28];
      
      
      var $64 = HEAP[$tstate_addr + 36];
      
      
      
      var $68 = FUNCTION_TABLE[$61]($64, $f_addr, $code_addr, $val_addr);
      $result = $68;
      
      
      
      
      if (HEAP[$tstate_addr + 28] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$tstate_addr + 24] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $iftmp_11 = 1;
      __label__ = 15;
      break;
     case 14:
      $iftmp_11 = 0;
      __label__ = 15;
      break;
     case 15:
      
      
      
      HEAP[$tstate_addr + 20] = $iftmp_11;
      
      
      
      var $83 = HEAP[$tstate_addr + 16] - 1;
      
      
      HEAP[$tstate_addr + 16] = $83;
      __label__ = 16;
      break;
     case 16:
      
      $0 = $result;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _trace_frame_exc($tstate, $f) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tstate_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $type = __stackBase__;
      var $value = __stackBase__ + 4;
      var $traceback = __stackBase__ + 8;
      var $arg;
      var $err;
      $tstate_addr = $tstate;
      $f_addr = $f;
      
      
      
      
      if (HEAP[$tstate_addr + 28] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 20;
      break;
     case 2:
      _PyErr_Fetch($type, $value, $traceback);
      
      
      if (HEAP[$value] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$value] = __Py_NoneStruct;
      
      
      
      var $10 = HEAP[HEAP[$value]] + 1;
      var $11 = HEAP[$value];
      HEAP[$11] = $10;
      __label__ = 4;
      break;
     case 4:
      var $12 = HEAP[$traceback];
      var $13 = HEAP[$value];
      var $14 = HEAP[$type];
      var $15 = _PyTuple_Pack(3, allocate([ $14, 0, 0, 0, $13, 0, 0, 0, $12, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $arg = $15;
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[$traceback];
      var $18 = HEAP[$value];
      var $19 = HEAP[$type];
      _PyErr_Restore($19, $18, $17);
      $0 = 0;
      __label__ = 20;
      break;
     case 6:
      
      
      
      var $23 = _trace_frame($tstate_addr, $f_addr, 1, $arg);
      $err = $23;
      
      
      
      var $27 = HEAP[$arg] - 1;
      
      
      HEAP[$arg] = $27;
      
      
      
      
      if (HEAP[$arg] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $38 = HEAP[HEAP[$arg + 4] + 24];
      
      FUNCTION_TABLE[$38]($arg);
      __label__ = 8;
      break;
     case 8:
      
      
      if ($err == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $42 = HEAP[$traceback];
      var $43 = HEAP[$value];
      var $44 = HEAP[$type];
      _PyErr_Restore($44, $43, $42);
      __label__ = 19;
      break;
     case 10:
      
      
      if (HEAP[$type] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $47 = HEAP[$type];
      
      
      var $50 = HEAP[$47] - 1;
      var $51 = $47;
      HEAP[$51] = $50;
      
      
      
      if (HEAP[$47] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $59 = HEAP[HEAP[HEAP[$type] + 4] + 24];
      var $60 = HEAP[$type];
      FUNCTION_TABLE[$59]($60);
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$value] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      var $63 = HEAP[$value];
      
      
      var $66 = HEAP[$63] - 1;
      var $67 = $63;
      HEAP[$67] = $66;
      
      
      
      if (HEAP[$63] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $75 = HEAP[HEAP[HEAP[$value] + 4] + 24];
      var $76 = HEAP[$value];
      FUNCTION_TABLE[$75]($76);
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$traceback] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $79 = HEAP[$traceback];
      
      
      var $82 = HEAP[$79] - 1;
      var $83 = $79;
      HEAP[$83] = $82;
      
      
      
      if (HEAP[$79] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $91 = HEAP[HEAP[HEAP[$traceback] + 4] + 24];
      var $92 = HEAP[$traceback];
      FUNCTION_TABLE[$91]($92);
      __label__ = 19;
      break;
     case 19:
      
      $0 = $err;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval20 = $retval;
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _call_with_frame($c, $func, $args, $self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $c_addr;
      var $func_addr;
      var $args_addr;
      var $self_addr;
      var $retval;
      var $0;
      var $tstate;
      var $f;
      var $res;
      $c_addr = $c;
      $func_addr = $func;
      $args_addr = $args;
      $self_addr = $self;
      
      $tstate = HEAP[__PyThreadState_Current];
      
      
      if ($c_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 19;
      break;
     case 2:
      var $4 = _PyEval_GetGlobals();
      
      
      var $7 = _PyFrame_New($tstate, $c_addr, $4, 0);
      $f = $7;
      
      
      if ($f == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 19;
      break;
     case 4:
      
      
      
      HEAP[$tstate + 8] = $f;
      
      
      var $15 = _trace_frame($tstate, $f, 0, __Py_NoneStruct);
      
      if ($15 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 19;
      break;
     case 6:
      
      
      var $19 = _PyEval_CallObjectWithKeywords($func_addr, $args_addr, 0);
      $res = $19;
      
      
      var $22 = $tstate;
      if ($res == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      
      if (HEAP[$22 + 48] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $27 = _PyTraceBack_Here($f);
      __label__ = 9;
      break;
     case 9:
      
      
      var $30 = HEAP[$self_addr + 8];
      var $31 = _PyExpat_XML_StopParser($30, 0);
      
      
      var $34 = _trace_frame_exc($tstate, $f);
      
      if ($34 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 19;
      break;
     case 11:
      
      
      var $38 = _trace_frame($22, $f, 3, $res);
      
      if ($38 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      
      if ($res != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      var $45 = HEAP[$res] - 1;
      
      
      HEAP[$res] = $45;
      
      
      
      
      if (HEAP[$res] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $56 = HEAP[HEAP[$res + 4] + 24];
      
      FUNCTION_TABLE[$56]($res);
      __label__ = 15;
      break;
     case 15:
      $res = 0;
      __label__ = 16;
      break;
     case 16:
      
      
      var $60 = HEAP[$f + 12];
      
      
      HEAP[$tstate + 8] = $60;
      
      
      
      
      var $67 = HEAP[$f] - 1;
      
      HEAP[$f] = $67;
      
      
      
      if (HEAP[$f] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      
      var $77 = HEAP[HEAP[$f + 4] + 24];
      
      
      FUNCTION_TABLE[$77]($f);
      __label__ = 18;
      break;
     case 18:
      
      $0 = $res;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval20 = $retval;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _string_intern($self, $str) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $str_addr;
      var $retval;
      var $0;
      var $iftmp_38;
      var $result;
      var $value;
      $self_addr = $self;
      $str_addr = $str;
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $iftmp_38 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 3;
      break;
     case 2:
      $iftmp_38 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 3;
      break;
     case 3:
      var $5 = $iftmp_38;
      
      var $7 = FUNCTION_TABLE[$5]($str_addr);
      $result = $7;
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $result;
      __label__ = 14;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self_addr + 44] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      $0 = $result;
      __label__ = 14;
      break;
     case 7:
      
      
      var $17 = HEAP[$self_addr + 44];
      
      var $19 = _PyDict_GetItem($17, $result);
      $value = $19;
      
      
      if ($value == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      var $24 = HEAP[$self_addr + 44];
      
      
      var $27 = _PyDict_SetItem($24, $result, $result);
      
      if ($27 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      $0 = $result;
      __label__ = 14;
      break;
     case 10:
      $0 = 0;
      __label__ = 14;
      break;
     case 11:
      
      
      
      var $33 = HEAP[$value] + 1;
      
      
      HEAP[$value] = $33;
      
      
      
      var $39 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $39;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $50 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$50]($result);
      __label__ = 13;
      break;
     case 13:
      
      $0 = $value;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _call_character_handler($self, $buffer, $len) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $buffer_addr;
      var $len_addr;
      var $retval;
      var $iftmp_39;
      var $0;
      var $args;
      var $temp;
      $self_addr = $self;
      $buffer_addr = $buffer;
      $len_addr = $len;
      
      var $2 = _have_handler($self_addr, 3);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 18;
      break;
     case 2:
      var $4 = _PyTuple_New(1);
      $args = $4;
      
      
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 18;
      break;
     case 4:
      
      
      
      
      var $11 = $buffer_addr;
      var $12 = $len_addr;
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = _conv_string_len_to_unicode($11, $12);
      $iftmp_39 = $13;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      var $14 = _conv_string_len_to_utf8($11, $12);
      $iftmp_39 = $14;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $15 = __lastLabel__ == 6 ? $14 : $13;
      $temp = $15;
      
      var $17 = $args;
      if ($15 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      var $20 = HEAP[$17] - 1;
      
      
      HEAP[$args] = $20;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $31 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$31]($args);
      __label__ = 10;
      break;
     case 10:
      
      _flag_error($self_addr);
      
      
      var $36 = HEAP[$self_addr + 8];
      _PyExpat_XML_SetCharacterDataHandler($36, FUNCTION_TABLE_OFFSET + 8);
      $0 = -1;
      __label__ = 18;
      break;
     case 11:
      
      
      
      
      HEAP[$17 + 12] = $temp;
      
      
      HEAP[$self_addr + 24] = 1;
      
      
      
      
      var $47 = HEAP[HEAP[$self_addr + 48] + 12];
      var $48 = _getcode(3, __str7, 441);
      
      
      var $51 = _call_with_frame($48, $47, $args, $self_addr);
      $temp = $51;
      
      
      HEAP[$self_addr + 24] = 0;
      
      
      
      var $57 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $57;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $68 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$68]($args);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($temp == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      _flag_error($self_addr);
      
      
      var $75 = HEAP[$self_addr + 8];
      _PyExpat_XML_SetCharacterDataHandler($75, FUNCTION_TABLE_OFFSET + 8);
      $0 = -1;
      __label__ = 18;
      break;
     case 15:
      
      
      
      var $79 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $79;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $90 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$90]($temp);
      __label__ = 17;
      break;
     case 17:
      $0 = 0;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval18 = $retval;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _flush_character_buffer($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $rc;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 32] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 40] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      var $11 = HEAP[$self_addr + 40];
      
      
      var $14 = HEAP[$self_addr + 32];
      
      var $16 = _call_character_handler($self_addr, $14, $11);
      $rc = $16;
      
      
      HEAP[$self_addr + 40] = 0;
      
      $0 = $rc;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_CharacterDataHandler($userData, $data, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $data_addr;
      var $len_addr;
      var $self;
      $userData_addr = $userData;
      $data_addr = $data;
      $len_addr = $len;
      
      
      $self = $userData_addr;
      
      
      
      
      var $6 = $self;
      if (HEAP[$self + 32] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $9 = _call_character_handler($6, $data_addr, $len_addr);
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      
      
      
      if ($len_addr + HEAP[$6 + 40] > HEAP[$self + 36]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      var $19 = _flush_character_buffer($self);
      
      if ($19 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $22 = _have_handler($self, 3);
      
      if ($22 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[$self + 36] < $len_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $32 = _call_character_handler($self, $data_addr, $len_addr);
      
      
      HEAP[$self + 40] = 0;
      __label__ = 8;
      break;
     case 7:
      
      
      
      
      
      
      
      var $42 = HEAP[$self + 32] + HEAP[$self + 40];
      
      _llvm_memcpy_p0i8_p0i8_i32($42, $data_addr, $len_addr, 1, 0);
      
      
      
      
      var $48 = $len_addr + HEAP[$self + 40];
      
      
      HEAP[$self + 40] = $48;
      __label__ = 8;
      break;
     case 8:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_StartElementHandler($userData, $name, $atts) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $name_addr;
      var $atts_addr;
      var $iftmp_42;
      var $self;
      var $container;
      var $rv;
      var $args;
      var $i;
      var $max;
      var $n;
      var $v;
      $userData_addr = $userData;
      $name_addr = $name;
      $atts_addr = $atts;
      
      
      $self = $userData_addr;
      
      var $3 = _have_handler($self, 0);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $14 = HEAP[$self + 8];
      var $15 = _PyExpat_XML_GetSpecifiedAttributeCount($14);
      $max = $15;
      __label__ = 6;
      break;
     case 4:
      $max = 0;
      
      
      
      
      
      if (HEAP[$atts_addr + 4 * $max] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $22 = $max + 2;
      $max = $22;
      
      
      
      
      
      if (HEAP[$atts_addr + 4 * $max] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[$self + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $33 = _PyList_New($max);
      $container = $33;
      __lastLabel__ = 7;
      __label__ = 9;
      break;
     case 8:
      var $34 = _PyDict_New();
      $container = $34;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $35 = __lastLabel__ == 8 ? $34 : $33;
      
      if ($35 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      _flag_error($self);
      __label__ = 46;
      break;
     case 11:
      $i = 0;
      __label__ = 35;
      break;
     case 12:
      
      
      
      var $41 = HEAP[$atts_addr + 4 * $i];
      
      var $43 = _string_intern($self, $41);
      $n = $43;
      
      
      var $46 = $self;
      if ($n == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      _flag_error($46);
      
      
      
      var $50 = HEAP[$container] - 1;
      
      
      HEAP[$container] = $50;
      
      
      
      
      if (HEAP[$container] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 14:
      
      
      
      
      var $61 = HEAP[HEAP[$container + 4] + 24];
      
      FUNCTION_TABLE[$61]($container);
      __label__ = 46;
      break;
     case 15:
      
      
      
      if (HEAP[$46 + 12] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $iftmp_42 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 18;
      break;
     case 17:
      $iftmp_42 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      var $70 = HEAP[$atts_addr + 4 * ($i + 1)];
      var $71 = $iftmp_42;
      var $72 = FUNCTION_TABLE[$71]($70);
      $v = $72;
      
      var $74 = $self;
      if ($72 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      _flag_error($74);
      
      
      
      var $78 = HEAP[$container] - 1;
      
      
      HEAP[$container] = $78;
      
      
      
      
      if (HEAP[$container] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $89 = HEAP[HEAP[$container + 4] + 24];
      
      FUNCTION_TABLE[$89]($container);
      __label__ = 21;
      break;
     case 21:
      
      
      
      var $94 = HEAP[$n] - 1;
      
      
      HEAP[$n] = $94;
      
      
      
      
      if (HEAP[$n] == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 22:
      
      
      
      
      var $105 = HEAP[HEAP[$n + 4] + 24];
      
      FUNCTION_TABLE[$105]($n);
      __label__ = 46;
      break;
     case 23:
      
      
      
      var $110 = $container;
      if (HEAP[$74 + 16] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $115 = HEAP[$110 + 12] + 4 * $i;
      
      HEAP[$115] = $n;
      
      
      
      
      
      
      var $123 = HEAP[$container + 12] + 4 * ($i + 1);
      
      HEAP[$123] = $v;
      __label__ = 34;
      break;
     case 25:
      
      
      var $127 = _PyDict_SetItem($110, $n, $v);
      
      if ($127 != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 26:
      
      _flag_error($self);
      
      
      
      var $133 = HEAP[$n] - 1;
      
      
      HEAP[$n] = $133;
      
      
      
      
      if (HEAP[$n] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $144 = HEAP[HEAP[$n + 4] + 24];
      
      FUNCTION_TABLE[$144]($n);
      __label__ = 28;
      break;
     case 28:
      
      
      
      var $149 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $149;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 29:
      
      
      
      
      var $160 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$160]($v);
      __label__ = 46;
      break;
     case 30:
      
      
      
      var $165 = HEAP[$n] - 1;
      
      
      HEAP[$n] = $165;
      
      
      
      
      if (HEAP[$n] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $176 = HEAP[HEAP[$n + 4] + 24];
      
      FUNCTION_TABLE[$176]($n);
      __label__ = 32;
      break;
     case 32:
      
      
      
      var $181 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $181;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $192 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$192]($v);
      __label__ = 34;
      break;
     case 34:
      
      var $195 = $i + 2;
      $i = $195;
      __label__ = 35;
      break;
     case 35:
      
      
      
      if ($i < $max) {
        __label__ = 12;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      var $201 = _string_intern($self, $name_addr);
      $args = $201;
      
      
      if ($args != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      var $206 = _Py_BuildValue(__str8, allocate([ $args, 0, 0, 0, $container, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $206;
      
      if ($206 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 38:
      
      
      
      var $211 = HEAP[$container] - 1;
      
      
      HEAP[$container] = $211;
      
      
      
      
      if (HEAP[$container] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 39:
      
      
      
      
      var $222 = HEAP[HEAP[$container + 4] + 24];
      
      FUNCTION_TABLE[$222]($container);
      __label__ = 46;
      break;
     case 40:
      
      
      HEAP[$self + 24] = 1;
      
      
      
      
      var $230 = HEAP[HEAP[$self + 48]];
      var $231 = _getcode(0, __str9, 566);
      
      
      var $234 = _call_with_frame($231, $230, $args, $self);
      $rv = $234;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $240 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $240;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $251 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$251]($args);
      __label__ = 42;
      break;
     case 42:
      
      
      if ($rv == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      _flag_error($self);
      __label__ = 46;
      break;
     case 44:
      
      
      
      var $259 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $259;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $270 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$270]($rv);
      __label__ = 46;
      break;
     case 46:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_EndElementHandler($userData, $name) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $name_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $name_addr = $name;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 1);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $10 = _string_intern($self, $name_addr);
      var $11 = _Py_BuildValue(__str10, allocate([ $10, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $11;
      
      
      var $14 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($14);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$14 + 24] = 1;
      
      
      
      
      var $20 = HEAP[HEAP[$self + 48] + 4];
      var $21 = _getcode(1, __str11, 618);
      
      
      var $24 = _call_with_frame($21, $20, $args, $self);
      $rv = $24;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $30 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $30;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $41 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$41]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $49 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $49;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $60 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$60]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_ProcessingInstructionHandler($userData, $target, $data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $target_addr;
      var $data_addr;
      var $iftmp_45;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $target_addr = $target;
      $data_addr = $data;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 2);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_45 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 5;
      break;
     case 4:
      $iftmp_45 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 5;
      break;
     case 5:
      
      
      var $14 = _string_intern($self, $target_addr);
      
      
      var $17 = _Py_BuildValue(__str12, allocate([ $14, 0, 0, 0, $iftmp_45, 0, 0, 0, $data_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (i8*)*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $args = $17;
      
      var $19 = $self;
      if ($17 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _flag_error($19);
      __label__ = 13;
      break;
     case 7:
      
      HEAP[$19 + 24] = 1;
      
      
      
      
      var $25 = HEAP[HEAP[$self + 48] + 8];
      var $26 = _getcode(2, __str13, 624);
      
      
      var $29 = _call_with_frame($26, $25, $args, $self);
      $rv = $29;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $35 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $35;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $46 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$46]($args);
      __label__ = 9;
      break;
     case 9:
      
      
      if ($rv == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      _flag_error($self);
      __label__ = 13;
      break;
     case 11:
      
      
      
      var $54 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $54;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $65 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$65]($rv);
      __label__ = 13;
      break;
     case 13:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_UnparsedEntityDeclHandler($userData, $entityName, $base, $systemId, $publicId, $notationName) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $entityName_addr;
      var $base_addr;
      var $systemId_addr;
      var $publicId_addr;
      var $notationName_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $entityName_addr = $entityName;
      $base_addr = $base;
      $systemId_addr = $systemId;
      $publicId_addr = $publicId;
      $notationName_addr = $notationName;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 4);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $10 = _string_intern($self, $notationName_addr);
      
      
      var $13 = _string_intern($self, $publicId_addr);
      
      
      var $16 = _string_intern($self, $systemId_addr);
      
      
      var $19 = _string_intern($self, $base_addr);
      
      
      var $22 = _string_intern($self, $entityName_addr);
      var $23 = _Py_BuildValue(__str14, allocate([ $22, 0, 0, 0, $19, 0, 0, 0, $16, 0, 0, 0, $13, 0, 0, 0, $10, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $23;
      
      
      var $26 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($26);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$26 + 24] = 1;
      
      
      
      
      var $32 = HEAP[HEAP[$self + 48] + 16];
      var $33 = _getcode(4, __str15, 636);
      
      
      var $36 = _call_with_frame($33, $32, $args, $self);
      $rv = $36;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $42 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $42;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $53 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$53]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $61 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $61;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $72 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$72]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_EntityDeclHandler($userData, $entityName, $is_parameter_entity, $value, $value_length, $base, $systemId, $publicId, $notationName) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $entityName_addr;
      var $is_parameter_entity_addr;
      var $value_addr;
      var $value_length_addr;
      var $base_addr;
      var $systemId_addr;
      var $publicId_addr;
      var $notationName_addr;
      var $iftmp_46;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $entityName_addr = $entityName;
      $is_parameter_entity_addr = $is_parameter_entity;
      $value_addr = $value;
      $value_length_addr = $value_length;
      $base_addr = $base;
      $systemId_addr = $systemId;
      $publicId_addr = $publicId;
      $notationName_addr = $notationName;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 17);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $10 = _string_intern($self, $notationName_addr);
      
      
      var $13 = _string_intern($self, $publicId_addr);
      
      
      var $16 = _string_intern($self, $systemId_addr);
      
      
      var $19 = _string_intern($self, $base_addr);
      
      
      
      
      var $24 = $value_addr;
      var $25 = $value_length_addr;
      if (HEAP[$self + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $26 = _conv_string_len_to_unicode($24, $25);
      $iftmp_46 = $26;
      __label__ = 5;
      break;
     case 4:
      var $27 = _conv_string_len_to_utf8($24, $25);
      $iftmp_46 = $27;
      __label__ = 5;
      break;
     case 5:
      
      
      var $30 = _string_intern($self, $entityName_addr);
      
      
      var $33 = _Py_BuildValue(__str16, allocate([ $30, 0, 0, 0, $is_parameter_entity_addr, 0, 0, 0, $iftmp_46, 0, 0, 0, $19, 0, 0, 0, $16, 0, 0, 0, $13, 0, 0, 0, $10, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $33;
      
      var $35 = $self;
      if ($33 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _flag_error($35);
      __label__ = 13;
      break;
     case 7:
      
      HEAP[$35 + 24] = 1;
      
      
      
      
      var $41 = HEAP[HEAP[$self + 48] + 68];
      var $42 = _getcode(17, __str17, 673);
      
      
      var $45 = _call_with_frame($42, $41, $args, $self);
      $rv = $45;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $51 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $51;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $62 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$62]($args);
      __label__ = 9;
      break;
     case 9:
      
      
      if ($rv == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      _flag_error($self);
      __label__ = 13;
      break;
     case 11:
      
      
      
      var $70 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $70;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $81 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$81]($rv);
      __label__ = 13;
      break;
     case 13:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_XmlDeclHandler($userData, $version, $encoding, $standalone) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $version_addr;
      var $encoding_addr;
      var $standalone_addr;
      var $iftmp_48;
      var $iftmp_47;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $version_addr = $version;
      $encoding_addr = $encoding;
      $standalone_addr = $standalone;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 18);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_47 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 5;
      break;
     case 4:
      $iftmp_47 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self + 12] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $iftmp_48 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 8;
      break;
     case 7:
      $iftmp_48 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      
      var $21 = _Py_BuildValue(__str18, allocate([ $iftmp_48, 0, 0, 0, $version_addr, 0, 0, 0, $iftmp_47, 0, 0, 0, $encoding_addr, 0, 0, 0, $standalone_addr, 0, 0, 0 ], [ "%struct.PyObject* (i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $args = $21;
      
      var $23 = $self;
      if ($21 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _flag_error($23);
      __label__ = 16;
      break;
     case 10:
      
      HEAP[$23 + 24] = 1;
      
      
      
      
      var $29 = HEAP[HEAP[$self + 48] + 72];
      var $30 = _getcode(18, __str19, 683);
      
      
      var $33 = _call_with_frame($30, $29, $args, $self);
      $rv = $33;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $39 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $39;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $50 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$50]($args);
      __label__ = 12;
      break;
     case 12:
      
      
      if ($rv == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      _flag_error($self);
      __label__ = 16;
      break;
     case 14:
      
      
      
      var $58 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $58;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $69 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$69]($rv);
      __label__ = 16;
      break;
     case 16:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _conv_content_model($model, $conv_string) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $model_addr;
      var $conv_string_addr;
      var $retval;
      var $0;
      var $result;
      var $children;
      var $i;
      var $child;
      $model_addr = $model;
      $conv_string_addr = $conv_string;
      $result = 0;
      
      
      var $3 = HEAP[$model_addr + 12];
      var $4 = _PyTuple_New($3);
      $children = $4;
      
      
      if ($children != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$model_addr + 12] > 2147483646) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str20, __str6, 694, ___PRETTY_FUNCTION___9747);
      throw "Reached an unreachable!";
     case 3:
      $i = 0;
      __label__ = 10;
      break;
     case 4:
      
      
      
      var $14 = HEAP[$49 + 16] + 20 * $i;
      
      var $16 = _conv_content_model($14, $conv_string_addr);
      $child = $16;
      
      
      var $19 = $children;
      if ($child == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      if ($19 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      var $24 = HEAP[$children] - 1;
      
      
      HEAP[$children] = $24;
      
      
      
      
      if (HEAP[$children] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $35 = HEAP[HEAP[$children + 4] + 24];
      
      FUNCTION_TABLE[$35]($children);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      __label__ = 13;
      break;
     case 9:
      
      
      
      
      
      HEAP[$19 + 12 + $i * 4] = $child;
      
      var $43 = $i + 1;
      $i = $43;
      __label__ = 10;
      break;
     case 10:
      
      
      
      
      
      var $49 = $model_addr;
      if (HEAP[$model_addr + 12] > $i) {
        __label__ = 4;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $51 = HEAP[$49 + 8];
      
      
      var $54 = HEAP[$model_addr + 4];
      
      
      var $57 = HEAP[$model_addr];
      
      
      var $60 = _Py_BuildValue(__str21, allocate([ $57, 0, 0, 0, $54, 0, 0, 0, $conv_string_addr, 0, 0, 0, $51, 0, 0, 0, $children, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $result = $60;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $result;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_ElementDeclHandler($userData, $name, $model) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $name_addr;
      var $model_addr;
      var $iftmp_51;
      var $self;
      var $args;
      var $rv;
      var $modelobj;
      var $nameobj;
      $userData_addr = $userData;
      $name_addr = $name;
      $model_addr = $model;
      
      
      $self = $userData_addr;
      $args = 0;
      
      var $3 = _have_handler($self, 19);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 1:
      $rv = 0;
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_51 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 5;
      break;
     case 4:
      $iftmp_51 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 5;
      break;
     case 5:
      
      
      var $14 = _conv_content_model($model_addr, $iftmp_51);
      $modelobj = $14;
      
      var $16 = $self;
      if ($14 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _flag_error($16);
      __label__ = 19;
      break;
     case 7:
      
      var $18 = _string_intern($16, $name_addr);
      $nameobj = $18;
      
      
      if ($nameobj == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[$modelobj] - 1;
      
      
      HEAP[$modelobj] = $24;
      
      
      
      
      if (HEAP[$modelobj] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[$modelobj + 4] + 24];
      
      FUNCTION_TABLE[$35]($modelobj);
      __label__ = 10;
      break;
     case 10:
      
      _flag_error($self);
      __label__ = 19;
      break;
     case 11:
      
      
      var $40 = _Py_BuildValue(__str22, allocate([ $nameobj, 0, 0, 0, $modelobj, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $40;
      
      
      if ($args == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      var $46 = HEAP[$modelobj] - 1;
      
      
      HEAP[$modelobj] = $46;
      
      
      
      
      if (HEAP[$modelobj] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $57 = HEAP[HEAP[$modelobj + 4] + 24];
      
      FUNCTION_TABLE[$57]($modelobj);
      __label__ = 14;
      break;
     case 14:
      
      _flag_error($self);
      __label__ = 19;
      break;
     case 15:
      
      
      HEAP[$self + 24] = 1;
      
      
      
      
      var $66 = HEAP[HEAP[$self + 48] + 76];
      var $67 = _getcode(19, __str23, 750);
      
      
      var $70 = _call_with_frame($67, $66, $args, $self);
      $rv = $70;
      
      
      HEAP[$self + 24] = 0;
      
      
      if ($rv == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      _flag_error($self);
      __label__ = 19;
      break;
     case 17:
      
      
      
      var $79 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $79;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $90 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$90]($rv);
      __label__ = 19;
      break;
     case 19:
      
      
      if ($args != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      var $97 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $97;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $108 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$108]($args);
      __label__ = 22;
      break;
     case 22:
      
      
      var $112 = HEAP[$self + 8];
      
      _PyExpat_XML_FreeContentModel($112, $model_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_AttlistDeclHandler($userData, $elname, $attname, $att_type, $dflt, $isrequired) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $elname_addr;
      var $attname_addr;
      var $att_type_addr;
      var $dflt_addr;
      var $isrequired_addr;
      var $iftmp_53;
      var $iftmp_52;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $elname_addr = $elname;
      $attname_addr = $attname;
      $att_type_addr = $att_type;
      $dflt_addr = $dflt;
      $isrequired_addr = $isrequired;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 20);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_52 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 5;
      break;
     case 4:
      $iftmp_52 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      if (HEAP[$self + 12] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $iftmp_53 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 8;
      break;
     case 7:
      $iftmp_53 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 8;
      break;
     case 8:
      
      
      var $18 = _string_intern($self, $attname_addr);
      
      
      var $21 = _string_intern($self, $elname_addr);
      
      
      
      
      
      var $27 = _Py_BuildValue(__str24, allocate([ $21, 0, 0, 0, $18, 0, 0, 0, $iftmp_53, 0, 0, 0, $att_type_addr, 0, 0, 0, $iftmp_52, 0, 0, 0, $dflt_addr, 0, 0, 0, $isrequired_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $args = $27;
      
      var $29 = $self;
      if ($27 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _flag_error($29);
      __label__ = 16;
      break;
     case 10:
      
      HEAP[$29 + 24] = 1;
      
      
      
      
      var $35 = HEAP[HEAP[$self + 48] + 80];
      var $36 = _getcode(20, __str25, 775);
      
      
      var $39 = _call_with_frame($36, $35, $args, $self);
      $rv = $39;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $45 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $45;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $56 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$56]($args);
      __label__ = 12;
      break;
     case 12:
      
      
      if ($rv == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      _flag_error($self);
      __label__ = 16;
      break;
     case 14:
      
      
      
      var $64 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $64;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $75 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$75]($rv);
      __label__ = 16;
      break;
     case 16:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_SkippedEntityHandler($userData, $entityName, $is_parameter_entity) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $entityName_addr;
      var $is_parameter_entity_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $entityName_addr = $entityName;
      $is_parameter_entity_addr = $is_parameter_entity;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 21);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $10 = _string_intern($self, $entityName_addr);
      
      var $12 = _Py_BuildValue(__str26, allocate([ $10, 0, 0, 0, $is_parameter_entity_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $args = $12;
      
      
      var $15 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($15);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$15 + 24] = 1;
      
      
      
      
      var $21 = HEAP[HEAP[$self + 48] + 84];
      var $22 = _getcode(21, __str27, 783);
      
      
      var $25 = _call_with_frame($22, $21, $args, $self);
      $rv = $25;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $31 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $31;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $42 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$42]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $50 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $50;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $61 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$61]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_NotationDeclHandler($userData, $notationName, $base, $systemId, $publicId) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $notationName_addr;
      var $base_addr;
      var $systemId_addr;
      var $publicId_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $notationName_addr = $notationName;
      $base_addr = $base;
      $systemId_addr = $systemId;
      $publicId_addr = $publicId;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 5);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $10 = _string_intern($self, $publicId_addr);
      
      
      var $13 = _string_intern($self, $systemId_addr);
      
      
      var $16 = _string_intern($self, $base_addr);
      
      
      var $19 = _string_intern($self, $notationName_addr);
      var $20 = _Py_BuildValue(__str28, allocate([ $19, 0, 0, 0, $16, 0, 0, 0, $13, 0, 0, 0, $10, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $20;
      
      
      var $23 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($23);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$23 + 24] = 1;
      
      
      
      
      var $29 = HEAP[HEAP[$self + 48] + 20];
      var $30 = _getcode(5, __str29, 794);
      
      
      var $33 = _call_with_frame($30, $29, $args, $self);
      $rv = $33;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $39 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $39;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $50 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$50]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $58 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $58;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $69 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$69]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_StartNamespaceDeclHandler($userData, $prefix, $uri) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $prefix_addr;
      var $uri_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $prefix_addr = $prefix;
      $uri_addr = $uri;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 6);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $10 = _string_intern($self, $uri_addr);
      
      
      var $13 = _string_intern($self, $prefix_addr);
      var $14 = _Py_BuildValue(__str8, allocate([ $13, 0, 0, 0, $10, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $14;
      
      
      var $17 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($17);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$17 + 24] = 1;
      
      
      
      
      var $23 = HEAP[HEAP[$self + 48] + 24];
      var $24 = _getcode(6, __str30, 801);
      
      
      var $27 = _call_with_frame($24, $23, $args, $self);
      $rv = $27;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $33 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $33;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $44 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$44]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $52 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $52;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $63 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$63]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_EndNamespaceDeclHandler($userData, $prefix) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $prefix_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $prefix_addr = $prefix;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 7);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $10 = _string_intern($self, $prefix_addr);
      var $11 = _Py_BuildValue(__str10, allocate([ $10, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $11;
      
      
      var $14 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($14);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$14 + 24] = 1;
      
      
      
      
      var $20 = HEAP[HEAP[$self + 48] + 28];
      var $21 = _getcode(7, __str31, 806);
      
      
      var $24 = _call_with_frame($21, $20, $args, $self);
      $rv = $24;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $30 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $30;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $41 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$41]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $49 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $49;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $60 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$60]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_CommentHandler($userData, $data) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $data_addr;
      var $iftmp_54;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $data_addr = $data;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 8);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_54 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 5;
      break;
     case 4:
      $iftmp_54 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 5;
      break;
     case 5:
      
      
      var $14 = _Py_BuildValue(__str32, allocate([ $iftmp_54, 0, 0, 0, $data_addr, 0, 0, 0 ], [ "%struct.PyObject* (i8*)*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $args = $14;
      
      var $16 = $self;
      if ($14 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _flag_error($16);
      __label__ = 13;
      break;
     case 7:
      
      HEAP[$16 + 24] = 1;
      
      
      
      
      var $22 = HEAP[HEAP[$self + 48] + 32];
      var $23 = _getcode(8, __str33, 810);
      
      
      var $26 = _call_with_frame($23, $22, $args, $self);
      $rv = $26;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $32 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $32;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $43 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$43]($args);
      __label__ = 9;
      break;
     case 9:
      
      
      if ($rv == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      _flag_error($self);
      __label__ = 13;
      break;
     case 11:
      
      
      
      var $51 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $51;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $62 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$62]($rv);
      __label__ = 13;
      break;
     case 13:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_StartCdataSectionHandler($userData) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 9);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $8 = _Py_BuildValue(__str34, allocate(1, "i32", ALLOC_STACK));
      $args = $8;
      
      
      var $11 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($11);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$11 + 24] = 1;
      
      
      
      
      var $17 = HEAP[HEAP[$self + 48] + 36];
      var $18 = _getcode(9, __str35, 814);
      
      
      var $21 = _call_with_frame($18, $17, $args, $self);
      $rv = $21;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $27 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $27;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$38]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $46 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $46;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$57]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_EndCdataSectionHandler($userData) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 10);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $8 = _Py_BuildValue(__str34, allocate(1, "i32", ALLOC_STACK));
      $args = $8;
      
      
      var $11 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($11);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$11 + 24] = 1;
      
      
      
      
      var $17 = HEAP[HEAP[$self + 48] + 40];
      var $18 = _getcode(10, __str36, 818);
      
      
      var $21 = _call_with_frame($18, $17, $args, $self);
      $rv = $21;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $27 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $27;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$38]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $46 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $46;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$57]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_DefaultHandler($userData, $s, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $s_addr;
      var $len_addr;
      var $iftmp_55;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $s_addr = $s;
      $len_addr = $len;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 11);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      var $12 = $s_addr;
      var $13 = $len_addr;
      if (HEAP[$self + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = _conv_string_len_to_unicode($12, $13);
      $iftmp_55 = $14;
      __label__ = 5;
      break;
     case 4:
      var $15 = _conv_string_len_to_utf8($12, $13);
      $iftmp_55 = $15;
      __label__ = 5;
      break;
     case 5:
      
      var $17 = _Py_BuildValue(__str10, allocate([ $iftmp_55, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $17;
      
      var $19 = $self;
      if ($17 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _flag_error($19);
      __label__ = 13;
      break;
     case 7:
      
      HEAP[$19 + 24] = 1;
      
      
      
      
      var $25 = HEAP[HEAP[$self + 48] + 44];
      var $26 = _getcode(11, __str37, 833);
      
      
      var $29 = _call_with_frame($26, $25, $args, $self);
      $rv = $29;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $35 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $35;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $46 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$46]($args);
      __label__ = 9;
      break;
     case 9:
      
      
      if ($rv == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      _flag_error($self);
      __label__ = 13;
      break;
     case 11:
      
      
      
      var $54 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $54;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $65 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$65]($rv);
      __label__ = 13;
      break;
     case 13:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_DefaultHandlerExpandHandler($userData, $s, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $s_addr;
      var $len_addr;
      var $iftmp_56;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $s_addr = $s;
      $len_addr = $len;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 12);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      var $12 = $s_addr;
      var $13 = $len_addr;
      if (HEAP[$self + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = _conv_string_len_to_unicode($12, $13);
      $iftmp_56 = $14;
      __label__ = 5;
      break;
     case 4:
      var $15 = _conv_string_len_to_utf8($12, $13);
      $iftmp_56 = $15;
      __label__ = 5;
      break;
     case 5:
      
      var $17 = _Py_BuildValue(__str10, allocate([ $iftmp_56, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $17;
      
      var $19 = $self;
      if ($17 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _flag_error($19);
      __label__ = 13;
      break;
     case 7:
      
      HEAP[$19 + 24] = 1;
      
      
      
      
      var $25 = HEAP[HEAP[$self + 48] + 48];
      var $26 = _getcode(12, __str38, 839);
      
      
      var $29 = _call_with_frame($26, $25, $args, $self);
      $rv = $29;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $35 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $35;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $46 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$46]($args);
      __label__ = 9;
      break;
     case 9:
      
      
      if ($rv == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      _flag_error($self);
      __label__ = 13;
      break;
     case 11:
      
      
      
      var $54 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $54;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $65 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$65]($rv);
      __label__ = 13;
      break;
     case 13:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_NotStandaloneHandler($userData) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $retval;
      var $0;
      var $self;
      var $args;
      var $rv;
      var $rc;
      $userData_addr = $userData;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      $rc = 0;
      
      var $4 = _have_handler($self, 13);
      
      if ($4 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      var $7 = _flush_character_buffer($self);
      
      if ($7 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $rc;
      __label__ = 12;
      break;
     case 3:
      var $10 = _Py_BuildValue(__str34, allocate(1, "i32", ALLOC_STACK));
      $args = $10;
      
      
      var $13 = $self;
      if ($args == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      _flag_error($13);
      
      $0 = $rc;
      __label__ = 12;
      break;
     case 5:
      
      HEAP[$13 + 24] = 1;
      
      
      
      
      var $20 = HEAP[HEAP[$self + 48] + 52];
      var $21 = _getcode(13, __str39, 844);
      
      
      var $24 = _call_with_frame($21, $20, $args, $self);
      $rv = $24;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $30 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $30;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $41 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$41]($args);
      __label__ = 7;
      break;
     case 7:
      
      
      if ($rv == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      _flag_error($self);
      
      $0 = $rc;
      __label__ = 12;
      break;
     case 9:
      
      var $48 = _PyInt_AsLong($rv);
      $rc = $48;
      
      
      
      var $52 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $52;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $63 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$63]($rv);
      __label__ = 11;
      break;
     case 11:
      
      $0 = $rc;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_ExternalEntityRefHandler($parser, $context, $base, $systemId, $publicId) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $context_addr;
      var $base_addr;
      var $systemId_addr;
      var $publicId_addr;
      var $retval;
      var $iftmp_58;
      var $0;
      var $self;
      var $args;
      var $rv;
      var $rc;
      $parser_addr = $parser;
      $context_addr = $context;
      $base_addr = $base;
      $systemId_addr = $systemId;
      $publicId_addr = $publicId;
      
      
      
      
      $self = HEAP[$parser_addr];
      $args = 0;
      $rv = 0;
      $rc = 0;
      
      var $6 = _have_handler($self, 14);
      
      if ($6 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 1:
      
      var $9 = _flush_character_buffer($self);
      
      if ($9 < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $rc;
      __label__ = 15;
      break;
     case 3:
      
      
      var $14 = _string_intern($self, $publicId_addr);
      
      
      var $17 = _string_intern($self, $systemId_addr);
      
      
      var $20 = _string_intern($self, $base_addr);
      
      
      
      
      if (HEAP[$self + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $iftmp_58 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 6;
      break;
     case 5:
      $iftmp_58 = FUNCTION_TABLE_OFFSET + 6;
      __label__ = 6;
      break;
     case 6:
      
      
      var $27 = _Py_BuildValue(__str40, allocate([ $iftmp_58, 0, 0, 0, $context_addr, 0, 0, 0, $20, 0, 0, 0, $17, 0, 0, 0, $14, 0, 0, 0 ], [ "%struct.PyObject* (i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $args = $27;
      
      var $29 = $self;
      if ($27 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _flag_error($29);
      
      $0 = $rc;
      __label__ = 15;
      break;
     case 8:
      
      HEAP[$29 + 24] = 1;
      
      
      
      
      var $36 = HEAP[HEAP[$self + 48] + 56];
      var $37 = _getcode(14, __str41, 857);
      
      
      var $40 = _call_with_frame($37, $36, $args, $self);
      $rv = $40;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $46 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $46;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$57]($args);
      __label__ = 10;
      break;
     case 10:
      
      
      if ($rv == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      _flag_error($self);
      
      $0 = $rc;
      __label__ = 15;
      break;
     case 12:
      
      var $64 = _PyInt_AsLong($rv);
      $rc = $64;
      
      
      
      var $68 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $68;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $79 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$79]($rv);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $rc;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_StartDoctypeDeclHandler($userData, $doctypeName, $sysid, $pubid, $has_internal_subset) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $doctypeName_addr;
      var $sysid_addr;
      var $pubid_addr;
      var $has_internal_subset_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      $doctypeName_addr = $doctypeName;
      $sysid_addr = $sysid;
      $pubid_addr = $pubid;
      $has_internal_subset_addr = $has_internal_subset;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 15);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $10 = _string_intern($self, $pubid_addr);
      
      
      var $13 = _string_intern($self, $sysid_addr);
      
      
      var $16 = _string_intern($self, $doctypeName_addr);
      
      var $18 = _Py_BuildValue(__str42, allocate([ $16, 0, 0, 0, $13, 0, 0, 0, $10, 0, 0, 0, $has_internal_subset_addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $args = $18;
      
      
      var $21 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($21);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$21 + 24] = 1;
      
      
      
      
      var $27 = HEAP[HEAP[$self + 48] + 60];
      var $28 = _getcode(15, __str43, 867);
      
      
      var $31 = _call_with_frame($28, $27, $args, $self);
      $rv = $31;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $37 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $37;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $48 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$48]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $56 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $56;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $67 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$67]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _my_EndDoctypeDeclHandler($userData) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $userData_addr;
      var $self;
      var $args;
      var $rv;
      $userData_addr = $userData;
      
      
      $self = $userData_addr;
      $args = 0;
      $rv = 0;
      
      var $3 = _have_handler($self, 16);
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      
      var $6 = _flush_character_buffer($self);
      
      if ($6 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $8 = _Py_BuildValue(__str34, allocate(1, "i32", ALLOC_STACK));
      $args = $8;
      
      
      var $11 = $self;
      if ($args == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _flag_error($11);
      __label__ = 10;
      break;
     case 4:
      
      HEAP[$11 + 24] = 1;
      
      
      
      
      var $17 = HEAP[HEAP[$self + 48] + 64];
      var $18 = _getcode(16, __str44, 869);
      
      
      var $21 = _call_with_frame($18, $17, $args, $self);
      $rv = $21;
      
      
      HEAP[$self + 24] = 0;
      
      
      
      var $27 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $27;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$38]($args);
      __label__ = 6;
      break;
     case 6:
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _flag_error($self);
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $46 = HEAP[$rv] - 1;
      
      
      HEAP[$rv] = $46;
      
      
      
      
      if (HEAP[$rv] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[$rv + 4] + 24];
      
      FUNCTION_TABLE[$57]($rv);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_parse_result($self, $rv) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $rv_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $rv_addr = $rv;
      var $1 = _PyErr_Occurred();
      
      if ($1 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      
      
      var $5 = $self_addr;
      if ($rv_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $7 = HEAP[$5 + 8];
      var $8 = _PyExpat_XML_GetErrorCode($7);
      
      var $10 = _set_error($self_addr, $8);
      $0 = $10;
      __label__ = 7;
      break;
     case 4:
      var $11 = _flush_character_buffer($5);
      
      if ($11 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      var $14 = _PyInt_FromLong($rv_addr);
      $0 = $14;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_Parse($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s = __stackBase__;
      var $slen = __stackBase__ + 4;
      var $isFinal = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$isFinal] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str45, allocate([ $s, 0, 0, 0, $slen, 0, 0, 0, $isFinal, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$isFinal];
      var $5 = HEAP[$slen];
      var $6 = HEAP[$s];
      
      
      var $9 = HEAP[$self_addr + 8];
      var $10 = _PyExpat_XML_Parse($9, $6, $5, $4);
      
      var $12 = _get_parse_result($self_addr, $10);
      $0 = $12;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _readinst($buf, $meth) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buf_addr;
      var $buf_size_addr;
      var $meth_addr;
      var $retval;
      var $0;
      var $arg;
      var $bytes;
      var $str;
      var $len;
      $buf_addr = $buf;
      $buf_size_addr = 2048;
      $meth_addr = $meth;
      $arg = 0;
      $bytes = 0;
      $str = 0;
      $len = -1;
      
      var $2 = _PyInt_FromLong($buf_size_addr);
      $bytes = $2;
      
      
      if ($bytes == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $5 = _PyTuple_New(1);
      $arg = $5;
      
      
      if ($arg == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      var $11 = HEAP[$bytes] - 1;
      
      
      HEAP[$bytes] = $11;
      
      
      
      
      if (HEAP[$bytes] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      
      
      
      var $22 = HEAP[HEAP[$bytes + 4] + 24];
      
      FUNCTION_TABLE[$22]($bytes);
      __label__ = 10;
      break;
     case 4:
      
      
      
      
      
      HEAP[$arg + 12] = $bytes;
      
      
      var $31 = _PyObject_Call($meth_addr, $arg, 0);
      $str = $31;
      
      
      if ($str == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      var $41 = $str;
      if ((HEAP[HEAP[$str + 4] + 84] & 134217728) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $45 = HEAP[HEAP[$41 + 4] + 12];
      var $46 = HEAP[_PyExc_TypeError];
      var $47 = _PyErr_Format($46, __str46, allocate([ $45, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 10;
      break;
     case 7:
      
      
      
      $len = HEAP[$41 + 8];
      
      
      
      if ($len > $buf_size_addr) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $54 = HEAP[_PyExc_ValueError];
      
      
      var $57 = _PyErr_Format($54, __str47, allocate([ $buf_size_addr, 0, 0, 0, $len, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 10;
      break;
     case 9:
      var $58 = $len;
      
      var $60 = _PyString_AsString($str);
      
      _llvm_memcpy_p0i8_p0i8_i32($buf_addr, $60, $58, 1, 0);
      __label__ = 10;
      break;
     case 10:
      
      
      if ($arg != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      var $67 = HEAP[$arg] - 1;
      
      
      HEAP[$arg] = $67;
      
      
      
      
      if (HEAP[$arg] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $78 = HEAP[HEAP[$arg + 4] + 24];
      
      FUNCTION_TABLE[$78]($arg);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($str != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $85 = HEAP[$str] - 1;
      
      
      HEAP[$str] = $85;
      
      
      
      
      if (HEAP[$str] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $96 = HEAP[HEAP[$str + 4] + 24];
      
      FUNCTION_TABLE[$96]($str);
      __label__ = 16;
      break;
     case 16:
      
      $0 = $len;
      
      $retval = $0;
      var $retval16 = $retval;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_ParseFile($self, $f) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $f_addr;
      var $retval;
      var $0;
      var $rv;
      var $readmethod;
      var $bytes_read;
      var $buf;
      $self_addr = $self;
      $f_addr = $f;
      $rv = 1;
      $readmethod = 0;
      
      var $2 = _PyObject_GetAttrString($f_addr, __str48);
      $readmethod = $2;
      
      
      if ($readmethod == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($5, __str49);
      $0 = 0;
      __label__ = 23;
      break;
     case 2:
      
      
      var $8 = HEAP[$self_addr + 8];
      var $9 = _PyExpat_XML_GetBuffer($8, 2048);
      $buf = $9;
      
      if ($9 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      if ($readmethod != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $16 = HEAP[$readmethod] - 1;
      
      
      HEAP[$readmethod] = $16;
      
      
      
      
      if (HEAP[$readmethod] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $27 = HEAP[HEAP[$readmethod + 4] + 24];
      
      FUNCTION_TABLE[$27]($readmethod);
      __label__ = 6;
      break;
     case 6:
      var $29 = _PyErr_NoMemory();
      $0 = $29;
      __label__ = 23;
      break;
     case 7:
      
      
      var $32 = _readinst($buf, $readmethod);
      $bytes_read = $32;
      
      
      if ($bytes_read < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      if ($readmethod != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $40 = HEAP[$readmethod] - 1;
      
      
      HEAP[$readmethod] = $40;
      
      
      
      
      if (HEAP[$readmethod] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $51 = HEAP[HEAP[$readmethod + 4] + 24];
      
      FUNCTION_TABLE[$51]($readmethod);
      __label__ = 11;
      break;
     case 11:
      $0 = 0;
      __label__ = 23;
      break;
     case 12:
      
      
      
      
      
      var $58 = HEAP[$self_addr + 8];
      
      var $60 = _PyExpat_XML_ParseBuffer($58, $bytes_read, $bytes_read == 0);
      $rv = $60;
      var $61 = _PyErr_Occurred();
      
      if ($61 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      
      
      if ($readmethod != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $68 = HEAP[$readmethod] - 1;
      
      
      HEAP[$readmethod] = $68;
      
      
      
      
      if (HEAP[$readmethod] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $79 = HEAP[HEAP[$readmethod + 4] + 24];
      
      FUNCTION_TABLE[$79]($readmethod);
      __label__ = 16;
      break;
     case 16:
      $0 = 0;
      __label__ = 23;
      break;
     case 17:
      
      
      if ($rv == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if ($bytes_read == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 19:
      
      
      if ($readmethod != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      var $90 = HEAP[$readmethod] - 1;
      
      
      HEAP[$readmethod] = $90;
      
      
      
      
      if (HEAP[$readmethod] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $101 = HEAP[HEAP[$readmethod + 4] + 24];
      
      FUNCTION_TABLE[$101]($readmethod);
      __label__ = 22;
      break;
     case 22:
      
      
      var $105 = _get_parse_result($self_addr, $rv);
      $0 = $105;
      __label__ = 23;
      break;
     case 23:
      
      $retval = $0;
      var $retval24 = $retval;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_SetBase($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $base = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str50, allocate([ $base, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 5;
      break;
     case 2:
      var $4 = HEAP[$base];
      
      
      var $7 = HEAP[$self_addr + 8];
      var $8 = _PyExpat_XML_SetBase($7, $4);
      
      if ($8 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _PyErr_NoMemory();
      $0 = $10;
      __label__ = 5;
      break;
     case 4:
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      $0 = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_GetBase($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    var $3 = HEAP[$self_addr + 8];
    var $4 = _PyExpat_XML_GetBase($3);
    var $5 = _Py_BuildValue(__str51, allocate([ $4, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
    $0 = $5;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _xmlparse_GetInputContext($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $offset = __stackBase__;
      var $size = __stackBase__ + 4;
      var $buffer;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 8];
      var $8 = _PyExpat_XML_GetInputContext($7, $offset, $size);
      $buffer = $8;
      
      
      if ($buffer != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $13 = HEAP[$size] - HEAP[$offset];
      
      
      var $16 = $buffer + HEAP[$offset];
      var $17 = _PyString_FromStringAndSize($16, $13);
      $0 = $17;
      __label__ = 5;
      break;
     case 3:
      
      var $19 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $19;
      $0 = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 4:
      
      var $21 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $21;
      $0 = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_ExternalEntityParserCreate($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $context = __stackBase__;
      var $encoding = __stackBase__ + 4;
      var $new_parser;
      var $i;
      var $handler;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$encoding] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str52, allocate([ $context, 0, 0, 0, $encoding, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 25;
      break;
     case 2:
      var $4 = __PyObject_GC_New(_Xmlparsetype);
      
      $new_parser = $4;
      
      
      if ($new_parser == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 25;
      break;
     case 4:
      
      
      var $10 = HEAP[$self_addr + 36];
      
      
      HEAP[$new_parser + 36] = $10;
      
      
      HEAP[$new_parser + 40] = 0;
      
      
      
      
      var $19 = $new_parser;
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      var $21 = HEAP[$19 + 36];
      var $22 = _malloc($21);
      
      
      HEAP[$new_parser + 32] = $22;
      
      
      
      
      if (HEAP[$new_parser + 32] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      _PyObject_GC_Del($new_parser);
      var $31 = _PyErr_NoMemory();
      $0 = $31;
      __label__ = 25;
      break;
     case 7:
      
      HEAP[$19 + 32] = 0;
      __label__ = 8;
      break;
     case 8:
      
      
      var $35 = HEAP[$self_addr + 12];
      
      
      HEAP[$new_parser + 12] = $35;
      
      
      var $40 = HEAP[$self_addr + 16];
      
      
      HEAP[$new_parser + 16] = $40;
      
      
      var $45 = HEAP[$self_addr + 20];
      
      
      HEAP[$new_parser + 20] = $45;
      
      
      HEAP[$new_parser + 24] = 0;
      
      
      var $52 = HEAP[$self_addr + 28];
      
      
      HEAP[$new_parser + 28] = $52;
      var $55 = HEAP[$encoding];
      var $56 = HEAP[$context];
      
      
      var $59 = HEAP[$self_addr + 8];
      var $60 = _PyExpat_XML_ExternalEntityParserCreate($59, $56, $55);
      
      
      HEAP[$new_parser + 8] = $60;
      
      
      HEAP[$new_parser + 48] = 0;
      
      
      var $67 = HEAP[$self_addr + 44];
      
      
      HEAP[$new_parser + 44] = $67;
      
      
      
      
      if (HEAP[$new_parser + 44] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $79 = HEAP[HEAP[$new_parser + 44]] + 1;
      var $80 = HEAP[$new_parser + 44];
      HEAP[$80] = $79;
      __label__ = 10;
      break;
     case 10:
      
      
      _PyObject_GC_Track($new_parser);
      
      
      
      
      var $87 = $new_parser;
      if (HEAP[$new_parser + 8] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      var $91 = HEAP[$87] - 1;
      
      HEAP[$87] = $91;
      
      
      
      if (HEAP[$87] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      var $101 = HEAP[HEAP[$new_parser + 4] + 24];
      
      
      FUNCTION_TABLE[$101]($new_parser);
      __label__ = 13;
      break;
     case 13:
      var $104 = _PyErr_NoMemory();
      $0 = $104;
      __label__ = 25;
      break;
     case 14:
      
      var $106 = HEAP[$87 + 8];
      
      
      _PyExpat_XML_SetUserData($106, $new_parser);
      $i = 0;
      
      
      
      
      
      var $114 = $i;
      if (HEAP[_handler_info + $i * 20] != 0) {
        __lastLabel__ = 14;
        __label__ = 15;
        break;
      } else {
        __lastLabel__ = 14;
        __label__ = 16;
        break;
      }
     case 15:
      var $115 = __lastLabel__ == 15 ? $122 : $114;
      var $116 = $115 + 1;
      $i = $116;
      
      
      
      
      
      var $122 = $i;
      if (HEAP[_handler_info + $i * 20] != 0) {
        __lastLabel__ = 15;
        __label__ = 15;
        break;
      } else {
        __lastLabel__ = 15;
        __label__ = 16;
        break;
      }
     case 16:
      var $_lcssa = __lastLabel__ == 14 ? $114 : $122;
      
      var $124 = _malloc($_lcssa * 4);
      
      
      
      HEAP[$new_parser + 48] = $124;
      
      
      
      
      var $132 = $new_parser;
      if (HEAP[$new_parser + 48] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $136 = HEAP[$132] - 1;
      
      HEAP[$132] = $136;
      
      
      
      if (HEAP[$132] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      var $146 = HEAP[HEAP[$new_parser + 4] + 24];
      
      
      FUNCTION_TABLE[$146]($new_parser);
      __label__ = 19;
      break;
     case 19:
      var $149 = _PyErr_NoMemory();
      $0 = $149;
      __label__ = 25;
      break;
     case 20:
      _clear_handlers($132, 1);
      $i = 0;
      
      
      
      
      
      if (HEAP[_handler_info + $i * 20] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      
      
      
      
      
      $handler = HEAP[HEAP[$self_addr + 48] + 4 * $i];
      
      if (HEAP[HEAP[$self_addr + 48] + 4 * $i] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      var $165 = HEAP[$handler] + 1;
      
      
      HEAP[$handler] = $165;
      
      
      
      
      var $172 = HEAP[$new_parser + 48] + 4 * $i;
      
      HEAP[$172] = $handler;
      
      
      
      var $177 = HEAP[_handler_info + $i * 20 + 4];
      
      
      
      var $181 = HEAP[_handler_info + $i * 20 + 8];
      
      
      var $184 = HEAP[$new_parser + 8];
      FUNCTION_TABLE[$177]($184, $181);
      __label__ = 23;
      break;
     case 23:
      
      var $186 = $i + 1;
      $i = $186;
      
      
      
      
      
      if (HEAP[_handler_info + $i * 20] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      $0 = $new_parser;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval28 = $retval;
      STACKTOP = __stackBase__;
      return $retval28;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_SetParamEntityParsing($p, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $flag = __stackBase__;
      $p_addr = $p;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str53, allocate([ $flag, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$flag];
      
      
      var $7 = HEAP[$p_addr + 8];
      var $8 = _PyExpat_XML_SetParamEntityParsing($7, $4);
      HEAP[$flag] = $8;
      var $9 = HEAP[$flag];
      var $10 = _PyInt_FromLong($9);
      $0 = $10;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_UseForeignDTD($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $flagobj = __stackBase__;
      var $flag;
      var $rc;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$flagobj] = 0;
      $flag = 1;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str54, 0, 1, allocate([ $flagobj, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      
      
      if (HEAP[$flagobj] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[$flagobj];
      var $7 = _PyObject_IsTrue($6);
      
      
      $flag = $7 != 0;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      var $14 = HEAP[$self_addr + 8];
      
      var $16 = _PyExpat_XML_UseForeignDTD($14, $flag & 255);
      $rc = $16;
      
      if ($16 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $20 = _set_error($self_addr, $rc);
      $0 = $20;
      __label__ = 7;
      break;
     case 6:
      
      var $22 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $22;
      $0 = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_template_buffer() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $i;
      $i = 0;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      HEAP[_template_buffer + $i] = $i & 255;
      
      var $5 = $i + 1;
      $i = $5;
      
      if ($5 <= 255) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[_template_buffer + 256] = 0;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyUnknownEncodingHandler($encodingHandlerData, $name, $info) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $encodingHandlerData_addr;
      var $name_addr;
      var $info_addr;
      var $retval;
      var $0;
      var $_u_string;
      var $result;
      var $i;
      var $c;
      $encodingHandlerData_addr = $encodingHandlerData;
      $name_addr = $name;
      $info_addr = $info;
      $_u_string = 0;
      $result = 0;
      
      var $2 = _PyUnicodeUCS2_Decode(_template_buffer, 256, $name_addr, __str62);
      
      $_u_string = $2;
      
      
      if ($_u_string == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $result;
      __label__ = 10;
      break;
     case 2:
      $i = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      $c = HEAP[HEAP[$_u_string + 12] + 2 * $i];
      var $13 = HEAP[HEAP[$_u_string + 12] + 2 * $i] == -3;
      var $14 = $i;
      if ($13) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      HEAP[$info_addr + $14 * 4] = -1;
      __label__ = 6;
      break;
     case 5:
      
      
      
      
      
      HEAP[$info_addr + $14 * 4] = $c;
      __label__ = 6;
      break;
     case 6:
      
      var $24 = $i + 1;
      $i = $24;
      
      if ($24 <= 255) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      HEAP[$info_addr + 1024] = 0;
      
      
      HEAP[$info_addr + 1028] = 0;
      
      
      HEAP[$info_addr + 1032] = 0;
      $result = 1;
      
      
      
      
      var $36 = HEAP[$_u_string] - 1;
      
      HEAP[$_u_string] = $36;
      
      
      
      if (HEAP[$_u_string] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $46 = HEAP[HEAP[$_u_string + 4] + 24];
      
      
      FUNCTION_TABLE[$46]($_u_string);
      __label__ = 9;
      break;
     case 9:
      
      $0 = $result;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newxmlparseobject($encoding, $namespace_separator, $intern) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $encoding_addr;
      var $namespace_separator_addr;
      var $intern_addr;
      var $retval;
      var $0;
      var $i;
      var $self;
      $encoding_addr = $encoding;
      $namespace_separator_addr = $namespace_separator;
      $intern_addr = $intern;
      var $1 = __PyObject_GC_New(_Xmlparsetype);
      
      $self = $1;
      
      
      if ($self == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 18;
      break;
     case 2:
      
      
      HEAP[$self + 12] = 1;
      
      
      HEAP[$self + 32] = 0;
      
      
      HEAP[$self + 36] = 8192;
      
      
      HEAP[$self + 40] = 0;
      
      
      HEAP[$self + 16] = 0;
      
      
      HEAP[$self + 20] = 0;
      
      
      HEAP[$self + 24] = 0;
      
      
      HEAP[$self + 28] = 0;
      
      
      HEAP[$self + 48] = 0;
      
      
      if ($namespace_separator_addr != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $29 = HEAP[$namespace_separator_addr] & 255;
      var $30 = _PyExpat_XML_ParserCreateNS($encoding_addr, $29);
      
      
      HEAP[$self + 8] = $30;
      __label__ = 5;
      break;
     case 4:
      
      var $34 = _PyExpat_XML_ParserCreate($encoding_addr);
      
      
      HEAP[$self + 8] = $34;
      __label__ = 5;
      break;
     case 5:
      
      
      
      HEAP[$self + 44] = $intern_addr;
      
      
      
      
      if (HEAP[$self + 44] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $49 = HEAP[HEAP[$self + 44]] + 1;
      var $50 = HEAP[$self + 44];
      HEAP[$50] = $49;
      __label__ = 7;
      break;
     case 7:
      
      
      _PyObject_GC_Track($self);
      
      
      
      
      if (HEAP[$self + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $57 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($57, __str63);
      
      
      
      
      var $62 = HEAP[$self] - 1;
      
      HEAP[$self] = $62;
      
      
      
      if (HEAP[$self] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $72 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$72]($self);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 18;
      break;
     case 11:
      
      
      var $77 = HEAP[$self + 8];
      
      
      _PyExpat_XML_SetUserData($77, $self);
      
      
      var $82 = HEAP[$self + 8];
      _PyExpat_XML_SetUnknownEncodingHandler($82, FUNCTION_TABLE_OFFSET + 10, 0);
      $i = 0;
      
      
      
      
      
      var $88 = $i;
      if (HEAP[_handler_info + $i * 20] != 0) {
        __lastLabel__ = 11;
        __label__ = 12;
        break;
      } else {
        __lastLabel__ = 11;
        __label__ = 13;
        break;
      }
     case 12:
      var $89 = __lastLabel__ == 12 ? $96 : $88;
      var $90 = $89 + 1;
      $i = $90;
      
      
      
      
      
      var $96 = $i;
      if (HEAP[_handler_info + $i * 20] != 0) {
        __lastLabel__ = 12;
        __label__ = 12;
        break;
      } else {
        __lastLabel__ = 12;
        __label__ = 13;
        break;
      }
     case 13:
      var $_lcssa = __lastLabel__ == 11 ? $88 : $96;
      
      var $98 = _malloc($_lcssa * 4);
      
      
      
      HEAP[$self + 48] = $98;
      
      
      
      
      var $106 = $self;
      if (HEAP[$self + 48] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      var $110 = HEAP[$106] - 1;
      
      HEAP[$106] = $110;
      
      
      
      if (HEAP[$106] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $120 = HEAP[HEAP[$self + 4] + 24];
      
      
      FUNCTION_TABLE[$120]($self);
      __label__ = 16;
      break;
     case 16:
      var $123 = _PyErr_NoMemory();
      $0 = $123;
      __label__ = 18;
      break;
     case 17:
      _clear_handlers($106, 1);
      
      
      $0 = $self;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_dealloc($self) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $i;
      var $temp;
      $self_addr = $self;
      
      
      _PyObject_GC_UnTrack($self_addr);
      
      
      
      
      if (HEAP[$self_addr + 8] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $8 = HEAP[$self_addr + 8];
      _PyExpat_XML_ParserFree($8);
      __label__ = 2;
      break;
     case 2:
      
      
      HEAP[$self_addr + 8] = 0;
      
      
      
      
      if (HEAP[$self_addr + 48] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      $i = 0;
      
      
      
      
      
      
      
      var $22 = HEAP[$self_addr + 48];
      if (HEAP[_handler_info + $i * 20] != 0) {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 8;
        break;
      }
     case 4:
      var $23 = __lastLabel__ == 7 ? $59 : $22;
      
      
      
      $temp = HEAP[$23 + 4 * $i];
      
      
      
      
      var $31 = HEAP[$self_addr + 48] + 4 * $i;
      HEAP[$31] = 0;
      
      
      if ($temp != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      var $37 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $37;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $48 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$48]($temp);
      __label__ = 7;
      break;
     case 7:
      
      var $51 = $i + 1;
      $i = $51;
      
      
      
      
      
      
      
      var $59 = HEAP[$self_addr + 48];
      if (HEAP[_handler_info + $i * 20] != 0) {
        __lastLabel__ = 7;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 7;
        __label__ = 8;
        break;
      }
     case 8:
      var $_lcssa = __lastLabel__ == 3 ? $22 : $59;
      var $60 = $_lcssa;
      _free($60);
      
      
      HEAP[$self_addr + 48] = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $69 = HEAP[$self_addr + 32];
      _free($69);
      
      
      HEAP[$self_addr + 32] = 0;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      if (HEAP[$self_addr + 44] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      var $78 = HEAP[$self_addr + 44];
      
      
      var $81 = HEAP[$78] - 1;
      var $82 = $78;
      HEAP[$82] = $81;
      
      
      
      if (HEAP[$78] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      var $92 = HEAP[HEAP[HEAP[$self_addr + 44] + 4] + 24];
      
      
      var $95 = HEAP[$self_addr + 44];
      FUNCTION_TABLE[$92]($95);
      __label__ = 14;
      break;
     case 14:
      
      
      _PyObject_GC_Del($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _handlername2int($name) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr;
      var $retval;
      var $0;
      var $i;
      $name_addr = $name;
      $i = 0;
      __label__ = 4;
      break;
     case 1:
      
      
      
      var $4 = HEAP[_handler_info + $i * 20];
      
      var $6 = _strcmp($name_addr, $4);
      
      var $8 = $i;
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = $8;
      __label__ = 6;
      break;
     case 3:
      var $9 = $8 + 1;
      $i = $9;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[_handler_info + $i * 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_pybool($istrue) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $istrue_addr;
      var $retval;
      var $0;
      var $iftmp_110;
      var $result;
      $istrue_addr = $istrue;
      
      
      if ($istrue_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $iftmp_110 = __Py_TrueStruct;
      __label__ = 3;
      break;
     case 2:
      $iftmp_110 = __Py_ZeroStruct;
      __label__ = 3;
      break;
     case 3:
      
      $result = $iftmp_110;
      
      
      
      var $7 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $7;
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_getattr($self, $name) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $name_addr;
      var $retval;
      var $0;
      var $handlernum;
      var $result;
      var $i;
      var $rc;
      var $o;
      var $o50;
      var $o56;
      var $o62;
      var $o68;
      var $o74;
      var $o80;
      var $o86;
      var $o92;
      var $o98;
      var $o104;
      var $o110;
      var $o116;
      var $o122;
      var $o128;
      var $o134;
      $self_addr = $self;
      $name_addr = $name;
      
      var $2 = _handlername2int($name_addr);
      $handlernum = $2;
      
      var $4 = $handlernum != -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      
      
      $result = HEAP[HEAP[$self_addr + 48] + 4 * $handlernum];
      
      
      if ($result == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $result = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      
      
      var $16 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $16;
      
      $0 = $result;
      __label__ = 110;
      break;
     case 4:
      
      
      
      
      if (HEAP[$name_addr] == 69) {
        __label__ = 5;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 5:
      
      var $25 = _strcmp($name_addr, __str64);
      
      if ($25 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $29 = HEAP[$self_addr + 8];
      var $30 = _PyExpat_XML_GetErrorCode($29);
      var $31 = _PyInt_FromLong($30);
      $0 = $31;
      __label__ = 110;
      break;
     case 7:
      
      var $33 = _strcmp($name_addr, __str65);
      
      if ($33 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      var $37 = HEAP[$self_addr + 8];
      var $38 = _PyExpat_XML_GetCurrentLineNumber($37);
      var $39 = _PyInt_FromLong($38);
      $0 = $39;
      __label__ = 110;
      break;
     case 9:
      
      var $41 = _strcmp($name_addr, __str66);
      
      if ($41 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $45 = HEAP[$self_addr + 8];
      var $46 = _PyExpat_XML_GetCurrentColumnNumber($45);
      var $47 = _PyInt_FromLong($46);
      $0 = $47;
      __label__ = 110;
      break;
     case 11:
      
      var $49 = _strcmp($name_addr, __str67);
      
      if ($49 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      var $53 = HEAP[$self_addr + 8];
      var $54 = _PyExpat_XML_GetCurrentByteIndex($53);
      var $55 = _PyInt_FromLong($54);
      $0 = $55;
      __label__ = 110;
      break;
     case 13:
      
      
      
      
      if (HEAP[$name_addr] == 67) {
        __label__ = 14;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 14:
      
      var $61 = _strcmp($name_addr, __str68);
      
      if ($61 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $65 = HEAP[$self_addr + 8];
      var $66 = _PyExpat_XML_GetCurrentLineNumber($65);
      var $67 = _PyInt_FromLong($66);
      $0 = $67;
      __label__ = 110;
      break;
     case 16:
      
      var $69 = _strcmp($name_addr, __str69);
      
      if ($69 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      var $73 = HEAP[$self_addr + 8];
      var $74 = _PyExpat_XML_GetCurrentColumnNumber($73);
      var $75 = _PyInt_FromLong($74);
      $0 = $75;
      __label__ = 110;
      break;
     case 18:
      
      var $77 = _strcmp($name_addr, __str70);
      
      if ($77 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      var $81 = HEAP[$self_addr + 8];
      var $82 = _PyExpat_XML_GetCurrentByteIndex($81);
      var $83 = _PyInt_FromLong($82);
      $0 = $83;
      __label__ = 110;
      break;
     case 20:
      
      
      
      
      if (HEAP[$name_addr] == 98) {
        __label__ = 21;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 21:
      
      var $89 = _strcmp($name_addr, __str71);
      
      if ($89 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $93 = HEAP[$self_addr + 36];
      var $94 = _PyInt_FromLong($93);
      $0 = $94;
      __label__ = 110;
      break;
     case 23:
      
      var $96 = _strcmp($name_addr, __str72);
      
      if ($96 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $102 = HEAP[$self_addr + 32] != 0;
      var $103 = _get_pybool($102);
      $0 = $103;
      __label__ = 110;
      break;
     case 25:
      
      var $105 = _strcmp($name_addr, __str73);
      
      if ($105 == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      var $109 = HEAP[$self_addr + 40];
      var $110 = _PyInt_FromLong($109);
      $0 = $110;
      __label__ = 110;
      break;
     case 27:
      
      var $112 = _strcmp($name_addr, __str74);
      
      if ($112 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      var $116 = HEAP[$self_addr + 28];
      var $117 = _get_pybool($116);
      $0 = $117;
      __label__ = 110;
      break;
     case 29:
      
      var $119 = _strcmp($name_addr, __str75);
      
      if ($119 == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      var $123 = HEAP[$self_addr + 16];
      var $124 = _get_pybool($123);
      $0 = $124;
      __label__ = 110;
      break;
     case 31:
      
      var $126 = _strcmp($name_addr, __str76);
      
      if ($126 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      var $130 = HEAP[$self_addr + 12];
      var $131 = _get_pybool($130);
      $0 = $131;
      __label__ = 110;
      break;
     case 33:
      
      var $133 = _strcmp($name_addr, __str77);
      
      if ($133 == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      var $137 = HEAP[$self_addr + 20];
      var $138 = _get_pybool($137);
      $0 = $138;
      __label__ = 110;
      break;
     case 35:
      
      var $140 = _strcmp($name_addr, __str78);
      
      if ($140 == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 36:
      
      
      
      
      if (HEAP[$self_addr + 44] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      var $147 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $147;
      $0 = __Py_NoneStruct;
      __label__ = 110;
      break;
     case 38:
      
      
      
      
      
      var $153 = HEAP[HEAP[$self_addr + 44]] + 1;
      var $154 = HEAP[$self_addr + 44];
      HEAP[$154] = $153;
      
      
      
      $0 = HEAP[$self_addr + 44];
      __label__ = 110;
      break;
     case 39:
      
      var $159 = _strcmp($name_addr, __str79);
      
      if ($159 == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 40:
      var $161 = _PyList_New(0);
      $rc = $161;
      
      
      if ($rc == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      $0 = 0;
      __label__ = 110;
      break;
     case 42:
      $i = 0;
      
      
      
      
      
      if (HEAP[_handler_info + $i * 20] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 43:
      
      var $170 = _handler_info + $i * 20;
      var $171 = _get_handler_name($170);
      $o = $171;
      
      if ($171 != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 44:
      
      
      var $175 = _PyList_Append($rc, $o);
      
      
      if ($o != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      
      
      
      var $180 = HEAP[$o] - 1;
      
      
      HEAP[$o] = $180;
      
      
      
      
      if (HEAP[$o] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $191 = HEAP[HEAP[$o + 4] + 24];
      
      FUNCTION_TABLE[$191]($o);
      __label__ = 47;
      break;
     case 47:
      
      var $194 = $i + 1;
      $i = $194;
      
      
      
      
      
      if (HEAP[_handler_info + $i * 20] != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      var $200 = _PyString_FromString(__str64);
      $o50 = $200;
      
      if ($200 != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 49:
      
      
      var $204 = _PyList_Append($rc, $o50);
      
      
      if ($o50 != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 50:
      
      
      
      var $209 = HEAP[$o50] - 1;
      
      
      HEAP[$o50] = $209;
      
      
      
      
      if (HEAP[$o50] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $220 = HEAP[HEAP[$o50 + 4] + 24];
      
      FUNCTION_TABLE[$220]($o50);
      __label__ = 52;
      break;
     case 52:
      var $222 = _PyString_FromString(__str65);
      $o56 = $222;
      
      if ($222 != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 53:
      
      
      var $226 = _PyList_Append($rc, $o56);
      
      
      if ($o56 != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 54:
      
      
      
      var $231 = HEAP[$o56] - 1;
      
      
      HEAP[$o56] = $231;
      
      
      
      
      if (HEAP[$o56] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      
      
      
      var $242 = HEAP[HEAP[$o56 + 4] + 24];
      
      FUNCTION_TABLE[$242]($o56);
      __label__ = 56;
      break;
     case 56:
      var $244 = _PyString_FromString(__str66);
      $o62 = $244;
      
      if ($244 != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 57:
      
      
      var $248 = _PyList_Append($rc, $o62);
      
      
      if ($o62 != 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 58:
      
      
      
      var $253 = HEAP[$o62] - 1;
      
      
      HEAP[$o62] = $253;
      
      
      
      
      if (HEAP[$o62] == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      
      
      
      var $264 = HEAP[HEAP[$o62 + 4] + 24];
      
      FUNCTION_TABLE[$264]($o62);
      __label__ = 60;
      break;
     case 60:
      var $266 = _PyString_FromString(__str67);
      $o68 = $266;
      
      if ($266 != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 61:
      
      
      var $270 = _PyList_Append($rc, $o68);
      
      
      if ($o68 != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 62:
      
      
      
      var $275 = HEAP[$o68] - 1;
      
      
      HEAP[$o68] = $275;
      
      
      
      
      if (HEAP[$o68] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      
      
      var $286 = HEAP[HEAP[$o68 + 4] + 24];
      
      FUNCTION_TABLE[$286]($o68);
      __label__ = 64;
      break;
     case 64:
      var $288 = _PyString_FromString(__str68);
      $o74 = $288;
      
      if ($288 != 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 65:
      
      
      var $292 = _PyList_Append($rc, $o74);
      
      
      if ($o74 != 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 66:
      
      
      
      var $297 = HEAP[$o74] - 1;
      
      
      HEAP[$o74] = $297;
      
      
      
      
      if (HEAP[$o74] == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      
      
      
      
      var $308 = HEAP[HEAP[$o74 + 4] + 24];
      
      FUNCTION_TABLE[$308]($o74);
      __label__ = 68;
      break;
     case 68:
      var $310 = _PyString_FromString(__str69);
      $o80 = $310;
      
      if ($310 != 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 69:
      
      
      var $314 = _PyList_Append($rc, $o80);
      
      
      if ($o80 != 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 70:
      
      
      
      var $319 = HEAP[$o80] - 1;
      
      
      HEAP[$o80] = $319;
      
      
      
      
      if (HEAP[$o80] == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      
      
      
      var $330 = HEAP[HEAP[$o80 + 4] + 24];
      
      FUNCTION_TABLE[$330]($o80);
      __label__ = 72;
      break;
     case 72:
      var $332 = _PyString_FromString(__str70);
      $o86 = $332;
      
      if ($332 != 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 73:
      
      
      var $336 = _PyList_Append($rc, $o86);
      
      
      if ($o86 != 0) {
        __label__ = 74;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 74:
      
      
      
      var $341 = HEAP[$o86] - 1;
      
      
      HEAP[$o86] = $341;
      
      
      
      
      if (HEAP[$o86] == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      
      
      
      
      var $352 = HEAP[HEAP[$o86 + 4] + 24];
      
      FUNCTION_TABLE[$352]($o86);
      __label__ = 76;
      break;
     case 76:
      var $354 = _PyString_FromString(__str71);
      $o92 = $354;
      
      if ($354 != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 77:
      
      
      var $358 = _PyList_Append($rc, $o92);
      
      
      if ($o92 != 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 78:
      
      
      
      var $363 = HEAP[$o92] - 1;
      
      
      HEAP[$o92] = $363;
      
      
      
      
      if (HEAP[$o92] == 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      
      
      
      
      var $374 = HEAP[HEAP[$o92 + 4] + 24];
      
      FUNCTION_TABLE[$374]($o92);
      __label__ = 80;
      break;
     case 80:
      var $376 = _PyString_FromString(__str72);
      $o98 = $376;
      
      if ($376 != 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 81:
      
      
      var $380 = _PyList_Append($rc, $o98);
      
      
      if ($o98 != 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 82:
      
      
      
      var $385 = HEAP[$o98] - 1;
      
      
      HEAP[$o98] = $385;
      
      
      
      
      if (HEAP[$o98] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      
      
      
      
      var $396 = HEAP[HEAP[$o98 + 4] + 24];
      
      FUNCTION_TABLE[$396]($o98);
      __label__ = 84;
      break;
     case 84:
      var $398 = _PyString_FromString(__str73);
      $o104 = $398;
      
      if ($398 != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 85:
      
      
      var $402 = _PyList_Append($rc, $o104);
      
      
      if ($o104 != 0) {
        __label__ = 86;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 86:
      
      
      
      var $407 = HEAP[$o104] - 1;
      
      
      HEAP[$o104] = $407;
      
      
      
      
      if (HEAP[$o104] == 0) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      
      
      
      
      var $418 = HEAP[HEAP[$o104 + 4] + 24];
      
      FUNCTION_TABLE[$418]($o104);
      __label__ = 88;
      break;
     case 88:
      var $420 = _PyString_FromString(__str74);
      $o110 = $420;
      
      if ($420 != 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 89:
      
      
      var $424 = _PyList_Append($rc, $o110);
      
      
      if ($o110 != 0) {
        __label__ = 90;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 90:
      
      
      
      var $429 = HEAP[$o110] - 1;
      
      
      HEAP[$o110] = $429;
      
      
      
      
      if (HEAP[$o110] == 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 91:
      
      
      
      
      var $440 = HEAP[HEAP[$o110 + 4] + 24];
      
      FUNCTION_TABLE[$440]($o110);
      __label__ = 92;
      break;
     case 92:
      var $442 = _PyString_FromString(__str75);
      $o116 = $442;
      
      if ($442 != 0) {
        __label__ = 93;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 93:
      
      
      var $446 = _PyList_Append($rc, $o116);
      
      
      if ($o116 != 0) {
        __label__ = 94;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 94:
      
      
      
      var $451 = HEAP[$o116] - 1;
      
      
      HEAP[$o116] = $451;
      
      
      
      
      if (HEAP[$o116] == 0) {
        __label__ = 95;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 95:
      
      
      
      
      var $462 = HEAP[HEAP[$o116 + 4] + 24];
      
      FUNCTION_TABLE[$462]($o116);
      __label__ = 96;
      break;
     case 96:
      var $464 = _PyString_FromString(__str76);
      $o122 = $464;
      
      if ($464 != 0) {
        __label__ = 97;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 97:
      
      
      var $468 = _PyList_Append($rc, $o122);
      
      
      if ($o122 != 0) {
        __label__ = 98;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 98:
      
      
      
      var $473 = HEAP[$o122] - 1;
      
      
      HEAP[$o122] = $473;
      
      
      
      
      if (HEAP[$o122] == 0) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      
      
      
      
      var $484 = HEAP[HEAP[$o122 + 4] + 24];
      
      FUNCTION_TABLE[$484]($o122);
      __label__ = 100;
      break;
     case 100:
      var $486 = _PyString_FromString(__str77);
      $o128 = $486;
      
      if ($486 != 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 101:
      
      
      var $490 = _PyList_Append($rc, $o128);
      
      
      if ($o128 != 0) {
        __label__ = 102;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 102:
      
      
      
      var $495 = HEAP[$o128] - 1;
      
      
      HEAP[$o128] = $495;
      
      
      
      
      if (HEAP[$o128] == 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 103:
      
      
      
      
      var $506 = HEAP[HEAP[$o128 + 4] + 24];
      
      FUNCTION_TABLE[$506]($o128);
      __label__ = 104;
      break;
     case 104:
      var $508 = _PyString_FromString(__str78);
      $o134 = $508;
      
      if ($508 != 0) {
        __label__ = 105;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 105:
      
      
      var $512 = _PyList_Append($rc, $o134);
      
      
      if ($o134 != 0) {
        __label__ = 106;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 106:
      
      
      
      var $517 = HEAP[$o134] - 1;
      
      
      HEAP[$o134] = $517;
      
      
      
      
      if (HEAP[$o134] == 0) {
        __label__ = 107;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 107:
      
      
      
      
      var $528 = HEAP[HEAP[$o134 + 4] + 24];
      
      FUNCTION_TABLE[$528]($o134);
      __label__ = 108;
      break;
     case 108:
      
      $0 = $rc;
      __label__ = 110;
      break;
     case 109:
      
      
      
      var $534 = _Py_FindMethod(_xmlparse_methods, $self_addr, $name_addr);
      $0 = $534;
      __label__ = 110;
      break;
     case 110:
      
      $retval = $0;
      var $retval142 = $retval;
      return $retval142;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sethandler($self, $name, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $name_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $handlernum;
      var $c_handler;
      var $temp;
      $self_addr = $self;
      $name_addr = $name;
      $v_addr = $v;
      
      var $2 = _handlername2int($name_addr);
      $handlernum = $2;
      
      
      if ($handlernum >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      $c_handler = 0;
      
      
      
      
      
      
      $temp = HEAP[HEAP[$self_addr + 48] + 4 * $handlernum];
      
      
      if ($v_addr == __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      
      if ($handlernum == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $c_handler = FUNCTION_TABLE_OFFSET + 8;
      __label__ = 5;
      break;
     case 5:
      $v_addr = 0;
      __label__ = 8;
      break;
     case 6:
      
      
      if ($v_addr != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $24 = HEAP[$v_addr] + 1;
      
      
      HEAP[$v_addr] = $24;
      
      
      
      
      $c_handler = HEAP[_handler_info + $handlernum * 20 + 8];
      __label__ = 8;
      break;
     case 8:
      
      
      
      
      var $35 = HEAP[$self_addr + 48] + 4 * $handlernum;
      
      HEAP[$35] = $v_addr;
      
      
      if ($temp != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $42 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $42;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $53 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$53]($temp);
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $58 = HEAP[_handler_info + $handlernum * 20 + 4];
      
      
      var $61 = HEAP[$self_addr + 8];
      
      FUNCTION_TABLE[$58]($61, $c_handler);
      $0 = 1;
      __label__ = 13;
      break;
     case 12:
      $0 = 0;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_setattr($self, $name, $v) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $name_addr;
      var $v_addr;
      var $retval;
      var $0;
      var $new_buffer_size;
      $self_addr = $self;
      $name_addr = $name;
      $v_addr = $v;
      
      
      if ($v_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = HEAP[_PyExc_RuntimeError];
      _PyErr_SetString($3, __str80);
      $0 = -1;
      __label__ = 53;
      break;
     case 2:
      
      var $5 = _strcmp($name_addr, __str72);
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 3:
      
      var $8 = _PyObject_IsTrue($v_addr);
      
      
      
      var $12 = HEAP[$self_addr + 32];
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      if ($12 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      var $16 = HEAP[$self_addr + 36];
      var $17 = _malloc($16);
      
      
      HEAP[$self_addr + 32] = $17;
      
      
      
      
      if (HEAP[$self_addr + 32] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $24 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 53;
      break;
     case 7:
      
      
      HEAP[$self_addr + 40] = 0;
      __label__ = 12;
      break;
     case 8:
      
      if ($12 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      var $29 = _flush_character_buffer($self_addr);
      
      if ($29 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -1;
      __label__ = 53;
      break;
     case 11:
      
      
      var $33 = HEAP[$self_addr + 32];
      _free($33);
      
      
      HEAP[$self_addr + 32] = 0;
      __label__ = 12;
      break;
     case 12:
      $0 = 0;
      __label__ = 53;
      break;
     case 13:
      
      var $37 = _strcmp($name_addr, __str74);
      
      if ($37 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      var $40 = _PyObject_IsTrue($v_addr);
      
      
      var $43 = $self_addr + 28;
      if ($40 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      HEAP[$43] = 1;
      __label__ = 17;
      break;
     case 16:
      HEAP[$43] = 0;
      __label__ = 17;
      break;
     case 17:
      
      
      var $46 = HEAP[$self_addr + 28];
      
      
      var $49 = HEAP[$self_addr + 8];
      _PyExpat_XML_SetReturnNSTriplet($49, $46);
      $0 = 0;
      __label__ = 53;
      break;
     case 18:
      
      var $51 = _strcmp($name_addr, __str75);
      
      if ($51 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      var $54 = _PyObject_IsTrue($v_addr);
      
      
      var $57 = $self_addr + 16;
      if ($54 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      HEAP[$57] = 1;
      __label__ = 22;
      break;
     case 21:
      HEAP[$57] = 0;
      __label__ = 22;
      break;
     case 22:
      $0 = 0;
      __label__ = 53;
      break;
     case 23:
      
      var $59 = _strcmp($name_addr, __str76);
      
      if ($59 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      
      var $62 = _PyObject_IsTrue($v_addr);
      
      
      var $65 = $self_addr + 12;
      if ($62 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      HEAP[$65] = 1;
      __label__ = 27;
      break;
     case 26:
      HEAP[$65] = 0;
      __label__ = 27;
      break;
     case 27:
      $0 = 0;
      __label__ = 53;
      break;
     case 28:
      
      var $67 = _strcmp($name_addr, __str77);
      
      if ($67 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 29:
      
      var $70 = _PyObject_IsTrue($v_addr);
      
      
      var $73 = $self_addr + 20;
      if ($70 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      HEAP[$73] = 1;
      __label__ = 32;
      break;
     case 31:
      HEAP[$73] = 0;
      __label__ = 32;
      break;
     case 32:
      $0 = 0;
      __label__ = 53;
      break;
     case 33:
      
      var $75 = _strcmp($name_addr, __str71);
      
      if ($75 == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 34:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$v_addr + 4] + 84] & 8388608) == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $84 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($84, __str81);
      $0 = -1;
      __label__ = 53;
      break;
     case 36:
      
      
      
      
      $new_buffer_size = HEAP[$v_addr + 8];
      
      
      
      
      
      if (HEAP[$self_addr + 36] == $new_buffer_size) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      $0 = 0;
      __label__ = 53;
      break;
     case 38:
      
      
      if ($new_buffer_size <= 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $96 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($96, __str82);
      $0 = -1;
      __label__ = 53;
      break;
     case 40:
      
      
      
      
      if (HEAP[$self_addr + 32] != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 41:
      
      
      
      
      if (HEAP[$self_addr + 40] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      
      var $106 = _flush_character_buffer($self_addr);
      __label__ = 43;
      break;
     case 43:
      
      
      var $109 = HEAP[$self_addr + 32];
      _free($109);
      __label__ = 44;
      break;
     case 44:
      
      var $111 = _malloc($new_buffer_size);
      
      
      HEAP[$self_addr + 32] = $111;
      
      
      
      
      if (HEAP[$self_addr + 32] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      var $118 = _PyErr_NoMemory();
      $0 = -1;
      __label__ = 53;
      break;
     case 46:
      
      
      
      HEAP[$self_addr + 36] = $new_buffer_size;
      $0 = 0;
      __label__ = 53;
      break;
     case 47:
      
      var $123 = _strcmp($name_addr, __str83);
      
      if ($123 == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      var $126 = _flush_character_buffer($self_addr);
      
      if ($126 < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      $0 = -1;
      __label__ = 53;
      break;
     case 50:
      
      
      
      var $131 = _sethandler($self_addr, $name_addr, $v_addr);
      
      if ($131 != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      $0 = 0;
      __label__ = 53;
      break;
     case 52:
      var $133 = HEAP[_PyExc_AttributeError];
      
      _PyErr_SetString($133, $name_addr);
      $0 = -1;
      __label__ = 53;
      break;
     case 53:
      
      $retval = $0;
      var $retval54 = $retval;
      return $retval54;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_traverse($op, $visit, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $op_addr;
      var $visit_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $i;
      var $vret;
      $op_addr = $op;
      $visit_addr = $visit;
      $arg_addr = $arg;
      $i = 0;
      __label__ = 5;
      break;
     case 1:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$op_addr + 48] + 4 * $i] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      
      var $13 = HEAP[HEAP[$op_addr + 48] + 4 * $i];
      var $14 = $visit_addr;
      
      var $16 = FUNCTION_TABLE[$14]($13, $arg_addr);
      $vret = $16;
      
      
      if ($vret != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      $0 = $vret;
      __label__ = 7;
      break;
     case 4:
      
      var $21 = $i + 1;
      $i = $21;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[_handler_info + $i * 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _xmlparse_clear($op) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $op_addr;
      var $retval;
      var $0;
      var $_py_tmp;
      $op_addr = $op;
      
      _clear_handlers($op_addr, 0);
      
      
      
      
      if (HEAP[$op_addr + 44] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      $_py_tmp = HEAP[$op_addr + 44];
      
      
      HEAP[$op_addr + 44] = 0;
      
      
      
      var $14 = HEAP[$_py_tmp] - 1;
      
      
      HEAP[$_py_tmp] = $14;
      
      
      
      
      if (HEAP[$_py_tmp] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $25 = HEAP[HEAP[$_py_tmp + 4] + 24];
      
      FUNCTION_TABLE[$25]($_py_tmp);
      __label__ = 3;
      break;
     case 3:
      $0 = 0;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pyexpat_ParserCreate($notused, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $notused_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $encoding = __stackBase__;
      var $namespace_separator = __stackBase__ + 4;
      var $intern = __stackBase__ + 8;
      var $result;
      var $intern_decref;
      $notused_addr = $notused;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$encoding] = 0;
      HEAP[$namespace_separator] = 0;
      HEAP[$intern] = 0;
      $intern_decref = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kw_addr, __str85, _kwlist_11530, allocate([ $encoding, 0, 0, 0, $namespace_separator, 0, 0, 0, $intern, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 17;
      break;
     case 2:
      
      
      if (HEAP[$namespace_separator] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $7 = HEAP[$namespace_separator];
      var $8 = _strlen($7);
      
      if ($8 > 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $10 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($10, __str88);
      $0 = 0;
      __label__ = 17;
      break;
     case 5:
      
      
      if (HEAP[$intern] == __Py_NoneStruct) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$intern] = 0;
      __label__ = 13;
      break;
     case 7:
      
      
      if (HEAP[$intern] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $15 = _PyDict_New();
      HEAP[$intern] = $15;
      
      
      if (HEAP[$intern] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 17;
      break;
     case 10:
      $intern_decref = 1;
      __label__ = 13;
      break;
     case 11:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$intern] + 4] + 84] & 536870912) == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $25 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($25, __str89);
      $0 = 0;
      __label__ = 17;
      break;
     case 13:
      var $26 = HEAP[$intern];
      var $27 = HEAP[$namespace_separator];
      var $28 = HEAP[$encoding];
      var $29 = _newxmlparseobject($28, $27, $26);
      $result = $29;
      
      
      if ($intern_decref != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      var $32 = HEAP[$intern];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$intern] + 4] + 24];
      var $45 = HEAP[$intern];
      FUNCTION_TABLE[$44]($45);
      __label__ = 16;
      break;
     case 16:
      
      $0 = $result;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _pyexpat_ErrorString($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $code = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$code] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str90, allocate([ $code, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      var $4 = HEAP[$code];
      var $5 = _PyExpat_XML_ErrorString($4);
      var $6 = _Py_BuildValue(__str51, allocate([ $5, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $6;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initpyexpat() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $d;
      var $errmod_name;
      var $errors_module;
      var $modelmod_name;
      var $model_module;
      var $sys_modules;
      var $version;
      var $capi_object;
      var $info = __stackBase__;
      var $features;
      var $list;
      var $i;
      var $ok;
      var $item;
      var $0 = _PyString_FromString(__str93);
      $errmod_name = $0;
      
      
      if ($errmod_name == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _PyString_FromString(__str94);
      $modelmod_name = $3;
      
      
      if ($modelmod_name == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      HEAP[_Xmlparsetype + 4] = _PyType_Type;
      var $6 = _Py_InitModule4(__str95, _pyexpat_methods, _pyexpat_module_documentation, 0, 1013);
      $m = $6;
      
      
      if ($m == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[_ErrorObject] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $11 = _PyErr_NewException(__str96, 0, 0);
      HEAP[_ErrorObject] = $11;
      
      
      if (HEAP[_ErrorObject] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $17 = HEAP[HEAP[_ErrorObject]] + 1;
      var $18 = HEAP[_ErrorObject];
      HEAP[$18] = $17;
      var $19 = HEAP[_ErrorObject];
      
      var $21 = _PyModule_AddObject($m, __str97, $19);
      
      
      
      var $25 = HEAP[HEAP[_ErrorObject]] + 1;
      var $26 = HEAP[_ErrorObject];
      HEAP[$26] = $25;
      var $27 = HEAP[_ErrorObject];
      
      var $29 = _PyModule_AddObject($m, __str98, $27);
      
      var $31 = HEAP[_Xmlparsetype] + 1;
      HEAP[_Xmlparsetype] = $31;
      
      var $33 = _PyModule_AddObject($m, __str99, _Xmlparsetype);
      var $34 = _PyString_FromString(__str100);
      $version = $34;
      
      if ($34 == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $38 = _PyModule_AddObject($m, __str101, $version);
      var $39 = _PyExpat_XML_ExpatVersion();
      
      var $41 = _PyModule_AddStringConstant($m, __str102, $39);
      _PyExpat_XML_ExpatVersionInfo($info);
      
      var $43 = HEAP[$info + 8];
      
      var $45 = HEAP[$info + 4];
      
      var $47 = HEAP[$info];
      var $48 = _Py_BuildValue(__str103, allocate([ $47, 0, 0, 0, $45, 0, 0, 0, $43, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      
      var $50 = _PyModule_AddObject($m, __str104, $48);
      _init_template_buffer();
      
      var $52 = _PyModule_AddStringConstant($m, __str105, __str106);
      var $53 = _PySys_GetObject(__str107);
      $sys_modules = $53;
      
      var $55 = _PyModule_GetDict($m);
      $d = $55;
      
      
      var $58 = _PyDict_GetItem($d, $errmod_name);
      $errors_module = $58;
      
      
      if ($errors_module == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $61 = _PyModule_New(__str93);
      $errors_module = $61;
      
      
      if ($errors_module != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $67 = _PyDict_SetItem($sys_modules, $errmod_name, $errors_module);
      
      
      var $70 = _PyModule_AddObject($m, __str108, $errors_module);
      __label__ = 9;
      break;
     case 9:
      
      
      
      var $74 = HEAP[$errmod_name] - 1;
      
      
      HEAP[$errmod_name] = $74;
      
      
      
      
      if (HEAP[$errmod_name] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $85 = HEAP[HEAP[$errmod_name + 4] + 24];
      
      FUNCTION_TABLE[$85]($errmod_name);
      __label__ = 11;
      break;
     case 11:
      
      
      var $89 = _PyDict_GetItem($d, $modelmod_name);
      $model_module = $89;
      
      if ($89 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $91 = _PyModule_New(__str94);
      $model_module = $91;
      
      
      if ($model_module != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      var $97 = _PyDict_SetItem($sys_modules, $modelmod_name, $model_module);
      
      
      var $100 = _PyModule_AddObject($m, __str109, $model_module);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $104 = HEAP[$modelmod_name] - 1;
      
      
      HEAP[$modelmod_name] = $104;
      
      
      
      
      if (HEAP[$modelmod_name] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $115 = HEAP[HEAP[$modelmod_name + 4] + 24];
      
      FUNCTION_TABLE[$115]($modelmod_name);
      __label__ = 16;
      break;
     case 16:
      
      
      if ($errors_module == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      if ($model_module == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $121 = _PyExpat_XML_GetFeatureList();
      $features = $121;
      var $122 = _PyList_New(0);
      $list = $122;
      
      
      if ($list == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      _PyErr_Clear();
      __label__ = 33;
      break;
     case 20:
      $i = 0;
      __label__ = 30;
      break;
     case 21:
      
      
      
      
      var $129 = HEAP[$features + 12 * $i + 8];
      
      
      
      
      var $134 = HEAP[$features + 12 * $i + 4];
      var $135 = _Py_BuildValue(__str110, allocate([ $134, 0, 0, 0, $129, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $item = $135;
      
      
      var $138 = $list;
      if ($item == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      
      var $141 = HEAP[$138] - 1;
      
      
      HEAP[$list] = $141;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $152 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$152]($list);
      __label__ = 24;
      break;
     case 24:
      $list = 0;
      __label__ = 33;
      break;
     case 25:
      
      var $155 = _PyList_Append($138, $item);
      $ok = $155;
      
      
      
      var $159 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $159;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      var $170 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$170]($item);
      __label__ = 27;
      break;
     case 27:
      
      
      if ($ok < 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      _PyErr_Clear();
      __label__ = 31;
      break;
     case 29:
      
      var $175 = $i + 1;
      $i = $175;
      __label__ = 30;
      break;
     case 30:
      
      
      
      
      
      
      if (HEAP[$features + 12 * $i] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      if ($list != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      var $185 = _PyModule_AddObject($m, __str111, $list);
      __label__ = 33;
      break;
     case 33:
      var $186 = _PyExpat_XML_ErrorString(1);
      
      var $188 = _PyModule_AddStringConstant($errors_module, __str112, $186);
      var $189 = _PyExpat_XML_ErrorString(2);
      
      var $191 = _PyModule_AddStringConstant($errors_module, __str113, $189);
      var $192 = _PyExpat_XML_ErrorString(3);
      
      var $194 = _PyModule_AddStringConstant($errors_module, __str114, $192);
      var $195 = _PyExpat_XML_ErrorString(4);
      
      var $197 = _PyModule_AddStringConstant($errors_module, __str115, $195);
      var $198 = _PyExpat_XML_ErrorString(5);
      
      var $200 = _PyModule_AddStringConstant($errors_module, __str116, $198);
      var $201 = _PyExpat_XML_ErrorString(6);
      
      var $203 = _PyModule_AddStringConstant($errors_module, __str117, $201);
      var $204 = _PyExpat_XML_ErrorString(7);
      
      var $206 = _PyModule_AddStringConstant($errors_module, __str118, $204);
      var $207 = _PyExpat_XML_ErrorString(8);
      
      var $209 = _PyModule_AddStringConstant($errors_module, __str119, $207);
      var $210 = _PyExpat_XML_ErrorString(9);
      
      var $212 = _PyModule_AddStringConstant($errors_module, __str120, $210);
      var $213 = _PyExpat_XML_ErrorString(10);
      
      var $215 = _PyModule_AddStringConstant($errors_module, __str121, $213);
      var $216 = _PyExpat_XML_ErrorString(11);
      
      var $218 = _PyModule_AddStringConstant($errors_module, __str122, $216);
      var $219 = _PyExpat_XML_ErrorString(12);
      
      var $221 = _PyModule_AddStringConstant($errors_module, __str123, $219);
      var $222 = _PyExpat_XML_ErrorString(13);
      
      var $224 = _PyModule_AddStringConstant($errors_module, __str124, $222);
      var $225 = _PyExpat_XML_ErrorString(14);
      
      var $227 = _PyModule_AddStringConstant($errors_module, __str125, $225);
      var $228 = _PyExpat_XML_ErrorString(15);
      
      var $230 = _PyModule_AddStringConstant($errors_module, __str126, $228);
      var $231 = _PyExpat_XML_ErrorString(16);
      
      var $233 = _PyModule_AddStringConstant($errors_module, __str127, $231);
      var $234 = _PyExpat_XML_ErrorString(17);
      
      var $236 = _PyModule_AddStringConstant($errors_module, __str128, $234);
      var $237 = _PyExpat_XML_ErrorString(18);
      
      var $239 = _PyModule_AddStringConstant($errors_module, __str129, $237);
      var $240 = _PyExpat_XML_ErrorString(19);
      
      var $242 = _PyModule_AddStringConstant($errors_module, __str130, $240);
      var $243 = _PyExpat_XML_ErrorString(20);
      
      var $245 = _PyModule_AddStringConstant($errors_module, __str131, $243);
      var $246 = _PyExpat_XML_ErrorString(21);
      
      var $248 = _PyModule_AddStringConstant($errors_module, __str132, $246);
      var $249 = _PyExpat_XML_ErrorString(22);
      
      var $251 = _PyModule_AddStringConstant($errors_module, __str133, $249);
      var $252 = _PyExpat_XML_ErrorString(23);
      
      var $254 = _PyModule_AddStringConstant($errors_module, __str134, $252);
      var $255 = _PyExpat_XML_ErrorString(24);
      
      var $257 = _PyModule_AddStringConstant($errors_module, __str135, $255);
      var $258 = _PyExpat_XML_ErrorString(25);
      
      var $260 = _PyModule_AddStringConstant($errors_module, __str136, $258);
      var $261 = _PyExpat_XML_ErrorString(26);
      
      var $263 = _PyModule_AddStringConstant($errors_module, __str137, $261);
      var $264 = _PyExpat_XML_ErrorString(27);
      
      var $266 = _PyModule_AddStringConstant($errors_module, __str138, $264);
      var $267 = _PyExpat_XML_ErrorString(28);
      
      var $269 = _PyModule_AddStringConstant($errors_module, __str139, $267);
      var $270 = _PyExpat_XML_ErrorString(29);
      
      var $272 = _PyModule_AddStringConstant($errors_module, __str140, $270);
      var $273 = _PyExpat_XML_ErrorString(30);
      
      var $275 = _PyModule_AddStringConstant($errors_module, __str141, $273);
      var $276 = _PyExpat_XML_ErrorString(31);
      
      var $278 = _PyModule_AddStringConstant($errors_module, __str142, $276);
      var $279 = _PyExpat_XML_ErrorString(32);
      
      var $281 = _PyModule_AddStringConstant($errors_module, __str143, $279);
      var $282 = _PyExpat_XML_ErrorString(33);
      
      var $284 = _PyModule_AddStringConstant($errors_module, __str144, $282);
      var $285 = _PyExpat_XML_ErrorString(34);
      
      var $287 = _PyModule_AddStringConstant($errors_module, __str145, $285);
      var $288 = _PyExpat_XML_ErrorString(35);
      
      var $290 = _PyModule_AddStringConstant($errors_module, __str146, $288);
      var $291 = _PyExpat_XML_ErrorString(36);
      
      var $293 = _PyModule_AddStringConstant($errors_module, __str147, $291);
      var $294 = _PyExpat_XML_ErrorString(37);
      
      var $296 = _PyModule_AddStringConstant($errors_module, __str148, $294);
      
      var $298 = _PyModule_AddStringConstant($errors_module, __str149, __str150);
      
      var $300 = _PyModule_AddIntConstant($m, __str151, 0);
      
      var $302 = _PyModule_AddIntConstant($m, __str152, 1);
      
      var $304 = _PyModule_AddIntConstant($m, __str153, 2);
      
      var $306 = _PyModule_AddStringConstant($model_module, __str149, __str154);
      
      var $308 = _PyModule_AddIntConstant($model_module, __str155, 1);
      
      var $310 = _PyModule_AddIntConstant($model_module, __str156, 2);
      
      var $312 = _PyModule_AddIntConstant($model_module, __str157, 3);
      
      var $314 = _PyModule_AddIntConstant($model_module, __str158, 4);
      
      var $316 = _PyModule_AddIntConstant($model_module, __str159, 5);
      
      var $318 = _PyModule_AddIntConstant($model_module, __str160, 6);
      
      var $320 = _PyModule_AddIntConstant($model_module, __str161, 0);
      
      var $322 = _PyModule_AddIntConstant($model_module, __str162, 1);
      
      var $324 = _PyModule_AddIntConstant($model_module, __str163, 2);
      
      var $326 = _PyModule_AddIntConstant($model_module, __str164, 3);
      HEAP[_capi_11609 + 4] = 80;
      HEAP[_capi_11609] = __str165;
      HEAP[_capi_11609 + 8] = 2;
      HEAP[_capi_11609 + 12] = 0;
      HEAP[_capi_11609 + 16] = 0;
      HEAP[_capi_11609 + 20] = FUNCTION_TABLE_OFFSET + 12;
      HEAP[_capi_11609 + 24] = FUNCTION_TABLE_OFFSET + 14;
      HEAP[_capi_11609 + 28] = FUNCTION_TABLE_OFFSET + 16;
      HEAP[_capi_11609 + 32] = FUNCTION_TABLE_OFFSET + 18;
      HEAP[_capi_11609 + 36] = FUNCTION_TABLE_OFFSET + 20;
      HEAP[_capi_11609 + 40] = FUNCTION_TABLE_OFFSET + 22;
      HEAP[_capi_11609 + 44] = FUNCTION_TABLE_OFFSET + 24;
      HEAP[_capi_11609 + 48] = FUNCTION_TABLE_OFFSET + 26;
      HEAP[_capi_11609 + 52] = FUNCTION_TABLE_OFFSET + 28;
      HEAP[_capi_11609 + 56] = FUNCTION_TABLE_OFFSET + 30;
      HEAP[_capi_11609 + 60] = FUNCTION_TABLE_OFFSET + 32;
      HEAP[_capi_11609 + 64] = FUNCTION_TABLE_OFFSET + 34;
      HEAP[_capi_11609 + 68] = FUNCTION_TABLE_OFFSET + 36;
      HEAP[_capi_11609 + 72] = FUNCTION_TABLE_OFFSET + 38;
      HEAP[_capi_11609 + 76] = FUNCTION_TABLE_OFFSET + 40;
      var $327 = _PyCapsule_New(_capi_11609, __str166, 0);
      $capi_object = $327;
      
      if ($327 != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      var $331 = _PyModule_AddObject($m, __str167, $capi_object);
      __label__ = 35;
      break;
     case 35:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initpyexpat"] = _initpyexpat;
  function _clear_handlers($self, $initial) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $initial_addr;
      var $i;
      var $temp;
      $self_addr = $self;
      $initial_addr = $initial;
      $i = 0;
      
      
      
      
      
      if (HEAP[_handler_info + $i * 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      
      
      
      
      var $11 = HEAP[$self_addr + 48] + 4 * $i;
      if ($initial_addr != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      HEAP[$11] = 0;
      __label__ = 7;
      break;
     case 3:
      
      $temp = HEAP[$11];
      
      
      
      
      var $17 = HEAP[$self_addr + 48] + 4 * $i;
      HEAP[$17] = 0;
      
      
      if ($temp != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $23 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $23;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $34 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$34]($temp);
      __label__ = 6;
      break;
     case 6:
      
      
      
      var $39 = HEAP[_handler_info + $i * 20 + 4];
      
      
      var $42 = HEAP[$self_addr + 8];
      FUNCTION_TABLE[$39]($42, 0);
      __label__ = 7;
      break;
     case 7:
      
      var $44 = $i + 1;
      $i = $44;
      
      
      
      
      
      if (HEAP[_handler_info + $i * 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_ParserCreate($encodingName) {
    
    var $encodingName_addr;
    var $retval;
    var $0;
    $encodingName_addr = $encodingName;
    
    var $2 = _PyExpat_XML_ParserCreate_MM($encodingName_addr, 0, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _PyExpat_XML_ParserCreateNS($encodingName, $nsSep) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    
    var $encodingName_addr;
    var $nsSep_addr;
    var $retval;
    var $0;
    var $tmp = __stackBase__;
    $encodingName_addr = $encodingName;
    $nsSep_addr = $nsSep;
    
    
    HEAP[$tmp] = $nsSep_addr;
    
    var $tmp1 = $tmp;
    var $4 = _PyExpat_XML_ParserCreate_MM($encodingName_addr, 0, $tmp1);
    $0 = $4;
    
    $retval = $0;
    var $retval2 = $retval;
    STACKTOP = __stackBase__;
    return $retval2;
  }
  function _PyExpat_XML_ParserCreate_MM($encodingName, $memsuite, $nameSep) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $encodingName_addr;
      var $memsuite_addr;
      var $nameSep_addr;
      var $retval;
      var $0;
      var $parser;
      $encodingName_addr = $encodingName;
      $memsuite_addr = $memsuite;
      $nameSep_addr = $nameSep;
      
      
      
      var $4 = _parserCreate($encodingName_addr, $memsuite_addr, $nameSep_addr, 0);
      $parser = $4;
      
      
      if ($parser != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$parser + 236] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      var $12 = _setContext($parser, _implicitContext);
      
      if ($12 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      _PyExpat_XML_ParserFree($parser);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      $0 = $parser;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parserCreate($encodingName, $memsuite, $nameSep, $dtd) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $encodingName_addr;
      var $memsuite_addr;
      var $nameSep_addr;
      var $dtd_addr;
      var $retval;
      var $0;
      var $parser;
      var $mtemp;
      var $mtemp4;
      $encodingName_addr = $encodingName;
      $memsuite_addr = $memsuite;
      $nameSep_addr = $nameSep;
      $dtd_addr = $dtd;
      
      
      if ($memsuite_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $5 = HEAP[$memsuite_addr];
      var $6 = FUNCTION_TABLE[$5](496);
      
      $parser = $6;
      
      
      if ($parser != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      $mtemp = $parser + 12;
      
      
      var $14 = HEAP[$memsuite_addr];
      
      
      HEAP[$mtemp] = $14;
      
      
      var $19 = HEAP[$memsuite_addr + 4];
      
      
      HEAP[$mtemp + 4] = $19;
      
      
      var $24 = HEAP[$memsuite_addr + 8];
      
      
      HEAP[$mtemp + 8] = $24;
      __label__ = 6;
      break;
     case 3:
      var $27 = _malloc(496);
      
      $parser = $27;
      
      
      if ($parser != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      $mtemp4 = $parser + 12;
      
      
      HEAP[$mtemp4] = FUNCTION_TABLE_OFFSET + 42;
      
      
      HEAP[$mtemp4 + 4] = FUNCTION_TABLE_OFFSET + 44;
      
      
      HEAP[$mtemp4 + 8] = FUNCTION_TABLE_OFFSET + 46;
      __label__ = 6;
      break;
     case 5:
      var $39 = $parser;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      
      
      var $41 = $parser;
      if ($parser == 0) {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 8;
        break;
      }
     case 7:
      var $42 = __lastLabel__ == 5 ? $39 : $41;
      $0 = $42;
      __label__ = 23;
      break;
     case 8:
      
      HEAP[$41 + 8] = 0;
      
      
      HEAP[$parser + 32] = 0;
      
      
      HEAP[$parser + 380] = 16;
      
      
      
      var $51 = HEAP[$parser + 12];
      
      
      
      var $55 = HEAP[$parser + 380] * 16;
      var $56 = FUNCTION_TABLE[$51]($55);
      var $57 = $56;
      
      
      HEAP[$parser + 392] = $57;
      
      
      
      
      
      var $65 = $parser + 12;
      if (HEAP[$parser + 392] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $67 = HEAP[$65 + 8];
      
      
      FUNCTION_TABLE[$67]($parser);
      $0 = 0;
      __label__ = 23;
      break;
     case 10:
      
      var $71 = HEAP[$65];
      var $72 = FUNCTION_TABLE[$71](1024);
      
      
      HEAP[$parser + 44] = $72;
      
      
      
      
      var $79 = $parser;
      if (HEAP[$parser + 44] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      var $82 = HEAP[$79 + 12 + 8];
      
      
      
      var $86 = HEAP[$parser + 392];
      FUNCTION_TABLE[$82]($86);
      
      
      
      var $90 = HEAP[$parser + 12 + 8];
      
      
      FUNCTION_TABLE[$90]($parser);
      $0 = 0;
      __label__ = 23;
      break;
     case 12:
      
      
      var $95 = HEAP[$79 + 44] + 1024;
      
      
      HEAP[$parser + 48] = $95;
      
      
      var $100 = $parser;
      if ($dtd_addr != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$100 + 356] = $dtd_addr;
      __label__ = 16;
      break;
     case 14:
      
      var $104 = _dtdCreate($100 + 12);
      
      
      HEAP[$parser + 356] = $104;
      
      
      
      
      if (HEAP[$parser + 356] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      var $114 = HEAP[$parser + 12 + 8];
      
      
      var $117 = HEAP[$parser + 44];
      FUNCTION_TABLE[$114]($117);
      
      
      
      var $121 = HEAP[$parser + 12 + 8];
      
      
      
      var $125 = HEAP[$parser + 392];
      FUNCTION_TABLE[$121]($125);
      
      
      
      var $129 = HEAP[$parser + 12 + 8];
      
      
      FUNCTION_TABLE[$129]($parser);
      $0 = 0;
      __label__ = 23;
      break;
     case 16:
      
      
      HEAP[$parser + 376] = 0;
      
      
      HEAP[$parser + 368] = 0;
      
      
      HEAP[$parser + 304] = 0;
      
      
      HEAP[$parser + 468] = 0;
      
      
      HEAP[$parser + 464] = 0;
      
      
      HEAP[$parser + 124] = 0;
      
      
      HEAP[$parser + 248] = 0;
      
      
      HEAP[$parser + 472] = 33;
      
      
      HEAP[$parser + 236] = 0;
      
      
      HEAP[$parser + 237] = 0;
      
      
      HEAP[$parser + 396] = 0;
      
      
      HEAP[$parser + 400] = 0;
      
      
      HEAP[$parser + 404] = 0;
      
      
      
      
      _poolInit($parser + 416, $parser + 12);
      
      
      
      
      _poolInit($parser + 440, $parser + 12);
      
      
      _parserInit($parser, $encodingName_addr);
      
      
      if ($encodingName_addr != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[$parser + 232] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      _PyExpat_XML_ParserFree($parser);
      $0 = 0;
      __label__ = 23;
      break;
     case 19:
      
      
      if ($nameSep_addr != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      HEAP[$parser + 236] = 1;
      var $179 = _PyExpat_XmlGetUtf8InternalEncodingNS();
      
      
      HEAP[$parser + 228] = $179;
      
      var $183 = HEAP[$nameSep_addr];
      
      
      HEAP[$parser + 472] = $183;
      __label__ = 22;
      break;
     case 21:
      var $186 = _PyExpat_XmlGetUtf8InternalEncoding();
      
      
      HEAP[$parser + 228] = $186;
      __label__ = 22;
      break;
     case 22:
      
      $0 = $parser;
      __label__ = 23;
      break;
     case 23:
      
      $retval = $0;
      var $retval24 = $retval;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parserInit($parser, $encodingName) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $encodingName_addr;
      var $iftmp_0;
      $parser_addr = $parser;
      $encodingName_addr = $encodingName;
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 48;
      
      
      _PyExpat_XmlPrologStateInit($parser_addr + 256);
      
      
      if ($encodingName_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $9 = _poolCopyString($parser_addr + 416, $encodingName_addr);
      $iftmp_0 = $9;
      __label__ = 3;
      break;
     case 2:
      $iftmp_0 = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      
      HEAP[$parser_addr + 232] = $iftmp_0;
      
      
      HEAP[$parser_addr + 360] = 0;
      
      
      
      
      var $19 = _PyExpat_XmlInitEncoding($parser_addr + 148, $parser_addr + 144, 0);
      
      
      HEAP[$parser_addr] = 0;
      
      
      HEAP[$parser_addr + 4] = 0;
      
      
      HEAP[$parser_addr + 52] = 0;
      
      
      HEAP[$parser_addr + 56] = 0;
      
      
      HEAP[$parser_addr + 60] = 0;
      
      
      HEAP[$parser_addr + 64] = 0;
      
      
      HEAP[$parser_addr + 68] = 0;
      
      
      HEAP[$parser_addr + 72] = 0;
      
      
      HEAP[$parser_addr + 76] = 0;
      
      
      HEAP[$parser_addr + 80] = 0;
      
      
      HEAP[$parser_addr + 84] = 0;
      
      
      HEAP[$parser_addr + 88] = 0;
      
      
      HEAP[$parser_addr + 92] = 0;
      
      
      HEAP[$parser_addr + 96] = 0;
      
      
      HEAP[$parser_addr + 100] = 0;
      
      
      HEAP[$parser_addr + 104] = 0;
      
      
      HEAP[$parser_addr + 108] = 0;
      
      
      HEAP[$parser_addr + 112] = 0;
      
      
      
      HEAP[$parser_addr + 116] = $parser_addr;
      
      
      HEAP[$parser_addr + 120] = 0;
      
      
      HEAP[$parser_addr + 128] = 0;
      
      
      HEAP[$parser_addr + 132] = 0;
      
      
      HEAP[$parser_addr + 136] = 0;
      
      
      HEAP[$parser_addr + 140] = 0;
      
      
      var $71 = HEAP[$parser_addr + 8];
      
      
      HEAP[$parser_addr + 24] = $71;
      
      
      var $76 = HEAP[$parser_addr + 8];
      
      
      HEAP[$parser_addr + 28] = $76;
      
      
      HEAP[$parser_addr + 36] = 0;
      
      
      HEAP[$parser_addr + 40] = 0;
      
      
      HEAP[$parser_addr + 344] = 0;
      
      
      HEAP[$parser_addr + 348] = 0;
      
      
      HEAP[$parser_addr + 316] = 0;
      
      
      HEAP[$parser_addr + 320] = 0;
      
      
      HEAP[$parser_addr + 324] = 0;
      
      
      HEAP[$parser_addr + 328] = 0;
      
      
      HEAP[$parser_addr + 332] = 0;
      
      
      HEAP[$parser_addr + 336] = 0;
      
      
      HEAP[$parser_addr + 340] = 0;
      
      
      HEAP[$parser_addr + 352] = 0;
      
      
      HEAP[$parser_addr + 353] = 0;
      
      
      
      _llvm_memset_p0i8_i32($parser_addr + 408, 0, 8, 1, 0);
      
      
      HEAP[$parser_addr + 284] = 0;
      
      
      HEAP[$parser_addr + 288] = 0;
      
      
      HEAP[$parser_addr + 292] = 0;
      
      
      HEAP[$parser_addr + 296] = 0;
      
      
      HEAP[$parser_addr + 300] = 0;
      
      
      HEAP[$parser_addr + 308] = 1;
      
      
      HEAP[$parser_addr + 312] = 0;
      
      
      HEAP[$parser_addr + 364] = 0;
      
      
      HEAP[$parser_addr + 372] = 0;
      
      
      HEAP[$parser_addr + 384] = 0;
      
      
      HEAP[$parser_addr + 240] = 0;
      
      
      HEAP[$parser_addr + 252] = 0;
      
      
      HEAP[$parser_addr + 244] = 0;
      
      
      HEAP[$parser_addr + 476] = 0;
      
      
      
      HEAP[$parser_addr + 480] = 0;
      
      
      HEAP[$parser_addr + 488] = 0;
      
      
      HEAP[$parser_addr + 489] = 0;
      
      
      HEAP[$parser_addr + 492] = 0;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _moveToFreeBindingList($parser, $bindings) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $bindings_addr;
      var $b;
      $parser_addr = $parser;
      $bindings_addr = $bindings;
      
      if ($bindings != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $b = $bindings_addr;
      
      
      var $4 = HEAP[$bindings_addr + 4];
      $bindings_addr = $4;
      
      
      var $7 = HEAP[$parser_addr + 376];
      
      
      HEAP[$b + 4] = $7;
      
      
      
      HEAP[$parser_addr + 376] = $b;
      
      
      if ($bindings_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_ParserReset($parser, $encodingName) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $encodingName_addr;
      var $retval;
      var $0;
      var $tStk;
      var $openEntityList;
      var $tag;
      var $openEntity;
      $parser_addr = $parser;
      $encodingName_addr = $encodingName;
      
      
      
      
      if (HEAP[$parser_addr + 476] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 9;
      break;
     case 2:
      
      
      
      $tStk = HEAP[$parser_addr + 364];
      
      if (HEAP[$parser_addr + 364] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      $tag = $tStk;
      
      
      var $12 = HEAP[$tStk];
      $tStk = $12;
      
      
      var $15 = HEAP[$parser_addr + 368];
      
      
      HEAP[$tag] = $15;
      
      
      var $20 = HEAP[$tag + 44];
      
      _moveToFreeBindingList($parser_addr, $20);
      
      
      HEAP[$tag + 44] = 0;
      
      
      
      HEAP[$parser_addr + 368] = $tag;
      
      
      if ($tStk != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      $openEntityList = HEAP[$parser_addr + 300];
      
      if (HEAP[$parser_addr + 300] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $openEntity = $openEntityList;
      
      
      
      $openEntityList = HEAP[$openEntity + 8];
      
      
      var $38 = HEAP[$parser_addr + 304];
      
      
      HEAP[$openEntity + 8] = $38;
      
      
      
      HEAP[$parser_addr + 304] = $openEntity;
      
      
      if ($openEntityList != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $47 = HEAP[$parser_addr + 372];
      
      _moveToFreeBindingList($parser_addr, $47);
      
      
      
      var $52 = HEAP[$parser_addr + 12 + 8];
      
      
      var $55 = HEAP[$parser_addr + 240];
      FUNCTION_TABLE[$52]($55);
      
      
      
      
      if (HEAP[$parser_addr + 252] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $62 = HEAP[$parser_addr + 252];
      
      
      var $65 = HEAP[$parser_addr + 244];
      FUNCTION_TABLE[$62]($65);
      __label__ = 8;
      break;
     case 8:
      
      
      _poolClear($parser_addr + 416);
      
      
      _poolClear($parser_addr + 440);
      
      
      _parserInit($parser_addr, $encodingName_addr);
      
      
      
      
      var $76 = HEAP[$parser_addr + 356];
      _dtdReset($76, $parser_addr + 12);
      
      var $78 = _setContext($parser_addr, _implicitContext);
      
      $0 = $78;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      
      var $retval1112 = $retval & 255;
      return $retval1112;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_SetEncoding($parser, $encodingName) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $encodingName_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      $encodingName_addr = $encodingName;
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 8;
      break;
     case 3:
      
      
      var $13 = $parser_addr;
      if ($encodingName_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      HEAP[$13 + 232] = 0;
      __label__ = 7;
      break;
     case 5:
      
      
      var $17 = _poolCopyString($13 + 416, $encodingName_addr);
      
      
      HEAP[$parser_addr + 232] = $17;
      
      
      
      
      if (HEAP[$parser_addr + 232] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 8;
      break;
     case 7:
      $0 = 1;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_ExternalEntityParserCreate($oldParser, $context, $encodingName) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 2;
    _memset(__stackBase__, 0, 2);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $oldParser_addr;
      var $context_addr;
      var $encodingName_addr;
      var $retval;
      var $0;
      var $parser;
      var $newDtd;
      var $oldDtd;
      var $oldStartElementHandler;
      var $oldEndElementHandler;
      var $oldCharacterDataHandler;
      var $oldProcessingInstructionHandler;
      var $oldCommentHandler;
      var $oldStartCdataSectionHandler;
      var $oldEndCdataSectionHandler;
      var $oldDefaultHandler;
      var $oldUnparsedEntityDeclHandler;
      var $oldNotationDeclHandler;
      var $oldStartNamespaceDeclHandler;
      var $oldEndNamespaceDeclHandler;
      var $oldNotStandaloneHandler;
      var $oldExternalEntityRefHandler;
      var $oldSkippedEntityHandler;
      var $oldUnknownEncodingHandler;
      var $oldElementDeclHandler;
      var $oldAttlistDeclHandler;
      var $oldEntityDeclHandler;
      var $oldXmlDeclHandler;
      var $oldDeclElementType;
      var $oldUserData;
      var $oldHandlerArg;
      var $oldDefaultExpandInternalEntities;
      var $oldExternalEntityRefHandlerArg;
      var $oldParamEntityParsing;
      var $oldInEntityValue;
      var $oldns_triplets;
      var $tmp = __stackBase__;
      $oldParser_addr = $oldParser;
      $context_addr = $context;
      $encodingName_addr = $encodingName;
      
      $parser = $oldParser_addr;
      $newDtd = 0;
      
      
      
      $oldDtd = HEAP[$parser + 356];
      
      
      
      $oldStartElementHandler = HEAP[$parser + 52];
      
      
      
      $oldEndElementHandler = HEAP[$parser + 56];
      
      
      
      $oldCharacterDataHandler = HEAP[$parser + 60];
      
      
      
      $oldProcessingInstructionHandler = HEAP[$parser + 64];
      
      
      
      $oldCommentHandler = HEAP[$parser + 68];
      
      
      
      $oldStartCdataSectionHandler = HEAP[$parser + 72];
      
      
      
      $oldEndCdataSectionHandler = HEAP[$parser + 76];
      
      
      
      $oldDefaultHandler = HEAP[$parser + 80];
      
      
      
      $oldUnparsedEntityDeclHandler = HEAP[$parser + 92];
      
      
      
      $oldNotationDeclHandler = HEAP[$parser + 96];
      
      
      
      $oldStartNamespaceDeclHandler = HEAP[$parser + 100];
      
      
      
      $oldEndNamespaceDeclHandler = HEAP[$parser + 104];
      
      
      
      $oldNotStandaloneHandler = HEAP[$parser + 108];
      
      
      
      $oldExternalEntityRefHandler = HEAP[$parser + 112];
      
      
      
      $oldSkippedEntityHandler = HEAP[$parser + 120];
      
      
      
      $oldUnknownEncodingHandler = HEAP[$parser + 124];
      
      
      
      $oldElementDeclHandler = HEAP[$parser + 128];
      
      
      
      $oldAttlistDeclHandler = HEAP[$parser + 132];
      
      
      
      $oldEntityDeclHandler = HEAP[$parser + 136];
      
      
      
      $oldXmlDeclHandler = HEAP[$parser + 140];
      
      
      
      $oldDeclElementType = HEAP[$parser + 344];
      
      
      
      $oldUserData = HEAP[$parser];
      
      
      
      $oldHandlerArg = HEAP[$parser + 4];
      
      
      
      $oldDefaultExpandInternalEntities = HEAP[$parser + 308];
      
      
      
      $oldExternalEntityRefHandlerArg = HEAP[$parser + 116];
      
      
      
      $oldParamEntityParsing = HEAP[$parser + 492];
      
      
      
      
      $oldInEntityValue = HEAP[$parser + 256 + 20];
      
      
      
      $oldns_triplets = HEAP[$parser + 237];
      
      
      if ($context_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $newDtd = $oldDtd;
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      var $97 = $parser;
      if (HEAP[$parser + 236] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $99 = HEAP[$97 + 472];
      
      HEAP[$tmp] = $99;
      
      
      
      var $tmp3 = $tmp;
      
      var $105 = _parserCreate($encodingName_addr, $parser + 12, $tmp3, $newDtd);
      $parser = $105;
      __lastLabel__ = 3;
      __label__ = 5;
      break;
     case 4:
      
      
      
      var $109 = _parserCreate($encodingName_addr, $97 + 12, 0, $newDtd);
      $parser = $109;
      __lastLabel__ = 4;
      __label__ = 5;
      break;
     case 5:
      var $110 = __lastLabel__ == 4 ? $109 : $105;
      
      if ($110 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 19;
      break;
     case 7:
      
      
      
      HEAP[$parser + 52] = $oldStartElementHandler;
      
      
      
      HEAP[$parser + 56] = $oldEndElementHandler;
      
      
      
      HEAP[$parser + 60] = $oldCharacterDataHandler;
      
      
      
      HEAP[$parser + 64] = $oldProcessingInstructionHandler;
      
      
      
      HEAP[$parser + 68] = $oldCommentHandler;
      
      
      
      HEAP[$parser + 72] = $oldStartCdataSectionHandler;
      
      
      
      HEAP[$parser + 76] = $oldEndCdataSectionHandler;
      
      
      
      HEAP[$parser + 80] = $oldDefaultHandler;
      
      
      
      HEAP[$parser + 92] = $oldUnparsedEntityDeclHandler;
      
      
      
      HEAP[$parser + 96] = $oldNotationDeclHandler;
      
      
      
      HEAP[$parser + 100] = $oldStartNamespaceDeclHandler;
      
      
      
      HEAP[$parser + 104] = $oldEndNamespaceDeclHandler;
      
      
      
      HEAP[$parser + 108] = $oldNotStandaloneHandler;
      
      
      
      HEAP[$parser + 112] = $oldExternalEntityRefHandler;
      
      
      
      HEAP[$parser + 120] = $oldSkippedEntityHandler;
      
      
      
      HEAP[$parser + 124] = $oldUnknownEncodingHandler;
      
      
      
      HEAP[$parser + 128] = $oldElementDeclHandler;
      
      
      
      HEAP[$parser + 132] = $oldAttlistDeclHandler;
      
      
      
      HEAP[$parser + 136] = $oldEntityDeclHandler;
      
      
      
      HEAP[$parser + 140] = $oldXmlDeclHandler;
      
      
      
      HEAP[$parser + 344] = $oldDeclElementType;
      
      
      
      HEAP[$parser] = $oldUserData;
      
      
      
      var $181 = $parser;
      if ($oldUserData == $oldHandlerArg) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $183 = HEAP[$181];
      
      
      HEAP[$parser + 4] = $183;
      __label__ = 10;
      break;
     case 9:
      
      
      
      HEAP[$181 + 4] = $parser;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if ($oldExternalEntityRefHandlerArg != $oldParser_addr) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      HEAP[$parser + 116] = $oldExternalEntityRefHandlerArg;
      __label__ = 12;
      break;
     case 12:
      
      
      
      HEAP[$parser + 308] = $oldDefaultExpandInternalEntities;
      
      
      
      HEAP[$parser + 237] = $oldns_triplets;
      
      
      
      HEAP[$parser + 476] = $oldParser_addr;
      
      
      
      HEAP[$parser + 492] = $oldParamEntityParsing;
      
      
      
      
      HEAP[$parser + 256 + 20] = $oldInEntityValue;
      
      
      var $213 = $parser;
      if ($context_addr != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      
      
      
      var $217 = HEAP[$parser + 356];
      
      var $219 = _dtdCopy($217, $oldDtd, $213 + 12);
      
      if ($219 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      var $223 = _setContext($parser, $context_addr);
      
      if ($223 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      _PyExpat_XML_ParserFree($parser);
      $0 = 0;
      __label__ = 19;
      break;
     case 16:
      
      
      HEAP[$parser + 280] = FUNCTION_TABLE_OFFSET + 50;
      __label__ = 18;
      break;
     case 17:
      
      HEAP[$213 + 488] = 1;
      
      
      _PyExpat_XmlPrologStateInitExternalEntity($parser + 256);
      
      
      HEAP[$parser + 280] = FUNCTION_TABLE_OFFSET + 52;
      __label__ = 18;
      break;
     case 18:
      
      $0 = $parser;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval20 = $retval;
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _destroyBindings($bindings, $parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $bindings_addr;
      var $parser_addr;
      var $b;
      $bindings_addr = $bindings;
      $parser_addr = $parser;
      $b = $bindings;
      
      if ($bindings == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      $bindings_addr = HEAP[$b + 4];
      
      
      
      var $7 = HEAP[$parser_addr + 12 + 8];
      
      
      var $10 = HEAP[$b + 16];
      FUNCTION_TABLE[$7]($10);
      
      
      
      var $14 = HEAP[$parser_addr + 12 + 8];
      
      
      FUNCTION_TABLE[$14]($b);
      
      $b = $bindings_addr;
      
      if ($bindings_addr == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_ParserFree($parser) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $tagList;
      var $entityList;
      var $p;
      var $openEntity;
      $parser_addr = $parser;
      
      
      if ($parser_addr == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $4 = HEAP[$parser_addr + 364];
      $tagList = $4;
      __lastLabel__ = 1;
      __label__ = 2;
      break;
     case 2:
      var $5 = __lastLabel__ == 5 ? $_pr : $4;
      
      if ($5 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      var $11 = $parser_addr;
      if (HEAP[$parser_addr + 368] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      $tagList = HEAP[$11 + 368];
      
      
      HEAP[$parser_addr + 368] = 0;
      __label__ = 5;
      break;
     case 5:
      
      $p = $tagList;
      
      
      var $19 = HEAP[$tagList];
      $tagList = $19;
      
      
      
      var $23 = HEAP[$parser_addr + 12 + 8];
      
      
      var $26 = HEAP[$p + 36];
      FUNCTION_TABLE[$23]($26);
      
      
      var $29 = HEAP[$p + 44];
      
      _destroyBindings($29, $parser_addr);
      
      
      
      var $34 = HEAP[$parser_addr + 12 + 8];
      
      
      FUNCTION_TABLE[$34]($p);
      var $_pr = $tagList;
      __lastLabel__ = 5;
      __label__ = 2;
      break;
     case 6:
      
      var $38 = HEAP[$11 + 300];
      $entityList = $38;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $39 = __lastLabel__ == 10 ? $_pr1 : $38;
      
      if ($39 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      var $45 = $parser_addr;
      if (HEAP[$parser_addr + 304] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      $entityList = HEAP[$45 + 304];
      
      
      HEAP[$parser_addr + 304] = 0;
      __label__ = 10;
      break;
     case 10:
      
      $openEntity = $entityList;
      
      
      var $53 = HEAP[$entityList + 8];
      $entityList = $53;
      
      
      
      var $57 = HEAP[$parser_addr + 12 + 8];
      
      
      FUNCTION_TABLE[$57]($openEntity);
      var $_pr1 = $entityList;
      __lastLabel__ = 10;
      __label__ = 7;
      break;
     case 11:
      
      var $61 = HEAP[$45 + 376];
      
      _destroyBindings($61, $parser_addr);
      
      
      var $65 = HEAP[$parser_addr + 372];
      
      _destroyBindings($65, $parser_addr);
      
      
      _poolDestroy($parser_addr + 416);
      
      
      _poolDestroy($parser_addr + 440);
      
      
      
      
      if (HEAP[$parser_addr + 488] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$parser_addr + 356] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      
      var $88 = HEAP[$parser_addr + 356];
      var $89 = HEAP[$parser_addr + 476] == 0 & 255;
      _dtdDestroy($88, $89, $parser_addr + 12);
      __label__ = 14;
      break;
     case 14:
      
      
      
      var $93 = HEAP[$parser_addr + 12 + 8];
      
      
      
      var $97 = HEAP[$parser_addr + 392];
      FUNCTION_TABLE[$93]($97);
      
      
      
      var $101 = HEAP[$parser_addr + 12 + 8];
      
      
      var $104 = HEAP[$parser_addr + 464];
      FUNCTION_TABLE[$101]($104);
      
      
      
      var $108 = HEAP[$parser_addr + 12 + 8];
      
      
      var $111 = HEAP[$parser_addr + 8];
      FUNCTION_TABLE[$108]($111);
      
      
      
      var $115 = HEAP[$parser_addr + 12 + 8];
      
      
      var $118 = HEAP[$parser_addr + 44];
      FUNCTION_TABLE[$115]($118);
      
      
      
      var $122 = HEAP[$parser_addr + 12 + 8];
      
      
      
      var $126 = HEAP[$parser_addr + 396];
      FUNCTION_TABLE[$122]($126);
      
      
      
      var $130 = HEAP[$parser_addr + 12 + 8];
      
      
      var $133 = HEAP[$parser_addr + 240];
      FUNCTION_TABLE[$130]($133);
      
      
      
      
      if (HEAP[$parser_addr + 252] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $140 = HEAP[$parser_addr + 252];
      
      
      var $143 = HEAP[$parser_addr + 244];
      FUNCTION_TABLE[$140]($143);
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $147 = HEAP[$parser_addr + 12 + 8];
      
      
      FUNCTION_TABLE[$147]($parser_addr);
      __label__ = 17;
      break;
     case 17:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_UseParserAsHandlerArg($parser) {
    
    var $parser_addr;
    $parser_addr = $parser;
    
    
    
    
    HEAP[$parser_addr + 4] = $parser_addr;
    return;
  }
  function _PyExpat_XML_UseForeignDTD($parser, $useDTD) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $useDTD_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      $useDTD_addr = $useDTD;
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 26;
      __label__ = 4;
      break;
     case 3:
      
      
      
      HEAP[$parser_addr + 489] = $useDTD_addr;
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_SetReturnNSTriplet($parser, $do_nst) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $do_nst_addr;
      $parser_addr = $parser;
      $do_nst_addr = $do_nst;
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      HEAP[$parser_addr + 237] = $do_nst_addr != 0;
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_SetUserData($parser, $p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $p_addr;
      $parser_addr = $parser;
      $p_addr = $p;
      
      
      
      
      
      
      var $6 = HEAP[$parser_addr + 4] == HEAP[$parser_addr];
      
      
      
      HEAP[$parser_addr] = $p_addr;
      if ($6) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $12 = HEAP[$parser_addr];
      
      
      HEAP[$parser_addr + 4] = $12;
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_SetBase($parser, $p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $p_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      $p_addr = $p;
      
      
      var $3 = $parser_addr;
      if ($p_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[$3 + 356] + 80;
      
      var $8 = _poolCopyString($6, $p_addr);
      $p_addr = $8;
      
      
      if ($p_addr == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 6;
      break;
     case 3:
      
      
      
      HEAP[$parser_addr + 360] = $p_addr;
      __label__ = 5;
      break;
     case 4:
      
      HEAP[$3 + 360] = 0;
      __label__ = 5;
      break;
     case 5:
      $0 = 1;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_GetBase($parser) {
    
    var $parser_addr;
    var $retval;
    var $0;
    $parser_addr = $parser;
    
    
    
    $0 = HEAP[$parser_addr + 360];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _PyExpat_XML_GetSpecifiedAttributeCount($parser) {
    
    var $parser_addr;
    var $retval;
    var $0;
    $parser_addr = $parser;
    
    
    
    $0 = HEAP[$parser_addr + 384];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _PyExpat_XML_GetIdAttributeIndex($parser) {
    
    var $parser_addr;
    var $retval;
    var $0;
    $parser_addr = $parser;
    
    
    
    $0 = HEAP[$parser_addr + 388];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _PyExpat_XML_SetElementHandler($parser, $start, $end) {
    
    var $parser_addr;
    var $start_addr;
    var $end_addr;
    $parser_addr = $parser;
    $start_addr = $start;
    $end_addr = $end;
    
    
    
    HEAP[$parser_addr + 52] = $start_addr;
    
    
    
    HEAP[$parser_addr + 56] = $end_addr;
    return;
  }
  function _PyExpat_XML_SetStartElementHandler($parser, $start) {
    
    var $parser_addr;
    var $start_addr;
    $parser_addr = $parser;
    $start_addr = $start;
    
    
    
    HEAP[$parser_addr + 52] = $start_addr;
    return;
  }
  function _PyExpat_XML_SetEndElementHandler($parser, $end) {
    
    var $parser_addr;
    var $end_addr;
    $parser_addr = $parser;
    $end_addr = $end;
    
    
    
    HEAP[$parser_addr + 56] = $end_addr;
    return;
  }
  function _PyExpat_XML_SetCharacterDataHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 60] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetProcessingInstructionHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 64] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetCommentHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 68] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetCdataSectionHandler($parser, $start, $end) {
    
    var $parser_addr;
    var $start_addr;
    var $end_addr;
    $parser_addr = $parser;
    $start_addr = $start;
    $end_addr = $end;
    
    
    
    HEAP[$parser_addr + 72] = $start_addr;
    
    
    
    HEAP[$parser_addr + 76] = $end_addr;
    return;
  }
  function _PyExpat_XML_SetStartCdataSectionHandler($parser, $start) {
    
    var $parser_addr;
    var $start_addr;
    $parser_addr = $parser;
    $start_addr = $start;
    
    
    
    HEAP[$parser_addr + 72] = $start_addr;
    return;
  }
  function _PyExpat_XML_SetEndCdataSectionHandler($parser, $end) {
    
    var $parser_addr;
    var $end_addr;
    $parser_addr = $parser;
    $end_addr = $end;
    
    
    
    HEAP[$parser_addr + 76] = $end_addr;
    return;
  }
  function _PyExpat_XML_SetDefaultHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 80] = $handler_addr;
    
    
    HEAP[$parser_addr + 308] = 0;
    return;
  }
  function _PyExpat_XML_SetDefaultHandlerExpand($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 80] = $handler_addr;
    
    
    HEAP[$parser_addr + 308] = 1;
    return;
  }
  function _PyExpat_XML_SetDoctypeDeclHandler($parser, $start, $end) {
    
    var $parser_addr;
    var $start_addr;
    var $end_addr;
    $parser_addr = $parser;
    $start_addr = $start;
    $end_addr = $end;
    
    
    
    HEAP[$parser_addr + 84] = $start_addr;
    
    
    
    HEAP[$parser_addr + 88] = $end_addr;
    return;
  }
  function _PyExpat_XML_SetStartDoctypeDeclHandler($parser, $start) {
    
    var $parser_addr;
    var $start_addr;
    $parser_addr = $parser;
    $start_addr = $start;
    
    
    
    HEAP[$parser_addr + 84] = $start_addr;
    return;
  }
  function _PyExpat_XML_SetEndDoctypeDeclHandler($parser, $end) {
    
    var $parser_addr;
    var $end_addr;
    $parser_addr = $parser;
    $end_addr = $end;
    
    
    
    HEAP[$parser_addr + 88] = $end_addr;
    return;
  }
  function _PyExpat_XML_SetUnparsedEntityDeclHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 92] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetNotationDeclHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 96] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetNamespaceDeclHandler($parser, $start, $end) {
    
    var $parser_addr;
    var $start_addr;
    var $end_addr;
    $parser_addr = $parser;
    $start_addr = $start;
    $end_addr = $end;
    
    
    
    HEAP[$parser_addr + 100] = $start_addr;
    
    
    
    HEAP[$parser_addr + 104] = $end_addr;
    return;
  }
  function _PyExpat_XML_SetStartNamespaceDeclHandler($parser, $start) {
    
    var $parser_addr;
    var $start_addr;
    $parser_addr = $parser;
    $start_addr = $start;
    
    
    
    HEAP[$parser_addr + 100] = $start_addr;
    return;
  }
  function _PyExpat_XML_SetEndNamespaceDeclHandler($parser, $end) {
    
    var $parser_addr;
    var $end_addr;
    $parser_addr = $parser;
    $end_addr = $end;
    
    
    
    HEAP[$parser_addr + 104] = $end_addr;
    return;
  }
  function _PyExpat_XML_SetNotStandaloneHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 108] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetExternalEntityRefHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 112] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetExternalEntityRefHandlerArg($parser, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $arg_addr;
      $parser_addr = $parser;
      $arg_addr = $arg;
      
      
      if ($arg_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      HEAP[$parser_addr + 116] = $arg_addr;
      __label__ = 3;
      break;
     case 2:
      
      
      
      HEAP[$parser_addr + 116] = $parser_addr;
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_SetSkippedEntityHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 120] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetUnknownEncodingHandler($parser, $handler, $data) {
    
    var $parser_addr;
    var $handler_addr;
    var $data_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    $data_addr = $data;
    
    
    
    HEAP[$parser_addr + 124] = $handler_addr;
    
    
    
    HEAP[$parser_addr + 248] = $data_addr;
    return;
  }
  function _PyExpat_XML_SetElementDeclHandler($parser, $eldecl) {
    
    var $parser_addr;
    var $eldecl_addr;
    $parser_addr = $parser;
    $eldecl_addr = $eldecl;
    
    
    
    HEAP[$parser_addr + 128] = $eldecl_addr;
    return;
  }
  function _PyExpat_XML_SetAttlistDeclHandler($parser, $attdecl) {
    
    var $parser_addr;
    var $attdecl_addr;
    $parser_addr = $parser;
    $attdecl_addr = $attdecl;
    
    
    
    HEAP[$parser_addr + 132] = $attdecl_addr;
    return;
  }
  function _PyExpat_XML_SetEntityDeclHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 136] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetXmlDeclHandler($parser, $handler) {
    
    var $parser_addr;
    var $handler_addr;
    $parser_addr = $parser;
    $handler_addr = $handler;
    
    
    
    HEAP[$parser_addr + 140] = $handler_addr;
    return;
  }
  function _PyExpat_XML_SetParamEntityParsing($parser, $peParsing) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $peParsing_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      $peParsing_addr = $peParsing;
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      
      HEAP[$parser_addr + 492] = $peParsing_addr;
      $0 = 1;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_Parse($parser, $s, $len, $isFinal) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $s_addr;
      var $len_addr;
      var $isFinal_addr;
      var $retval;
      var $0;
      var $buff;
      $parser_addr = $parser;
      $s_addr = $s;
      $len_addr = $len;
      $isFinal_addr = $isFinal;
      
      
      
      var $4 = HEAP[$parser_addr + 480];
      if ($4 == 2) {
        __label__ = 2;
        break;
      } else if ($4 == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      HEAP[$parser_addr + 284] = 33;
      $0 = 0;
      __label__ = 15;
      break;
     case 2:
      
      
      HEAP[$parser_addr + 284] = 36;
      $0 = 0;
      __label__ = 15;
      break;
     case 3:
      
      
      
      HEAP[$parser_addr + 480] = 1;
      
      
      if ($len_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      
      
      
      HEAP[$parser_addr + 480 + 4] = $isFinal_addr & 255;
      
      
      if ($isFinal_addr == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 1;
      __label__ = 15;
      break;
     case 6:
      
      
      var $23 = HEAP[$parser_addr + 24];
      
      
      HEAP[$parser_addr + 296] = $23;
      
      
      var $28 = HEAP[$parser_addr + 28];
      
      
      HEAP[$parser_addr + 40] = $28;
      
      
      var $33 = HEAP[$parser_addr + 280];
      
      
      
      
      var $38 = HEAP[$parser_addr + 40];
      
      
      var $41 = HEAP[$parser_addr + 24];
      
      var $43 = FUNCTION_TABLE[$33]($parser_addr, $41, $38, $parser_addr + 24);
      
      
      HEAP[$parser_addr + 284] = $43;
      
      
      
      
      var $50 = $parser_addr;
      if (HEAP[$parser_addr + 284] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      var $53 = HEAP[$50 + 480];
      if ($53 == 0) {
        __label__ = 9;
        break;
      } else if ($53 == 1) {
        __label__ = 9;
        break;
      } else if ($53 == 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      var $58 = HEAP[HEAP[$parser_addr + 144] + 52];
      
      
      
      
      var $63 = HEAP[$parser_addr + 24];
      
      
      var $66 = HEAP[$parser_addr + 296];
      
      
      var $69 = HEAP[$parser_addr + 144];
      FUNCTION_TABLE[$58]($69, $66, $63, $parser_addr + 408);
      
      
      var $72 = HEAP[$parser_addr + 24];
      
      
      HEAP[$parser_addr + 296] = $72;
      $0 = 2;
      __label__ = 15;
      break;
     case 9:
      
      
      
      HEAP[$parser_addr + 480] = 2;
      __label__ = 10;
      break;
     case 10:
      $0 = 1;
      __label__ = 15;
      break;
     case 11:
      
      var $79 = HEAP[$50 + 288];
      
      
      HEAP[$parser_addr + 292] = $79;
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 54;
      $0 = 0;
      __label__ = 15;
      break;
     case 12:
      
      
      var $86 = _PyExpat_XML_GetBuffer($parser_addr, $len_addr);
      $buff = $86;
      
      
      if ($buff == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 15;
      break;
     case 14:
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($buff, $s_addr, $len_addr, 1, 0);
      
      
      
      var $95 = _PyExpat_XML_ParseBuffer($parser_addr, $len_addr, $isFinal_addr);
      $0 = $95;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_ParseBuffer($parser, $len, $isFinal) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $len_addr;
      var $isFinal_addr;
      var $retval;
      var $0;
      var $start;
      var $result;
      $parser_addr = $parser;
      $len_addr = $len;
      $isFinal_addr = $isFinal;
      $result = 1;
      
      
      
      var $4 = HEAP[$parser_addr + 480];
      if ($4 == 2) {
        __label__ = 2;
        break;
      } else if ($4 == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      HEAP[$parser_addr + 284] = 33;
      $0 = 0;
      __label__ = 10;
      break;
     case 2:
      
      
      HEAP[$parser_addr + 284] = 36;
      $0 = 0;
      __label__ = 10;
      break;
     case 3:
      
      
      
      HEAP[$parser_addr + 480] = 1;
      
      
      
      $start = HEAP[$parser_addr + 24];
      
      
      
      HEAP[$parser_addr + 296] = $start;
      
      
      
      
      var $22 = HEAP[$parser_addr + 28] + $len_addr;
      
      
      HEAP[$parser_addr + 28] = $22;
      
      
      var $27 = HEAP[$parser_addr + 28];
      
      
      HEAP[$parser_addr + 40] = $27;
      
      
      
      
      var $34 = $len_addr + HEAP[$parser_addr + 36];
      
      
      HEAP[$parser_addr + 36] = $34;
      
      
      
      
      
      HEAP[$parser_addr + 480 + 4] = $isFinal_addr & 255;
      
      
      var $44 = HEAP[$parser_addr + 280];
      
      
      
      
      var $49 = HEAP[$parser_addr + 40];
      
      
      var $52 = FUNCTION_TABLE[$44]($parser_addr, $start, $49, $parser_addr + 24);
      
      
      HEAP[$parser_addr + 284] = $52;
      
      
      
      
      var $59 = $parser_addr;
      if (HEAP[$parser_addr + 284] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $61 = HEAP[$59 + 288];
      
      
      HEAP[$parser_addr + 292] = $61;
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 54;
      $0 = 0;
      __label__ = 10;
      break;
     case 5:
      
      
      var $68 = HEAP[$59 + 480];
      if ($68 == 0) {
        __label__ = 7;
        break;
      } else if ($68 == 1) {
        __label__ = 7;
        break;
      } else if ($68 == 3) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      $result = 2;
      __label__ = 9;
      break;
     case 7:
      
      
      if ($isFinal_addr != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      HEAP[$parser_addr + 480] = 2;
      
      $0 = $result;
      __label__ = 10;
      break;
     case 9:
      
      
      
      
      var $79 = HEAP[HEAP[$parser_addr + 144] + 52];
      
      
      
      
      var $84 = HEAP[$parser_addr + 24];
      
      
      var $87 = HEAP[$parser_addr + 296];
      
      
      var $90 = HEAP[$parser_addr + 144];
      FUNCTION_TABLE[$79]($90, $87, $84, $parser_addr + 408);
      
      
      var $93 = HEAP[$parser_addr + 24];
      
      
      HEAP[$parser_addr + 296] = $93;
      
      $0 = $result;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_GetBuffer($parser, $len) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $len_addr;
      var $retval;
      var $0;
      var $neededSize;
      var $keep;
      var $offset;
      var $newBuf;
      var $bufferSize;
      var $keep16;
      $parser_addr = $parser;
      $len_addr = $len;
      
      
      
      var $4 = HEAP[$parser_addr + 480];
      if ($4 == 2) {
        __label__ = 2;
        break;
      } else if ($4 == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      HEAP[$parser_addr + 284] = 33;
      $0 = 0;
      __label__ = 20;
      break;
     case 2:
      
      
      HEAP[$parser_addr + 284] = 36;
      $0 = 0;
      __label__ = 20;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 32] - HEAP[$parser_addr + 28] < $len_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      $neededSize = $len_addr + HEAP[$parser_addr + 28] + (0 - HEAP[$parser_addr + 24]);
      
      
      
      
      
      
      
      
      
      $keep = HEAP[$parser_addr + 24] - HEAP[$parser_addr + 8];
      
      
      if ($keep > 1024) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $keep = 1024;
      __label__ = 6;
      break;
     case 6:
      
      
      var $44 = $keep + $neededSize;
      $neededSize = $44;
      
      
      
      
      
      
      
      
      
      
      
      var $56 = $parser_addr;
      if (HEAP[$parser_addr + 32] - HEAP[$parser_addr + 8] >= $neededSize) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$56 + 24] - HEAP[$parser_addr + 8] > $keep) {
        __label__ = 8;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      
      $offset = 0 - $keep + HEAP[$parser_addr + 24] + (0 - HEAP[$parser_addr + 8]);
      
      
      
      
      
      
      
      
      
      
      
      var $88 = $keep + HEAP[$parser_addr + 28] + (0 - HEAP[$parser_addr + 24]);
      
      
      
      
      var $93 = HEAP[$parser_addr + 8] + $offset;
      
      
      var $96 = HEAP[$parser_addr + 8];
      _llvm_memmove_p0i8_p0i8_i32($96, $93, $88, 1, 0);
      
      
      
      
      
      var $102 = HEAP[$parser_addr + 28] + (0 - $offset);
      
      
      HEAP[$parser_addr + 28] = $102;
      
      
      
      
      
      var $110 = HEAP[$parser_addr + 24] + (0 - $offset);
      
      
      HEAP[$parser_addr + 24] = $110;
      __label__ = 19;
      break;
     case 9:
      
      
      
      
      
      
      
      
      $bufferSize = HEAP[$56 + 32] - HEAP[$parser_addr + 24];
      
      
      if ($bufferSize == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $bufferSize = 1024;
      __label__ = 11;
      break;
     case 11:
      
      var $124 = $bufferSize * 2;
      $bufferSize = $124;
      
      
      
      if ($bufferSize < $neededSize) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $131 = HEAP[$parser_addr + 12];
      
      var $133 = FUNCTION_TABLE[$131]($bufferSize);
      $newBuf = $133;
      
      
      if ($newBuf == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$parser_addr + 284] = 1;
      $0 = 0;
      __label__ = 20;
      break;
     case 14:
      
      
      
      
      
      HEAP[$parser_addr + 32] = $newBuf + $bufferSize;
      
      
      
      
      var $147 = $parser_addr;
      if (HEAP[$parser_addr + 24] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      $keep16 = HEAP[$147 + 24] - HEAP[$parser_addr + 8];
      
      
      if ($keep16 > 1024) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $keep16 = 1024;
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      
      
      
      
      
      
      
      var $168 = $keep16 + HEAP[$parser_addr + 28] + (0 - HEAP[$parser_addr + 24]);
      
      
      
      
      
      var $174 = HEAP[$parser_addr + 24] + (0 - $keep16);
      
      _llvm_memcpy_p0i8_p0i8_i32($newBuf, $174, $168, 1, 0);
      
      
      
      var $179 = HEAP[$parser_addr + 12 + 8];
      
      
      var $182 = HEAP[$parser_addr + 8];
      FUNCTION_TABLE[$179]($182);
      
      
      
      HEAP[$parser_addr + 8] = $newBuf;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $200 = HEAP[$parser_addr + 8] + (HEAP[$parser_addr + 28] - HEAP[$parser_addr + 24]) + $keep16;
      
      
      HEAP[$parser_addr + 28] = $200;
      
      
      
      
      var $207 = HEAP[$parser_addr + 8] + $keep16;
      
      
      HEAP[$parser_addr + 24] = $207;
      __label__ = 19;
      break;
     case 18:
      
      
      
      
      
      
      
      
      
      var $219 = $newBuf + (HEAP[$147 + 28] - HEAP[$parser_addr + 24]);
      
      
      HEAP[$parser_addr + 28] = $219;
      
      
      
      HEAP[$parser_addr + 8] = $newBuf;
      
      
      var $227 = HEAP[$parser_addr + 8];
      
      
      HEAP[$parser_addr + 24] = $227;
      __label__ = 19;
      break;
     case 19:
      
      
      
      $0 = HEAP[$parser_addr + 28];
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_StopParser($parser, $resumable) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $resumable_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      $resumable_addr = $resumable;
      
      
      
      var $4 = HEAP[$parser_addr + 480];
      if ($4 == 2) {
        __label__ = 4;
        break;
      } else if ($4 == 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      var $7 = $parser_addr;
      if ($resumable_addr != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      HEAP[$7 + 284] = 33;
      $0 = 0;
      __label__ = 11;
      break;
     case 3:
      
      
      HEAP[$7 + 480] = 2;
      __label__ = 10;
      break;
     case 4:
      
      
      HEAP[$parser_addr + 284] = 36;
      $0 = 0;
      __label__ = 11;
      break;
     case 5:
      
      
      var $15 = $parser_addr;
      if ($resumable_addr != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      
      var $19 = $parser_addr;
      if (HEAP[$15 + 488] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      HEAP[$19 + 284] = 37;
      $0 = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      HEAP[$19 + 480] = 3;
      __label__ = 10;
      break;
     case 9:
      
      
      HEAP[$15 + 480] = 2;
      __label__ = 10;
      break;
     case 10:
      $0 = 1;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_ResumeParser($parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $0;
      var $result;
      $parser_addr = $parser;
      $result = 1;
      
      
      
      
      
      var $6 = $parser_addr;
      if (HEAP[$parser_addr + 480] != 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      HEAP[$6 + 284] = 34;
      $0 = 0;
      __label__ = 9;
      break;
     case 2:
      
      
      HEAP[$6 + 480] = 1;
      
      
      var $12 = HEAP[$parser_addr + 280];
      
      
      
      
      var $17 = HEAP[$parser_addr + 40];
      
      
      var $20 = HEAP[$parser_addr + 24];
      
      var $22 = FUNCTION_TABLE[$12]($parser_addr, $20, $17, $parser_addr + 24);
      
      
      HEAP[$parser_addr + 284] = $22;
      
      
      
      
      var $29 = $parser_addr;
      if (HEAP[$parser_addr + 284] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $31 = HEAP[$29 + 288];
      
      
      HEAP[$parser_addr + 292] = $31;
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 54;
      $0 = 0;
      __label__ = 9;
      break;
     case 4:
      
      
      var $38 = HEAP[$29 + 480];
      if ($38 == 0) {
        __label__ = 6;
        break;
      } else if ($38 == 1) {
        __label__ = 6;
        break;
      } else if ($38 == 3) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      $result = 2;
      __label__ = 8;
      break;
     case 6:
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      HEAP[$parser_addr + 480] = 2;
      
      $0 = $result;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      var $52 = HEAP[HEAP[$parser_addr + 144] + 52];
      
      
      
      
      var $57 = HEAP[$parser_addr + 24];
      
      
      var $60 = HEAP[$parser_addr + 296];
      
      
      var $63 = HEAP[$parser_addr + 144];
      FUNCTION_TABLE[$52]($63, $60, $57, $parser_addr + 408);
      
      
      var $66 = HEAP[$parser_addr + 24];
      
      
      HEAP[$parser_addr + 296] = $66;
      
      $0 = $result;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_GetParsingStatus($parser, $status) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $status_addr;
      var $0 = __stackBase__;
      $parser_addr = $parser;
      $status_addr = $status;
      
      
      if ($status_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str188, __str1189, 1744, ___PRETTY_FUNCTION___3819);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      var $7 = HEAP[$parser_addr + 480];
      HEAP[$0] = $7;
      
      
      var $10 = HEAP[$parser_addr + 480 + 4];
      HEAP[$0 + 4] = $10;
      
      
      
      var $14 = HEAP[$0];
      HEAP[$status_addr] = $14;
      
      
      var $17 = HEAP[$0 + 4];
      HEAP[$status_addr + 4] = $17;
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_GetErrorCode($parser) {
    
    var $parser_addr;
    var $retval;
    var $0;
    $parser_addr = $parser;
    
    
    
    $0 = HEAP[$parser_addr + 284];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _PyExpat_XML_GetCurrentByteIndex($parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      
      
      
      
      if (HEAP[$parser_addr + 288] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $0 = 0 - HEAP[$parser_addr + 40] + HEAP[$parser_addr + 36] + (0 - (0 - HEAP[$parser_addr + 288]));
      __label__ = 3;
      break;
     case 2:
      $0 = -1;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_GetCurrentByteCount($parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      
      
      
      
      if (HEAP[$parser_addr + 292] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$parser_addr + 288] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      $0 = HEAP[$parser_addr + 292] - HEAP[$parser_addr + 288];
      __label__ = 4;
      break;
     case 3:
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_GetInputContext($parser, $offset, $size) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $offset_addr;
      var $size_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      $offset_addr = $offset;
      $size_addr = $size;
      
      
      
      
      if (HEAP[$parser_addr + 288] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$parser_addr + 8] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      var $17 = HEAP[$parser_addr + 288] - HEAP[$parser_addr + 8];
      
      HEAP[$offset_addr] = $17;
      
      
      
      
      
      
      
      
      var $27 = HEAP[$parser_addr + 28] - HEAP[$parser_addr + 8];
      
      HEAP[$size_addr] = $27;
      
      
      
      $0 = HEAP[$parser_addr + 8];
      __label__ = 4;
      break;
     case 3:
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_GetCurrentLineNumber($parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      
      
      
      
      if (HEAP[$parser_addr + 288] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 288] >= HEAP[$parser_addr + 296]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $16 = HEAP[HEAP[$parser_addr + 144] + 52];
      
      
      
      
      var $21 = HEAP[$parser_addr + 288];
      
      
      var $24 = HEAP[$parser_addr + 296];
      
      
      var $27 = HEAP[$parser_addr + 144];
      FUNCTION_TABLE[$16]($27, $24, $21, $parser_addr + 408);
      
      
      var $30 = HEAP[$parser_addr + 288];
      
      
      HEAP[$parser_addr + 296] = $30;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      $0 = HEAP[$parser_addr + 408] + 1;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_GetCurrentColumnNumber($parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $0;
      $parser_addr = $parser;
      
      
      
      
      if (HEAP[$parser_addr + 288] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 288] >= HEAP[$parser_addr + 296]) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $16 = HEAP[HEAP[$parser_addr + 144] + 52];
      
      
      
      
      var $21 = HEAP[$parser_addr + 288];
      
      
      var $24 = HEAP[$parser_addr + 296];
      
      
      var $27 = HEAP[$parser_addr + 144];
      FUNCTION_TABLE[$16]($27, $24, $21, $parser_addr + 408);
      
      
      var $30 = HEAP[$parser_addr + 288];
      
      
      HEAP[$parser_addr + 296] = $30;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      $0 = HEAP[$parser_addr + 408 + 4];
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_FreeContentModel($parser, $model) {
    
    var $parser_addr;
    var $model_addr;
    $parser_addr = $parser;
    $model_addr = $model;
    
    
    
    var $3 = HEAP[$parser_addr + 12 + 8];
    
    
    FUNCTION_TABLE[$3]($model_addr);
    return;
  }
  function _PyExpat_XML_MemMalloc($parser, $size) {
    
    var $parser_addr;
    var $size_addr;
    var $retval;
    var $0;
    $parser_addr = $parser;
    $size_addr = $size;
    
    
    
    var $4 = HEAP[$parser_addr + 12];
    
    var $6 = FUNCTION_TABLE[$4]($size_addr);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _PyExpat_XML_MemRealloc($parser, $ptr, $size) {
    
    var $parser_addr;
    var $ptr_addr;
    var $size_addr;
    var $retval;
    var $0;
    $parser_addr = $parser;
    $ptr_addr = $ptr;
    $size_addr = $size;
    
    
    
    var $4 = HEAP[$parser_addr + 12 + 4];
    
    
    var $7 = FUNCTION_TABLE[$4]($ptr_addr, $size_addr);
    $0 = $7;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _PyExpat_XML_MemFree($parser, $ptr) {
    
    var $parser_addr;
    var $ptr_addr;
    $parser_addr = $parser;
    $ptr_addr = $ptr;
    
    
    
    var $3 = HEAP[$parser_addr + 12 + 8];
    
    FUNCTION_TABLE[$3]($ptr_addr);
    return;
  }
  function _PyExpat_XML_DefaultCurrent($parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      $parser_addr = $parser;
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      var $8 = $parser_addr;
      if (HEAP[$parser_addr + 300] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $12 = HEAP[HEAP[$8 + 300] + 4];
      
      
      
      
      var $17 = HEAP[HEAP[$parser_addr + 300]];
      
      
      var $20 = HEAP[$parser_addr + 228];
      
      _reportDefault($parser_addr, $20, $17, $12);
      __label__ = 4;
      break;
     case 3:
      
      var $23 = HEAP[$8 + 292];
      
      
      var $26 = HEAP[$parser_addr + 288];
      
      
      var $29 = HEAP[$parser_addr + 144];
      
      _reportDefault($parser_addr, $29, $26, $23);
      __label__ = 4;
      break;
     case 4:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_ErrorString($code) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $code_addr;
      var $retval;
      var $0;
      $code_addr = $code;
      
      
      
      
      
      if ($code_addr != 0 & $code_addr <= 40) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $0 = HEAP[_message_3967 + $code_addr * 4];
      __label__ = 3;
      break;
     case 2:
      $0 = 0;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XML_ExpatVersion() {
    
    var $retval;
    var $0;
    $0 = __str42230;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _PyExpat_XML_ExpatVersionInfo($agg_result) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    
    var $version = __stackBase__;
    
    HEAP[$version] = 2;
    
    HEAP[$version + 4] = 0;
    
    HEAP[$version + 8] = 0;
    
    
    var $5 = HEAP[$version];
    HEAP[$agg_result] = $5;
    
    
    var $8 = HEAP[$version + 4];
    HEAP[$agg_result + 4] = $8;
    
    
    var $11 = HEAP[$version + 8];
    HEAP[$agg_result + 8] = $11;
    STACKTOP = __stackBase__;
    return;
  }
  function _PyExpat_XML_GetFeatureList() {
    
    var $retval;
    var $0;
    $0 = _features_3989;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _storeRawNames($parser) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $0;
      var $tag;
      var $bufSize;
      var $nameLen;
      var $rawNameBuf;
      var $temp;
      $parser_addr = $parser;
      
      
      var $3 = HEAP[$parser_addr + 364];
      $tag = $3;
      __lastLabel__ = -1;
      __label__ = 11;
      break;
     case 1:
      
      
      
      
      
      $nameLen = HEAP[$tag + 12 + 12] + 1;
      
      
      
      
      
      $rawNameBuf = HEAP[$tag + 36] + $nameLen;
      
      
      
      
      
      if (HEAP[$tag + 4] == $rawNameBuf) {
        __label__ = 12;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      $bufSize = $nameLen + HEAP[$tag + 8];
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$tag + 40] - HEAP[$tag + 36] < $bufSize) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      
      
      var $38 = HEAP[$parser_addr + 12 + 4];
      
      
      
      var $42 = HEAP[$tag + 36];
      var $43 = FUNCTION_TABLE[$38]($42, $bufSize);
      $temp = $43;
      
      
      if ($temp == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 13;
      break;
     case 5:
      
      
      
      
      
      
      
      
      if (HEAP[$tag + 12] == HEAP[$tag + 36]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      HEAP[$tag + 12] = $temp;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      if (HEAP[$tag + 12 + 4] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      var $74 = $temp + (HEAP[$tag + 12 + 4] - HEAP[$tag + 36]);
      
      
      
      HEAP[$tag + 12 + 4] = $74;
      __label__ = 9;
      break;
     case 9:
      
      
      
      HEAP[$tag + 36] = $temp;
      
      
      
      
      
      HEAP[$tag + 40] = $temp + $bufSize;
      
      
      
      $rawNameBuf = $temp + $nameLen;
      __label__ = 10;
      break;
     case 10:
      
      
      var $91 = HEAP[$tag + 8];
      
      
      var $94 = HEAP[$tag + 4];
      
      _llvm_memcpy_p0i8_p0i8_i32($rawNameBuf, $94, $91, 1, 0);
      
      
      
      HEAP[$tag + 4] = $rawNameBuf;
      
      
      var $101 = HEAP[$tag];
      $tag = $101;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $102 = __lastLabel__ == 10 ? $101 : $3;
      
      if ($102 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      $0 = 1;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      
      var $retval1314 = $retval & 255;
      return $retval1314;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _contentProcessor($parser, $start, $end, $endPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $start_addr;
      var $end_addr;
      var $endPtr_addr;
      var $retval;
      var $0;
      var $result;
      $parser_addr = $parser;
      $start_addr = $start;
      $end_addr = $end;
      $endPtr_addr = $endPtr;
      
      
      
      
      
      
      
      
      var $9 = HEAP[$parser_addr + 144];
      
      
      
      
      var $14 = HEAP[$parser_addr + 480 + 4] == 0 & 255;
      var $15 = _doContent($parser_addr, 0, $9, $start_addr, $end_addr, $endPtr_addr, $14);
      $result = $15;
      
      
      if ($result == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $19 = _storeRawNames($parser_addr);
      
      if ($19 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 1;
      __label__ = 4;
      break;
     case 3:
      
      $0 = $result;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _externalEntityInitProcessor($parser, $start, $end, $endPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $start_addr;
      var $end_addr;
      var $endPtr_addr;
      var $retval;
      var $0;
      var $result;
      $parser_addr = $parser;
      $start_addr = $start;
      $end_addr = $end;
      $endPtr_addr = $endPtr;
      
      var $2 = _initializeEncoding($parser_addr);
      $result = $2;
      
      
      if ($result != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $result;
      __label__ = 3;
      break;
     case 2:
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 56;
      
      
      
      
      var $12 = _externalEntityInitProcessor2($parser_addr, $start_addr, $end_addr, $endPtr_addr);
      $0 = $12;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _externalEntityInitProcessor2($parser, $start, $end, $endPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $start_addr;
      var $end_addr;
      var $endPtr_addr;
      var $retval;
      var $0;
      var $next = __stackBase__;
      var $tok;
      $parser_addr = $parser;
      $start_addr = $start;
      $end_addr = $end;
      $endPtr_addr = $endPtr;
      
      HEAP[$next] = $start_addr;
      
      
      
      
      
      var $7 = HEAP[HEAP[$parser_addr + 144] + 4];
      
      
      var $10 = HEAP[$parser_addr + 144];
      
      
      var $13 = FUNCTION_TABLE[$7]($10, $start_addr, $end_addr, $next);
      $tok = $13;
      var $14 = $tok;
      if ($14 == -2) {
        __label__ = 8;
        break;
      } else if ($14 == -1) {
        __label__ = 5;
        break;
      } else if ($14 == 14) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$next] == $end_addr) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $23 = HEAP[$next];
      
      HEAP[$endPtr_addr] = $23;
      $0 = 0;
      __label__ = 12;
      break;
     case 4:
      
      $start_addr = HEAP[$next];
      __label__ = 11;
      break;
     case 5:
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      HEAP[$endPtr_addr] = $start_addr;
      $0 = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      
      HEAP[$parser_addr + 288] = $start_addr;
      $0 = 5;
      __label__ = 12;
      break;
     case 8:
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      HEAP[$endPtr_addr] = $start_addr;
      $0 = 0;
      __label__ = 12;
      break;
     case 10:
      
      
      
      HEAP[$parser_addr + 288] = $start_addr;
      $0 = 6;
      __label__ = 12;
      break;
     case 11:
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 58;
      
      
      
      
      var $52 = _externalEntityInitProcessor3($parser_addr, $start_addr, $end_addr, $endPtr_addr);
      $0 = $52;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _externalEntityInitProcessor3($parser, $start, $end, $endPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $start_addr;
      var $end_addr;
      var $endPtr_addr;
      var $retval;
      var $0;
      var $tok;
      var $next = __stackBase__;
      var $result;
      $parser_addr = $parser;
      $start_addr = $start;
      $end_addr = $end;
      $endPtr_addr = $endPtr;
      
      HEAP[$next] = $start_addr;
      
      
      
      HEAP[$parser_addr + 288] = $start_addr;
      
      
      
      
      
      var $10 = HEAP[HEAP[$parser_addr + 144] + 4];
      
      
      var $13 = HEAP[$parser_addr + 144];
      
      
      var $16 = FUNCTION_TABLE[$10]($13, $start_addr, $end_addr, $next);
      $tok = $16;
      var $17 = HEAP[$next];
      
      
      HEAP[$parser_addr + 292] = $17;
      var $20 = $tok;
      if ($20 == -2) {
        __label__ = 10;
        break;
      } else if ($20 == -1) {
        __label__ = 7;
        break;
      } else if ($20 == 12) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      var $21 = HEAP[$next];
      
      
      var $24 = _processXmlDecl($parser_addr, 1, $start_addr, $21);
      $result = $24;
      
      
      if ($result != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $result;
      __label__ = 14;
      break;
     case 3:
      
      
      
      var $31 = HEAP[$parser_addr + 480];
      if ($31 == 2) {
        __label__ = 5;
        break;
      } else if ($31 == 3) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $32 = HEAP[$next];
      
      HEAP[$endPtr_addr] = $32;
      $0 = 0;
      __label__ = 14;
      break;
     case 5:
      $0 = 35;
      __label__ = 14;
      break;
     case 6:
      
      $start_addr = HEAP[$next];
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$endPtr_addr] = $start_addr;
      $0 = 0;
      __label__ = 14;
      break;
     case 9:
      $0 = 5;
      __label__ = 14;
      break;
     case 10:
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      HEAP[$endPtr_addr] = $start_addr;
      $0 = 0;
      __label__ = 14;
      break;
     case 12:
      $0 = 6;
      __label__ = 14;
      break;
     case 13:
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 60;
      
      
      HEAP[$parser_addr + 312] = 1;
      
      
      
      
      var $57 = _externalEntityContentProcessor($parser_addr, $start_addr, $end_addr, $endPtr_addr);
      $0 = $57;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _externalEntityContentProcessor($parser, $start, $end, $endPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $start_addr;
      var $end_addr;
      var $endPtr_addr;
      var $retval;
      var $0;
      var $result;
      $parser_addr = $parser;
      $start_addr = $start;
      $end_addr = $end;
      $endPtr_addr = $endPtr;
      
      
      
      
      
      
      
      
      var $9 = HEAP[$parser_addr + 144];
      
      
      
      
      var $14 = HEAP[$parser_addr + 480 + 4] == 0 & 255;
      var $15 = _doContent($parser_addr, 1, $9, $start_addr, $end_addr, $endPtr_addr, $14);
      $result = $15;
      
      
      if ($result == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $19 = _storeRawNames($parser_addr);
      
      if ($19 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 1;
      __label__ = 4;
      break;
     case 3:
      
      $0 = $result;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _doContent($parser, $startTagLevel, $enc, $s, $end, $nextPtr, $haveMore) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 59;
    _memset(__stackBase__, 0, 59);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $startTagLevel_addr;
      var $enc_addr;
      var $s_addr = __stackBase__;
      var $end_addr;
      var $nextPtr_addr;
      var $haveMore_addr;
      var $retval;
      var $0;
      var $dtd;
      var $eventPP;
      var $eventEndPP;
      var $next = __stackBase__ + 4;
      var $tok;
      var $c = __stackBase__ + 8;
      var $name;
      var $entity;
      var $ch = __stackBase__ + 9;
      var $result;
      var $context;
      var $tag;
      var $result74;
      var $toPtr = __stackBase__ + 10;
      var $rawNameEnd;
      var $fromPtr = __stackBase__ + 14;
      var $bufSize;
      var $convLen;
      var $temp;
      var $rawName;
      var $result94;
      var $bindings = __stackBase__ + 18;
      var $noElmHandlers;
      var $name95 = __stackBase__ + 22;
      var $b;
      var $len;
      var $rawName119;
      var $tag120;
      var $localPart;
      var $prefix;
      var $uri;
      var $b140;
      var $n;
      var $buf = __stackBase__ + 46;
      var $c159 = __stackBase__ + 50;
      var $result164;
      var $dataPtr = __stackBase__ + 51;
      var $dataPtr190 = __stackBase__ + 55;
      $parser_addr = $parser;
      $startTagLevel_addr = $startTagLevel;
      $enc_addr = $enc;
      HEAP[$s_addr] = $s;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      $haveMore_addr = $haveMore;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      
      
      
      
      var $9 = $parser_addr;
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $eventPP = $9 + 288;
      
      
      $eventEndPP = $parser_addr + 292;
      __label__ = 3;
      break;
     case 2:
      
      
      
      $eventPP = HEAP[$9 + 300];
      
      
      
      
      $eventEndPP = HEAP[$parser_addr + 300] + 4;
      __label__ = 3;
      break;
     case 3:
      var $20 = HEAP[$s_addr];
      
      HEAP[$eventPP] = $20;
      var $22 = $name95;
      var $23 = $name95;
      var $24 = $name95;
      var $buf151 = $buf;
      var $buf152 = $buf;
      __label__ = 4;
      break;
     case 4:
      var $25 = HEAP[$s_addr];
      HEAP[$next] = $25;
      
      
      
      var $29 = HEAP[$enc_addr + 4];
      var $30 = HEAP[$s_addr];
      
      
      var $33 = FUNCTION_TABLE[$29]($enc_addr, $30, $end_addr, $next);
      $tok = $33;
      var $34 = HEAP[$next];
      
      HEAP[$eventEndPP] = $34;
      var $36 = $tok;
      if ($36 == -5) {
        __label__ = 149;
        break;
      } else if ($36 == -4) {
        __label__ = 16;
        break;
      } else if ($36 == -3) {
        __label__ = 5;
        break;
      } else if ($36 == -2) {
        __label__ = 27;
        break;
      } else if ($36 == -1) {
        __label__ = 24;
        break;
      } else if ($36 == 0) {
        __label__ = 23;
        break;
      } else if ($36 == 1) {
        __label__ = 68;
        break;
      } else if ($36 == 2) {
        __label__ = 68;
        break;
      } else if ($36 == 3) {
        __label__ = 87;
        break;
      } else if ($36 == 4) {
        __label__ = 87;
        break;
      } else if ($36 == 5) {
        __label__ = 106;
        break;
      } else if ($36 == 6) {
        __label__ = 162;
        break;
      } else if ($36 == 7) {
        __label__ = 137;
        break;
      } else if ($36 == 8) {
        __label__ = 141;
        break;
      } else if ($36 == 9) {
        __label__ = 30;
        break;
      } else if ($36 == 10) {
        __label__ = 130;
        break;
      } else if ($36 == 11) {
        __label__ = 169;
        break;
      } else if ($36 == 12) {
        __label__ = 136;
        break;
      } else if ($36 == 13) {
        __label__ = 171;
        break;
      } else {
        __label__ = 173;
        break;
      }
     case 5:
      
      
      if ($haveMore_addr != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $39 = HEAP[$s_addr];
      
      HEAP[$nextPtr_addr] = $39;
      $0 = 0;
      __label__ = 178;
      break;
     case 7:
      
      
      HEAP[$eventEndPP] = $end_addr;
      
      
      
      
      if (HEAP[$parser_addr + 60] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      HEAP[$c] = 10;
      
      
      var $49 = HEAP[$parser_addr + 60];
      
      
      var $52 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$49]($52, $c, 1);
      __label__ = 11;
      break;
     case 9:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $57 = HEAP[$s_addr];
      
      
      
      _reportDefault($parser_addr, $enc_addr, $57, $end_addr);
      __label__ = 11;
      break;
     case 11:
      
      
      if ($startTagLevel_addr == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 3;
      __label__ = 178;
      break;
     case 13:
      
      
      
      
      
      if (HEAP[$parser_addr + 312] != $startTagLevel_addr) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 13;
      __label__ = 178;
      break;
     case 15:
      
      
      HEAP[$nextPtr_addr] = $end_addr;
      $0 = 0;
      __label__ = 178;
      break;
     case 16:
      
      
      if ($haveMore_addr != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $72 = HEAP[$s_addr];
      
      HEAP[$nextPtr_addr] = $72;
      $0 = 0;
      __label__ = 178;
      break;
     case 18:
      
      
      if ($startTagLevel_addr > 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$parser_addr + 312] != $startTagLevel_addr) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = 13;
      __label__ = 178;
      break;
     case 21:
      var $81 = HEAP[$s_addr];
      
      HEAP[$nextPtr_addr] = $81;
      $0 = 0;
      __label__ = 178;
      break;
     case 22:
      $0 = 3;
      __label__ = 178;
      break;
     case 23:
      var $83 = HEAP[$next];
      
      HEAP[$eventPP] = $83;
      $0 = 4;
      __label__ = 178;
      break;
     case 24:
      
      
      if ($haveMore_addr != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $87 = HEAP[$s_addr];
      
      HEAP[$nextPtr_addr] = $87;
      $0 = 0;
      __label__ = 178;
      break;
     case 26:
      $0 = 5;
      __label__ = 178;
      break;
     case 27:
      
      
      if ($haveMore_addr != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $91 = HEAP[$s_addr];
      
      HEAP[$nextPtr_addr] = $91;
      $0 = 0;
      __label__ = 178;
      break;
     case 29:
      $0 = 6;
      __label__ = 178;
      break;
     case 30:
      
      
      var $95 = HEAP[$enc_addr + 48];
      
      
      
      
      
      var $101 = HEAP[$next] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $106 = HEAP[$s_addr] + HEAP[$enc_addr + 68];
      
      var $108 = FUNCTION_TABLE[$95]($enc_addr, $106, $101);
      var $109 = $108 & 255;
      HEAP[$ch] = $109;
      
      
      if (HEAP[$ch] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 31:
      
      
      
      
      var $116 = $parser_addr;
      if (HEAP[$parser_addr + 60] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      var $118 = HEAP[$116 + 60];
      
      
      var $121 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$118]($121, $ch, 1);
      __label__ = 175;
      break;
     case 33:
      
      
      
      if (HEAP[$116 + 80] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 34:
      var $125 = HEAP[$next];
      var $126 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $126, $125);
      __label__ = 175;
      break;
     case 35:
      
      
      
      
      
      var $134 = HEAP[$next] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $139 = HEAP[$s_addr] + HEAP[$enc_addr + 68];
      
      
      
      var $143 = _poolStoreString($dtd + 80, $enc_addr, $139, $134);
      $name = $143;
      
      
      if ($name == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      $0 = 1;
      __label__ = 178;
      break;
     case 37:
      
      
      
      var $149 = _lookup($dtd, $name, 0);
      
      $entity = $149;
      
      
      
      var $154 = HEAP[$dtd + 80 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $154;
      
      
      
      
      if (HEAP[$dtd + 129] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      
      if (HEAP[$dtd + 130] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 39:
      
      
      if ($entity == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      $0 = 11;
      __label__ = 178;
      break;
     case 41:
      
      
      
      
      if (HEAP[$entity + 34] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 42:
      $0 = 24;
      __label__ = 178;
      break;
     case 43:
      
      
      if ($entity == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 44:
      
      
      
      
      var $178 = $parser_addr;
      if (HEAP[$parser_addr + 120] != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      var $180 = HEAP[$178 + 120];
      
      
      var $183 = HEAP[$parser_addr + 4];
      
      FUNCTION_TABLE[$180]($183, $name, 0);
      __label__ = 175;
      break;
     case 46:
      
      
      
      if (HEAP[$178 + 80] != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 47:
      var $188 = HEAP[$next];
      var $189 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $189, $188);
      __label__ = 175;
      break;
     case 48:
      
      
      
      
      if (HEAP[$entity + 32] != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      $0 = 12;
      __label__ = 178;
      break;
     case 50:
      
      
      
      
      if (HEAP[$entity + 28] != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      $0 = 15;
      __label__ = 178;
      break;
     case 52:
      
      
      
      
      var $204 = $parser_addr;
      if (HEAP[$entity + 4] != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 53:
      
      
      
      var $208 = $parser_addr;
      if (HEAP[$204 + 308] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 54:
      
      
      
      var $212 = $parser_addr;
      if (HEAP[$208 + 120] != 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      var $214 = HEAP[$212 + 120];
      
      
      var $217 = HEAP[$entity];
      
      
      var $220 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$214]($220, $217, 0);
      __label__ = 175;
      break;
     case 56:
      
      
      
      if (HEAP[$212 + 80] != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 57:
      var $224 = HEAP[$next];
      var $225 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $225, $224);
      __label__ = 175;
      break;
     case 58:
      
      var $229 = _processInternalEntity($208, $entity, 0);
      $result = $229;
      
      
      if ($result != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 59:
      
      $0 = $result;
      __label__ = 178;
      break;
     case 60:
      
      
      
      if (HEAP[$204 + 112] != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 61:
      
      
      HEAP[$entity + 32] = 1;
      
      var $239 = _getContext($parser_addr);
      $context = $239;
      
      
      HEAP[$entity + 32] = 0;
      
      
      if ($context == 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 62:
      $0 = 1;
      __label__ = 178;
      break;
     case 63:
      
      
      var $246 = HEAP[$parser_addr + 112];
      
      
      var $249 = HEAP[$entity + 24];
      
      
      var $252 = HEAP[$entity + 16];
      
      
      var $255 = HEAP[$entity + 20];
      
      
      var $258 = HEAP[$parser_addr + 116];
      
      var $260 = FUNCTION_TABLE[$246]($258, $context, $255, $252, $249);
      
      if ($260 == 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      $0 = 21;
      __label__ = 178;
      break;
     case 65:
      
      
      
      var $265 = HEAP[$parser_addr + 416 + 16];
      
      
      
      HEAP[$parser_addr + 416 + 12] = $265;
      __label__ = 175;
      break;
     case 66:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 67:
      var $273 = HEAP[$next];
      var $274 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $274, $273);
      __label__ = 175;
      break;
     case 68:
      
      
      
      
      var $281 = $parser_addr;
      if (HEAP[$parser_addr + 368] != 0) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      $tag = HEAP[$281 + 368];
      
      
      
      
      var $288 = HEAP[HEAP[$parser_addr + 368]];
      
      
      HEAP[$parser_addr + 368] = $288;
      __label__ = 75;
      break;
     case 70:
      
      
      var $293 = HEAP[$281 + 12];
      var $294 = FUNCTION_TABLE[$293](48);
      
      $tag = $294;
      
      
      if ($tag == 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      $0 = 1;
      __label__ = 178;
      break;
     case 72:
      
      
      
      var $301 = HEAP[$parser_addr + 12];
      var $302 = FUNCTION_TABLE[$301](32);
      
      
      HEAP[$tag + 36] = $302;
      
      
      
      
      if (HEAP[$tag + 36] == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      
      
      var $312 = HEAP[$parser_addr + 12 + 8];
      
      
      FUNCTION_TABLE[$312]($tag);
      $0 = 1;
      __label__ = 178;
      break;
     case 74:
      
      
      
      var $318 = HEAP[$tag + 36] + 32;
      
      
      HEAP[$tag + 40] = $318;
      __label__ = 75;
      break;
     case 75:
      
      
      HEAP[$tag + 44] = 0;
      
      
      var $325 = HEAP[$parser_addr + 364];
      
      
      HEAP[$tag] = $325;
      
      
      
      HEAP[$parser_addr + 364] = $tag;
      
      
      
      HEAP[$tag + 12 + 4] = 0;
      
      
      
      HEAP[$tag + 12 + 8] = 0;
      
      
      
      
      var $341 = HEAP[$s_addr] + HEAP[$enc_addr + 68];
      
      
      HEAP[$tag + 4] = $341;
      
      
      var $346 = HEAP[$enc_addr + 32];
      
      
      var $349 = HEAP[$tag + 4];
      
      var $351 = FUNCTION_TABLE[$346]($enc_addr, $349);
      
      
      HEAP[$tag + 8] = $351;
      
      
      
      var $357 = HEAP[$parser_addr + 312] + 1;
      
      
      HEAP[$parser_addr + 312] = $357;
      
      
      
      
      
      
      
      $rawNameEnd = HEAP[$tag + 4] + HEAP[$tag + 8];
      
      
      var $369 = HEAP[$tag + 4];
      HEAP[$fromPtr] = $369;
      
      
      var $372 = HEAP[$tag + 36];
      HEAP[$toPtr] = $372;
      __label__ = 76;
      break;
     case 76:
      
      
      var $375 = HEAP[$enc_addr + 60];
      
      
      
      var $379 = HEAP[$tag + 40] + -1;
      
      
      FUNCTION_TABLE[$375]($enc_addr, $fromPtr, $rawNameEnd, $toPtr, $379);
      
      
      
      
      
      
      
      $convLen = HEAP[$toPtr] - HEAP[$tag + 36];
      
      
      
      var $392 = $tag;
      if (HEAP[$fromPtr] == $rawNameEnd) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      
      
      
      HEAP[$392 + 12 + 12] = $convLen;
      
      
      var $398 = HEAP[$tag + 36];
      
      
      
      HEAP[$tag + 12] = $398;
      var $402 = HEAP[$toPtr];
      HEAP[$402] = 0;
      
      
      
      
      var $407 = HEAP[$s_addr];
      
      
      var $410 = _storeAtts($parser_addr, $enc_addr, $407, $tag + 12, $tag + 44);
      $result74 = $410;
      
      
      if ($result74 != 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 78:
      
      
      
      
      
      
      
      
      
      $bufSize = HEAP[$392 + 40] - HEAP[$tag + 36] << 1;
      
      
      
      var $425 = HEAP[$parser_addr + 12 + 4];
      
      
      
      var $429 = HEAP[$tag + 36];
      var $430 = FUNCTION_TABLE[$425]($429, $bufSize);
      $temp = $430;
      
      
      if ($temp == 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 79:
      $0 = 1;
      __label__ = 178;
      break;
     case 80:
      
      
      
      HEAP[$tag + 36] = $temp;
      
      
      
      
      
      HEAP[$tag + 40] = $temp + $bufSize;
      
      
      
      HEAP[$toPtr] = $temp + $convLen;
      __label__ = 76;
      break;
     case 81:
      
      $0 = $result74;
      __label__ = 178;
      break;
     case 82:
      
      
      
      
      var $449 = $parser_addr;
      if (HEAP[$parser_addr + 52] != 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      
      var $451 = HEAP[$449 + 52];
      
      
      
      var $455 = HEAP[$parser_addr + 392];
      
      
      
      var $459 = HEAP[$tag + 12];
      
      
      var $462 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$451]($462, $459, $455);
      __label__ = 86;
      break;
     case 84:
      
      
      
      if (HEAP[$449 + 80] != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      var $466 = HEAP[$next];
      var $467 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $467, $466);
      __label__ = 86;
      break;
     case 86:
      
      
      _poolClear($parser_addr + 416);
      __label__ = 175;
      break;
     case 87:
      
      
      
      
      
      $rawName = HEAP[$s_addr] + HEAP[$enc_addr + 68];
      HEAP[$bindings] = 0;
      $noElmHandlers = 1;
      
      
      var $479 = HEAP[$enc_addr + 32];
      
      
      var $482 = FUNCTION_TABLE[$479]($enc_addr, $rawName);
      
      var $484 = $rawName + $482;
      
      
      
      
      var $489 = _poolStoreString($parser_addr + 416, $enc_addr, $rawName, $484);
      HEAP[$22] = $489;
      
      if ($489 == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      $0 = 1;
      __label__ = 178;
      break;
     case 89:
      
      
      
      var $494 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $494;
      var $498 = HEAP[$s_addr];
      
      
      var $501 = _storeAtts($parser_addr, $enc_addr, $498, $name95, $bindings);
      $result94 = $501;
      
      
      if ($result94 != 0) {
        __label__ = 90;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 90:
      
      $0 = $result94;
      __label__ = 178;
      break;
     case 91:
      
      
      
      var $508 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $508;
      
      
      
      
      if (HEAP[$parser_addr + 52] != 0) {
        __label__ = 92;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 92:
      
      
      var $518 = HEAP[$parser_addr + 52];
      
      
      
      var $522 = HEAP[$parser_addr + 392];
      var $523 = HEAP[$23];
      
      
      var $526 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$518]($526, $523, $522);
      $noElmHandlers = 0;
      __label__ = 93;
      break;
     case 93:
      
      
      
      
      if (HEAP[$parser_addr + 56] != 0) {
        __label__ = 94;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 94:
      
      
      
      
      if (HEAP[$parser_addr + 52] != 0) {
        __label__ = 95;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 95:
      
      var $536 = HEAP[$eventEndPP];
      
      HEAP[$eventPP] = $536;
      __label__ = 96;
      break;
     case 96:
      
      
      var $540 = HEAP[$parser_addr + 56];
      var $541 = HEAP[$24];
      
      
      var $544 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$540]($544, $541);
      $noElmHandlers = 0;
      __label__ = 100;
      break;
     case 97:
      
      
      if ($noElmHandlers != 0) {
        __label__ = 98;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 98:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      var $550 = HEAP[$next];
      var $551 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $551, $550);
      __label__ = 100;
      break;
     case 100:
      
      
      _poolClear($parser_addr + 416);
      
      
      if (HEAP[$bindings] != 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 101:
      
      $b = HEAP[$bindings];
      
      
      
      
      if (HEAP[$parser_addr + 104] != 0) {
        __label__ = 102;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 102:
      
      
      var $565 = HEAP[$parser_addr + 104];
      
      
      
      
      var $570 = HEAP[HEAP[$b]];
      
      
      var $573 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$565]($573, $570);
      __label__ = 103;
      break;
     case 103:
      
      
      var $576 = HEAP[HEAP[$bindings] + 4];
      HEAP[$bindings] = $576;
      
      
      var $579 = HEAP[$parser_addr + 376];
      
      
      HEAP[$b + 4] = $579;
      
      
      
      HEAP[$parser_addr + 376] = $b;
      
      
      
      
      
      var $590 = HEAP[$b + 8];
      var $591 = HEAP[$b] + 4;
      HEAP[$591] = $590;
      
      
      if (HEAP[$bindings] != 0) {
        __label__ = 101;
        break;
      } else {
        __label__ = 104;
        break;
      }
     case 104:
      
      
      
      
      if (HEAP[$parser_addr + 312] == 0) {
        __label__ = 105;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 105:
      var $598 = HEAP[$next];
      
      
      
      var $602 = _epilogProcessor($parser_addr, $598, $end_addr, $nextPtr_addr);
      $0 = $602;
      __label__ = 178;
      break;
     case 106:
      
      
      
      
      
      if (HEAP[$parser_addr + 312] == $startTagLevel_addr) {
        __label__ = 107;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 107:
      $0 = 13;
      __label__ = 178;
      break;
     case 108:
      
      
      
      $tag120 = HEAP[$parser_addr + 364];
      
      
      var $613 = HEAP[$tag120];
      
      
      HEAP[$parser_addr + 364] = $613;
      
      
      var $618 = HEAP[$parser_addr + 368];
      
      
      HEAP[$tag120] = $618;
      
      
      
      HEAP[$parser_addr + 368] = $tag120;
      
      
      
      
      
      
      $rawName119 = HEAP[$s_addr] + HEAP[$enc_addr + 68] * 2;
      
      
      var $632 = HEAP[$enc_addr + 32];
      
      
      var $635 = FUNCTION_TABLE[$632]($enc_addr, $rawName119);
      $len = $635;
      
      
      
      
      
      if (HEAP[$tag120 + 8] != $len) {
        __label__ = 110;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 109:
      
      
      
      var $644 = HEAP[$tag120 + 4];
      
      var $646 = _memcmp($644, $rawName119, $len);
      
      if ($646 != 0) {
        __label__ = 110;
        break;
      } else {
        __label__ = 111;
        break;
      }
     case 110:
      
      
      HEAP[$eventPP] = $rawName119;
      $0 = 7;
      __label__ = 178;
      break;
     case 111:
      
      
      
      var $653 = HEAP[$parser_addr + 312] - 1;
      
      
      HEAP[$parser_addr + 312] = $653;
      
      
      
      
      if (HEAP[$parser_addr + 56] != 0) {
        __label__ = 112;
        break;
      } else {
        __label__ = 122;
        break;
      }
     case 112:
      
      
      
      
      $localPart = HEAP[$tag120 + 12 + 4];
      
      
      
      
      if (HEAP[$parser_addr + 236] != 0) {
        __label__ = 113;
        break;
      } else {
        __label__ = 121;
        break;
      }
     case 113:
      
      
      if ($localPart != 0) {
        __label__ = 114;
        break;
      } else {
        __label__ = 121;
        break;
      }
     case 114:
      
      
      
      
      
      
      
      
      
      $uri = HEAP[$tag120 + 12] + HEAP[$tag120 + 12 + 16];
      
      
      
      if (HEAP[$localPart] != 0) {
        __label__ = 115;
        break;
      } else {
        __label__ = 116;
        break;
      }
     case 115:
      
      var $683 = HEAP[$localPart];
      
      HEAP[$uri] = $683;
      
      var $686 = $uri + 1;
      $uri = $686;
      
      var $688 = $localPart + 1;
      $localPart = $688;
      
      
      
      if (HEAP[$localPart] != 0) {
        __label__ = 115;
        break;
      } else {
        __label__ = 116;
        break;
      }
     case 116:
      
      
      
      
      $prefix = HEAP[$tag120 + 12 + 8];
      
      
      
      
      if (HEAP[$parser_addr + 237] != 0) {
        __label__ = 117;
        break;
      } else {
        __label__ = 120;
        break;
      }
     case 117:
      
      
      if ($prefix != 0) {
        __label__ = 118;
        break;
      } else {
        __label__ = 120;
        break;
      }
     case 118:
      
      
      var $704 = HEAP[$parser_addr + 472];
      
      HEAP[$uri] = $704;
      
      var $707 = $uri + 1;
      $uri = $707;
      
      
      
      if (HEAP[$prefix] != 0) {
        __label__ = 119;
        break;
      } else {
        __label__ = 120;
        break;
      }
     case 119:
      
      var $712 = HEAP[$prefix];
      
      HEAP[$uri] = $712;
      
      var $715 = $uri + 1;
      $uri = $715;
      
      var $717 = $prefix + 1;
      $prefix = $717;
      
      
      
      if (HEAP[$prefix] != 0) {
        __label__ = 119;
        break;
      } else {
        __label__ = 120;
        break;
      }
     case 120:
      
      HEAP[$uri] = 0;
      __label__ = 121;
      break;
     case 121:
      
      
      var $724 = HEAP[$parser_addr + 56];
      
      
      
      var $728 = HEAP[$tag120 + 12];
      
      
      var $731 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$724]($731, $728);
      __label__ = 124;
      break;
     case 122:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 123;
        break;
      } else {
        __label__ = 124;
        break;
      }
     case 123:
      var $736 = HEAP[$next];
      var $737 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $737, $736);
      __label__ = 124;
      break;
     case 124:
      
      
      
      
      if (HEAP[$tag120 + 44] != 0) {
        __label__ = 125;
        break;
      } else {
        __label__ = 128;
        break;
      }
     case 125:
      
      
      
      $b140 = HEAP[$tag120 + 44];
      
      
      
      
      if (HEAP[$parser_addr + 104] != 0) {
        __label__ = 126;
        break;
      } else {
        __label__ = 127;
        break;
      }
     case 126:
      
      
      var $753 = HEAP[$parser_addr + 104];
      
      
      
      
      var $758 = HEAP[HEAP[$b140]];
      
      
      var $761 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$753]($761, $758);
      __label__ = 127;
      break;
     case 127:
      
      
      
      
      var $766 = HEAP[HEAP[$tag120 + 44] + 4];
      
      
      HEAP[$tag120 + 44] = $766;
      
      
      var $771 = HEAP[$parser_addr + 376];
      
      
      HEAP[$b140 + 4] = $771;
      
      
      
      HEAP[$parser_addr + 376] = $b140;
      
      
      
      
      
      var $782 = HEAP[$b140 + 8];
      var $783 = HEAP[$b140] + 4;
      HEAP[$783] = $782;
      
      
      
      
      if (HEAP[$tag120 + 44] != 0) {
        __label__ = 125;
        break;
      } else {
        __label__ = 128;
        break;
      }
     case 128:
      
      
      
      
      if (HEAP[$parser_addr + 312] == 0) {
        __label__ = 129;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 129:
      var $792 = HEAP[$next];
      
      
      
      var $796 = _epilogProcessor($parser_addr, $792, $end_addr, $nextPtr_addr);
      $0 = $796;
      __label__ = 178;
      break;
     case 130:
      
      
      var $799 = HEAP[$enc_addr + 44];
      var $800 = HEAP[$s_addr];
      
      var $802 = FUNCTION_TABLE[$799]($enc_addr, $800);
      $n = $802;
      
      
      if ($n < 0) {
        __label__ = 131;
        break;
      } else {
        __label__ = 132;
        break;
      }
     case 131:
      $0 = 14;
      __label__ = 178;
      break;
     case 132:
      
      
      
      
      var $809 = $parser_addr;
      if (HEAP[$parser_addr + 60] != 0) {
        __label__ = 133;
        break;
      } else {
        __label__ = 134;
        break;
      }
     case 133:
      
      var $811 = HEAP[$809 + 60];
      
      var $813 = _PyExpat_XmlUtf8Encode($n, $buf151);
      
      
      var $816 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$811]($816, $buf152, $813);
      __label__ = 175;
      break;
     case 134:
      
      
      
      if (HEAP[$809 + 80] != 0) {
        __label__ = 135;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 135:
      var $820 = HEAP[$next];
      var $821 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $821, $820);
      __label__ = 175;
      break;
     case 136:
      $0 = 17;
      __label__ = 178;
      break;
     case 137:
      
      
      
      
      if (HEAP[$parser_addr + 60] != 0) {
        __label__ = 138;
        break;
      } else {
        __label__ = 139;
        break;
      }
     case 138:
      HEAP[$c159] = 10;
      
      
      var $830 = HEAP[$parser_addr + 60];
      
      
      var $833 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$830]($833, $c159, 1);
      __label__ = 175;
      break;
     case 139:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 140;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 140:
      var $838 = HEAP[$next];
      var $839 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $839, $838);
      __label__ = 175;
      break;
     case 141:
      
      
      
      
      var $846 = $parser_addr;
      if (HEAP[$parser_addr + 72] != 0) {
        __label__ = 142;
        break;
      } else {
        __label__ = 143;
        break;
      }
     case 142:
      
      var $848 = HEAP[$846 + 72];
      
      
      var $851 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$848]($851);
      __label__ = 145;
      break;
     case 143:
      
      
      
      if (HEAP[$846 + 80] != 0) {
        __label__ = 144;
        break;
      } else {
        __label__ = 145;
        break;
      }
     case 144:
      var $855 = HEAP[$next];
      var $856 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $856, $855);
      __label__ = 145;
      break;
     case 145:
      
      
      
      
      
      
      
      var $866 = _doCdataSection($parser_addr, $enc_addr, $next, $end_addr, $nextPtr_addr, $haveMore_addr & 255);
      $result164 = $866;
      
      if ($866 != 0) {
        __label__ = 146;
        break;
      } else {
        __label__ = 147;
        break;
      }
     case 146:
      
      $0 = $result164;
      __label__ = 178;
      break;
     case 147:
      
      
      if (HEAP[$next] == 0) {
        __label__ = 148;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 148:
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 62;
      
      $0 = $result164;
      __label__ = 178;
      break;
     case 149:
      
      
      if ($haveMore_addr != 0) {
        __label__ = 150;
        break;
      } else {
        __label__ = 151;
        break;
      }
     case 150:
      var $876 = HEAP[$s_addr];
      
      HEAP[$nextPtr_addr] = $876;
      $0 = 0;
      __label__ = 178;
      break;
     case 151:
      
      
      
      
      if (HEAP[$parser_addr + 60] != 0) {
        __label__ = 152;
        break;
      } else {
        __label__ = 155;
        break;
      }
     case 152:
      
      
      
      
      var $886 = $parser_addr;
      if (HEAP[$enc_addr + 72] == 0) {
        __label__ = 153;
        break;
      } else {
        __label__ = 154;
        break;
      }
     case 153:
      
      var $888 = HEAP[$886 + 44];
      HEAP[$dataPtr] = $888;
      
      
      var $891 = HEAP[$enc_addr + 60];
      
      
      var $894 = HEAP[$parser_addr + 48];
      
      
      FUNCTION_TABLE[$891]($enc_addr, $s_addr, $end_addr, $dataPtr, $894);
      
      
      var $899 = HEAP[$parser_addr + 60];
      
      
      
      
      
      
      var $906 = HEAP[$dataPtr] - HEAP[$parser_addr + 44];
      
      
      var $909 = HEAP[$parser_addr + 44];
      
      
      var $912 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$899]($912, $909, $906);
      __label__ = 157;
      break;
     case 154:
      
      var $914 = HEAP[$886 + 60];
      
      
      
      
      var $919 = $end_addr - HEAP[$s_addr];
      var $920 = HEAP[$s_addr];
      
      
      var $923 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$914]($923, $920, $919);
      __label__ = 157;
      break;
     case 155:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 156;
        break;
      } else {
        __label__ = 157;
        break;
      }
     case 156:
      var $928 = HEAP[$s_addr];
      
      
      
      _reportDefault($parser_addr, $enc_addr, $928, $end_addr);
      __label__ = 157;
      break;
     case 157:
      
      
      if ($startTagLevel_addr == 0) {
        __label__ = 158;
        break;
      } else {
        __label__ = 159;
        break;
      }
     case 158:
      
      
      HEAP[$eventPP] = $end_addr;
      $0 = 3;
      __label__ = 178;
      break;
     case 159:
      
      
      
      
      
      if (HEAP[$parser_addr + 312] != $startTagLevel_addr) {
        __label__ = 160;
        break;
      } else {
        __label__ = 161;
        break;
      }
     case 160:
      
      
      HEAP[$eventPP] = $end_addr;
      $0 = 13;
      __label__ = 178;
      break;
     case 161:
      
      
      HEAP[$nextPtr_addr] = $end_addr;
      $0 = 0;
      __label__ = 178;
      break;
     case 162:
      
      
      
      
      if (HEAP[$parser_addr + 60] != 0) {
        __label__ = 163;
        break;
      } else {
        __label__ = 167;
        break;
      }
     case 163:
      
      
      
      
      if (HEAP[$enc_addr + 72] == 0) {
        __label__ = 164;
        break;
      } else {
        __label__ = 166;
        break;
      }
     case 164:
      
      
      var $955 = HEAP[$parser_addr + 44];
      HEAP[$dataPtr190] = $955;
      
      
      var $958 = HEAP[$enc_addr + 60];
      
      
      var $961 = HEAP[$parser_addr + 48];
      var $962 = HEAP[$next];
      
      FUNCTION_TABLE[$958]($enc_addr, $s_addr, $962, $dataPtr190, $961);
      var $964 = HEAP[$s_addr];
      
      HEAP[$eventEndPP] = $964;
      
      
      var $968 = HEAP[$parser_addr + 60];
      
      
      
      
      
      
      var $975 = HEAP[$dataPtr190] - HEAP[$parser_addr + 44];
      
      
      var $978 = HEAP[$parser_addr + 44];
      
      
      var $981 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$968]($981, $978, $975);
      
      
      
      if (HEAP[$s_addr] == HEAP[$next]) {
        __label__ = 175;
        break;
      } else {
        __label__ = 165;
        break;
      }
     case 165:
      var $985 = HEAP[$s_addr];
      
      HEAP[$eventPP] = $985;
      __label__ = 164;
      break;
     case 166:
      
      
      var $989 = HEAP[$parser_addr + 60];
      
      
      
      
      var $994 = HEAP[$next] - HEAP[$s_addr];
      var $995 = HEAP[$s_addr];
      
      
      var $998 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$989]($998, $995, $994);
      __label__ = 175;
      break;
     case 167:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 168;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 168:
      var $1003 = HEAP[$next];
      var $1004 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $1004, $1003);
      __label__ = 175;
      break;
     case 169:
      var $1007 = HEAP[$next];
      var $1008 = HEAP[$s_addr];
      
      
      var $1011 = _reportProcessingInstruction($parser_addr, $enc_addr, $1008, $1007);
      
      if ($1011 == 0) {
        __label__ = 170;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 170:
      $0 = 1;
      __label__ = 178;
      break;
     case 171:
      var $1013 = HEAP[$next];
      var $1014 = HEAP[$s_addr];
      
      
      var $1017 = _reportComment($parser_addr, $enc_addr, $1014, $1013);
      
      if ($1017 == 0) {
        __label__ = 172;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 172:
      $0 = 1;
      __label__ = 178;
      break;
     case 173:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 174;
        break;
      } else {
        __label__ = 175;
        break;
      }
     case 174:
      var $1023 = HEAP[$next];
      var $1024 = HEAP[$s_addr];
      
      
      _reportDefault($parser_addr, $enc_addr, $1024, $1023);
      __label__ = 175;
      break;
     case 175:
      var $1027 = HEAP[$next];
      HEAP[$s_addr] = $1027;
      var $1028 = HEAP[$s_addr];
      
      HEAP[$eventPP] = $1028;
      
      
      
      var $1033 = HEAP[$parser_addr + 480];
      if ($1033 == 2) {
        __label__ = 177;
        break;
      } else if ($1033 == 3) {
        __label__ = 176;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 176:
      var $1034 = HEAP[$next];
      
      HEAP[$nextPtr_addr] = $1034;
      $0 = 0;
      __label__ = 178;
      break;
     case 177:
      $0 = 35;
      __label__ = 178;
      break;
     case 178:
      
      $retval = $0;
      var $retval211 = $retval;
      STACKTOP = __stackBase__;
      return $retval211;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _storeAtts($parser, $enc, $attStr, $tagNamePtr, $bindingsPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $attStr_addr;
      var $tagNamePtr_addr;
      var $bindingsPtr_addr;
      var $retval;
      var $iftmp_105;
      var $iftmp_104;
      var $iftmp_102;
      var $iftmp_100;
      var $0;
      var $dtd;
      var $elementType;
      var $nDefaultAtts;
      var $appAtts;
      var $attIndex;
      var $prefixLen;
      var $i;
      var $n;
      var $uri;
      var $nPrefixes;
      var $binding;
      var $localPart;
      var $name;
      var $oldAttsSize;
      var $temp;
      var $attId;
      var $result;
      var $isCdata;
      var $j;
      var $result35;
      var $da;
      var $result58;
      var $j68;
      var $version;
      var $nsAttsSize;
      var $temp70;
      var $s;
      var $id;
      var $b;
      var $uriHash;
      var $c;
      var $c99;
      var $step;
      var $mask;
      var $s1;
      var $s2;
      var $p;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $attStr_addr = $attStr;
      $tagNamePtr_addr = $tagNamePtr;
      $bindingsPtr_addr = $bindingsPtr;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      $attIndex = 0;
      $nPrefixes = 0;
      
      
      var $6 = HEAP[$tagNamePtr_addr];
      
      
      var $9 = _lookup($dtd + 20, $6, 0);
      
      $elementType = $9;
      
      
      if ($elementType == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      var $15 = HEAP[$tagNamePtr_addr];
      
      
      var $18 = _poolCopyString($dtd + 80, $15);
      $name = $18;
      
      
      if ($name == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 1;
      __label__ = 144;
      break;
     case 3:
      
      
      
      var $24 = _lookup($dtd + 20, $name, 24);
      
      $elementType = $24;
      
      
      if ($elementType == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 1;
      __label__ = 144;
      break;
     case 5:
      
      
      
      
      if (HEAP[$parser_addr + 236] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      var $34 = _setElementTypePrefix($parser_addr, $elementType);
      
      if ($34 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 1;
      __label__ = 144;
      break;
     case 8:
      
      
      
      $nDefaultAtts = HEAP[$elementType + 12];
      
      
      var $41 = HEAP[$enc_addr + 40];
      
      
      var $44 = HEAP[$parser_addr + 392];
      
      
      var $47 = HEAP[$parser_addr + 380];
      
      
      var $50 = FUNCTION_TABLE[$41]($enc_addr, $attStr_addr, $47, $44);
      $n = $50;
      
      
      
      
      
      
      
      if ($nDefaultAtts + $n > HEAP[$parser_addr + 380]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      
      $oldAttsSize = HEAP[$parser_addr + 380];
      
      
      
      
      
      
      HEAP[$parser_addr + 380] = $n + 16 + $nDefaultAtts;
      
      
      
      var $70 = HEAP[$parser_addr + 12 + 4];
      
      
      
      var $74 = HEAP[$parser_addr + 380] * 16;
      
      
      
      var $78 = HEAP[$parser_addr + 392];
      var $79 = FUNCTION_TABLE[$70]($78, $74);
      
      $temp = $79;
      
      
      if ($temp == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 1;
      __label__ = 144;
      break;
     case 11:
      
      
      
      HEAP[$parser_addr + 392] = $temp;
      
      
      
      if ($n > $oldAttsSize) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      var $91 = HEAP[$enc_addr + 40];
      
      
      var $94 = HEAP[$parser_addr + 392];
      
      
      
      var $98 = FUNCTION_TABLE[$91]($enc_addr, $attStr_addr, $n, $94);
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      $appAtts = HEAP[$parser_addr + 392];
      $i = 0;
      __label__ = 41;
      break;
     case 14:
      
      
      
      
      
      var $108 = HEAP[HEAP[$309 + 392] + 16 * $i];
      
      
      var $111 = HEAP[$enc_addr + 32];
      
      
      
      
      
      
      var $118 = HEAP[HEAP[$parser_addr + 392] + 16 * $i];
      
      var $120 = FUNCTION_TABLE[$111]($enc_addr, $118);
      var $121 = $108 + $120;
      
      
      
      
      
      
      var $128 = HEAP[HEAP[$parser_addr + 392] + 16 * $i];
      
      
      var $131 = _getAttributeId($parser_addr, $enc_addr, $128, $121);
      $attId = $131;
      
      
      if ($attId == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 1;
      __label__ = 144;
      break;
     case 16:
      
      
      
      var $137 = HEAP[$attId] + -1;
      
      
      if (HEAP[$137] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      
      var $151 = HEAP[HEAP[$parser_addr + 392] + 16 * $i];
      
      
      HEAP[$parser_addr + 288] = $151;
      __label__ = 19;
      break;
     case 19:
      $0 = 8;
      __label__ = 144;
      break;
     case 20:
      
      
      
      var $157 = HEAP[$attId] + -1;
      HEAP[$157] = 1;
      
      
      var $160 = HEAP[$attId];
      
      
      
      HEAP[$appAtts + 4 * $attIndex] = $160;
      
      var $165 = $attIndex + 1;
      $attIndex = $165;
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 392] + 16 * $i + 12] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 21:
      $isCdata = 1;
      
      
      
      
      if (HEAP[$attId + 8] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 22:
      $j = 0;
      __label__ = 26;
      break;
     case 23:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$elementType + 20] + 12 * $j] == $attId) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      $isCdata = HEAP[HEAP[$elementType + 20] + 12 * $j + 4];
      __label__ = 27;
      break;
     case 25:
      
      var $195 = $j + 1;
      $j = $195;
      __label__ = 26;
      break;
     case 26:
      
      
      
      if ($j < $nDefaultAtts) {
        __label__ = 23;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      
      var $207 = HEAP[HEAP[$parser_addr + 392] + 16 * $i + 8];
      
      
      
      
      
      
      var $214 = HEAP[HEAP[$parser_addr + 392] + 16 * $i + 4];
      
      
      
      
      
      var $220 = _storeAttributeValue($parser_addr, $enc_addr, $isCdata & 255, $214, $207, $parser_addr + 416);
      $result = $220;
      
      if ($220 != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      $0 = $result;
      __label__ = 144;
      break;
     case 29:
      
      
      
      var $226 = HEAP[$parser_addr + 416 + 16];
      
      
      
      HEAP[$appAtts + 4 * $attIndex] = $226;
      
      
      
      var $233 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $233;
      __label__ = 33;
      break;
     case 30:
      
      
      
      
      
      
      var $243 = HEAP[HEAP[$parser_addr + 392] + 16 * $i + 8];
      
      
      
      
      
      
      var $250 = HEAP[HEAP[$parser_addr + 392] + 16 * $i + 4];
      
      
      
      var $254 = _poolStoreString($parser_addr + 416, $enc_addr, $250, $243);
      
      
      
      HEAP[$appAtts + 4 * $attIndex] = $254;
      
      
      
      
      
      if (HEAP[$appAtts + 4 * $attIndex] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = 1;
      __label__ = 144;
      break;
     case 32:
      
      
      
      var $266 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $266;
      __label__ = 33;
      break;
     case 33:
      
      
      
      
      if (HEAP[$attId + 4] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 34:
      
      
      
      
      if (HEAP[$attId + 9] != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 35:
      
      
      
      var $281 = HEAP[$appAtts + 4 * $attIndex];
      
      
      var $284 = HEAP[$attId + 4];
      
      
      
      var $288 = _addBinding($parser_addr, $284, $attId, $281, $bindingsPtr_addr);
      $result35 = $288;
      
      
      if ($result35 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      $0 = $result35;
      __label__ = 144;
      break;
     case 37:
      
      var $293 = $attIndex - 1;
      $attIndex = $293;
      __label__ = 40;
      break;
     case 38:
      
      var $295 = $attIndex + 1;
      $attIndex = $295;
      
      var $297 = $nPrefixes + 1;
      $nPrefixes = $297;
      
      
      
      var $301 = HEAP[$attId] + -1;
      HEAP[$301] = 2;
      __label__ = 40;
      break;
     case 39:
      
      var $303 = $attIndex + 1;
      $attIndex = $303;
      __label__ = 40;
      break;
     case 40:
      
      var $305 = $i + 1;
      $i = $305;
      __label__ = 41;
      break;
     case 41:
      
      
      
      var $309 = $parser_addr;
      if ($i < $n) {
        __label__ = 14;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      HEAP[$309 + 384] = $attIndex;
      
      
      
      
      if (HEAP[$elementType + 8] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      
      
      
      var $321 = HEAP[HEAP[$elementType + 8]] + -1;
      
      
      if (HEAP[$321] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      $i = 0;
      __label__ = 48;
      break;
     case 45:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$appAtts + 4 * $i] == HEAP[HEAP[$elementType + 8]]) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      HEAP[$parser_addr + 388] = $i;
      __label__ = 50;
      break;
     case 47:
      
      var $338 = $i + 2;
      $i = $338;
      __label__ = 48;
      break;
     case 48:
      
      
      
      if ($i < $attIndex) {
        __label__ = 45;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      HEAP[$parser_addr + 388] = -1;
      __label__ = 50;
      break;
     case 50:
      $i = 0;
      __label__ = 60;
      break;
     case 51:
      
      
      
      
      
      $da = HEAP[$elementType + 20] + 12 * $i;
      
      
      
      
      
      var $354 = HEAP[HEAP[$da]] + -1;
      
      
      if (HEAP[$354] == 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 52:
      
      
      
      
      if (HEAP[$da + 8] != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 53:
      
      
      
      
      
      
      
      
      var $369 = HEAP[$da];
      if (HEAP[HEAP[$da] + 4] != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 54:
      
      
      
      var $373 = $da;
      if (HEAP[$369 + 9] != 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 55:
      
      var $375 = HEAP[$373 + 8];
      
      
      var $378 = HEAP[$da];
      
      
      
      
      var $383 = HEAP[HEAP[$da] + 4];
      
      
      var $386 = _addBinding($parser_addr, $383, $378, $375, $bindingsPtr_addr);
      $result58 = $386;
      
      
      if ($result58 != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 56:
      
      $0 = $result58;
      __label__ = 144;
      break;
     case 57:
      
      
      
      
      var $394 = HEAP[HEAP[$373]] + -1;
      HEAP[$394] = 2;
      
      var $396 = $nPrefixes + 1;
      $nPrefixes = $396;
      
      
      
      
      var $401 = HEAP[HEAP[$da]];
      
      
      
      HEAP[$appAtts + 4 * $attIndex] = $401;
      
      var $406 = $attIndex + 1;
      $attIndex = $406;
      
      
      var $409 = HEAP[$da + 8];
      
      
      
      HEAP[$appAtts + 4 * $attIndex] = $409;
      
      var $414 = $attIndex + 1;
      $attIndex = $414;
      __label__ = 59;
      break;
     case 58:
      
      
      var $417 = HEAP[$369] + -1;
      HEAP[$417] = 1;
      
      
      
      
      var $422 = HEAP[HEAP[$da]];
      
      
      
      HEAP[$appAtts + 4 * $attIndex] = $422;
      
      var $427 = $attIndex + 1;
      $attIndex = $427;
      
      
      var $430 = HEAP[$da + 8];
      
      
      
      HEAP[$appAtts + 4 * $attIndex] = $430;
      
      var $435 = $attIndex + 1;
      $attIndex = $435;
      __label__ = 59;
      break;
     case 59:
      
      var $437 = $i + 1;
      $i = $437;
      __label__ = 60;
      break;
     case 60:
      
      
      
      if ($i < $nDefaultAtts) {
        __label__ = 51;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 61:
      
      
      
      HEAP[$appAtts + 4 * $attIndex] = 0;
      $i = 0;
      
      
      if ($nPrefixes != 0) {
        __label__ = 62;
        break;
      } else {
        __label__ = 114;
        break;
      }
     case 62:
      
      
      
      $version = HEAP[$parser_addr + 400];
      
      
      
      
      
      $nsAttsSize = 1 << HEAP[$parser_addr + 404];
      
      
      
      
      
      
      
      
      if ($nPrefixes << 1 >> HEAP[$parser_addr + 404] != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 63:
      
      
      
      
      
      
      
      var $469 = $nPrefixes >> HEAP[$parser_addr + 404] != 0;
      var $470 = HEAP[$parser_addr + 404] + 1;
      
      
      HEAP[$parser_addr + 404] = $470;
      
      if ($469 != 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 64:
      
      
      
      
      if (HEAP[$parser_addr + 404] <= 2) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      
      
      HEAP[$parser_addr + 404] = 3;
      __label__ = 66;
      break;
     case 66:
      
      
      
      
      
      $nsAttsSize = 1 << HEAP[$parser_addr + 404];
      
      
      
      var $487 = HEAP[$parser_addr + 12 + 4];
      
      
      
      
      
      var $493 = HEAP[$parser_addr + 396];
      var $494 = FUNCTION_TABLE[$487]($493, $nsAttsSize * 12);
      
      $temp70 = $494;
      
      if ($494 == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      $0 = 1;
      __label__ = 144;
      break;
     case 68:
      
      
      
      HEAP[$parser_addr + 396] = $temp70;
      $version = 0;
      __label__ = 70;
      break;
     case 69:
      
      
      if ($version == 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 70:
      $version = -1;
      
      $j68 = $nsAttsSize;
      
      if ($nsAttsSize != 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      
      var $505 = HEAP[$parser_addr + 396];
      
      var $507 = $j68 - 1;
      $j68 = $507;
      
      
      var $510 = $505 + 12 * $j68;
      
      HEAP[$510] = $version;
      
      
      if ($j68 != 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 72:
      
      var $514 = $version - 1;
      $version = $514;
      
      
      
      HEAP[$parser_addr + 400] = $version;
      __label__ = 113;
      break;
     case 73:
      
      
      
      
      $s = HEAP[$appAtts + 4 * $i];
      
      var $523 = $s + -1;
      
      
      if (HEAP[$523] == 2) {
        __label__ = 74;
        break;
      } else {
        __label__ = 111;
        break;
      }
     case 74:
      $uriHash = 0;
      
      var $527 = $s + -1;
      HEAP[$527] = 0;
      
      
      
      var $531 = _lookup($dtd + 40, $s, 0);
      
      $id = $531;
      
      
      if ($id == 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      $0 = 1;
      __label__ = 144;
      break;
     case 76:
      
      
      
      
      
      $b = HEAP[HEAP[$id + 4] + 4];
      
      
      if ($b == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      $0 = 27;
      __label__ = 144;
      break;
     case 78:
      $j68 = 0;
      __label__ = 83;
      break;
     case 79:
      
      
      
      
      
      
      $c = HEAP[HEAP[$b + 16] + $j68];
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 82;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 80:
      
      
      var $559 = _poolGrow($parser_addr + 416);
      
      if ($559 != 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 81:
      $iftmp_100 = 1;
      $0 = 1;
      __label__ = 144;
      break;
     case 82:
      
      
      
      var $564 = HEAP[$parser_addr + 416 + 12];
      
      HEAP[$564] = $c;
      var $566 = $564 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $566;
      $iftmp_100 = 0;
      
      
      
      
      var $574 = $c ^ $uriHash * 1000003;
      $uriHash = $574;
      
      var $576 = $j68 + 1;
      $j68 = $576;
      __label__ = 83;
      break;
     case 83:
      
      
      
      
      
      if (HEAP[$b + 20] > $j68) {
        __label__ = 79;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 84:
      
      
      
      var $585 = HEAP[$s] != 58;
      
      var $587 = $s + 1;
      $s = $587;
      
      if ($585 != 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 85;
        break;
      }
     case 85:
      
      
      $c99 = HEAP[$s];
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 88;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 86:
      
      
      var $601 = _poolGrow($parser_addr + 416);
      
      if ($601 != 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 87:
      $iftmp_102 = 1;
      $0 = 1;
      __label__ = 144;
      break;
     case 88:
      
      
      
      var $606 = HEAP[$parser_addr + 416 + 12];
      
      var $608 = HEAP[$s];
      HEAP[$606] = $608;
      var $609 = $606 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $609;
      $iftmp_102 = 0;
      
      
      
      
      var $617 = $c99 ^ $uriHash * 1000003;
      $uriHash = $617;
      
      
      
      var $621 = HEAP[$s] != 0;
      
      var $623 = $s + 1;
      $s = $623;
      
      if ($621 != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 89:
      $step = 0;
      
      
      $mask = $nsAttsSize - 1;
      
      
      
      $j68 = $mask & $uriHash;
      __label__ = 102;
      break;
     case 90:
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$703 + 396] + 12 * $j68 + 4] == $uriHash) {
        __label__ = 91;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 91:
      
      
      
      
      $s1 = HEAP[$parser_addr + 416 + 16];
      
      
      
      
      
      
      
      $s2 = HEAP[HEAP[$parser_addr + 396] + 12 * $j68 + 8];
      __label__ = 93;
      break;
     case 92:
      
      var $649 = $s1 + 1;
      $s1 = $649;
      
      var $651 = $s2 + 1;
      $s2 = $651;
      __label__ = 93;
      break;
     case 93:
      
      
      
      
      
      if (HEAP[$s1] != HEAP[$s2]) {
        __label__ = 95;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 94:
      
      
      
      if (HEAP[$s1] != 0) {
        __label__ = 92;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 95:
      
      
      
      if (HEAP[$s1] == 0) {
        __label__ = 96;
        break;
      } else {
        __label__ = 97;
        break;
      }
     case 96:
      $0 = 8;
      __label__ = 144;
      break;
     case 97:
      
      
      if ($step == 0) {
        __label__ = 98;
        break;
      } else {
        __label__ = 99;
        break;
      }
     case 98:
      
      var $not = $mask ^ -1;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $step = ($uriHash & $not) >>> HEAP[$parser_addr + 404] - 1 & 255 & ($mask >>> 2 & 255) | 1;
      __label__ = 99;
      break;
     case 99:
      
      
      
      
      
      var $685 = $step;
      if ($step > $j68) {
        __label__ = 100;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 100:
      
      
      
      
      var $689 = $nsAttsSize + (0 - $685) + $j68;
      $j68 = $689;
      
      $iftmp_104 = $j68;
      __label__ = 102;
      break;
     case 101:
      
      var $692 = $j68 - $685;
      $j68 = $692;
      
      $iftmp_104 = $j68;
      __label__ = 102;
      break;
     case 102:
      
      
      
      
      
      
      
      
      
      var $703 = $parser_addr;
      if (HEAP[HEAP[$parser_addr + 396] + 12 * $j68] == $version) {
        __label__ = 90;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 103:
      
      
      
      if (HEAP[$703 + 237] != 0) {
        __label__ = 104;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 104:
      
      
      
      
      
      
      var $713 = HEAP[$parser_addr + 472];
      var $714 = HEAP[$parser_addr + 416 + 12] + -1;
      HEAP[$714] = $713;
      
      
      
      
      
      $s = HEAP[HEAP[$b]];
      __label__ = 105;
      break;
     case 105:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 108;
        break;
      } else {
        __label__ = 106;
        break;
      }
     case 106:
      
      
      var $731 = _poolGrow($parser_addr + 416);
      
      if ($731 != 0) {
        __label__ = 108;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 107:
      $iftmp_105 = 1;
      $0 = 1;
      __label__ = 144;
      break;
     case 108:
      
      
      
      var $736 = HEAP[$parser_addr + 416 + 12];
      
      var $738 = HEAP[$s];
      HEAP[$736] = $738;
      var $739 = $736 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $739;
      $iftmp_105 = 0;
      
      
      
      var $746 = HEAP[$s] != 0;
      
      var $748 = $s + 1;
      $s = $748;
      
      if ($746 != 0) {
        __label__ = 105;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 109:
      
      
      
      
      $s = HEAP[$parser_addr + 416 + 16];
      
      
      
      var $756 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $756;
      
      
      
      
      HEAP[$appAtts + 4 * $i] = $s;
      
      
      
      
      
      var $769 = HEAP[$parser_addr + 396] + 12 * $j68;
      
      HEAP[$769] = $version;
      
      
      
      
      
      var $776 = HEAP[$parser_addr + 396] + 12 * $j68 + 4;
      
      HEAP[$776] = $uriHash;
      
      
      
      
      
      var $783 = HEAP[$parser_addr + 396] + 12 * $j68 + 8;
      
      HEAP[$783] = $s;
      
      var $786 = $nPrefixes - 1;
      $nPrefixes = $786;
      
      if ($786 == 0) {
        __label__ = 110;
        break;
      } else {
        __label__ = 112;
        break;
      }
     case 110:
      
      var $789 = $i + 2;
      $i = $789;
      __label__ = 114;
      break;
     case 111:
      
      var $791 = $s + -1;
      HEAP[$791] = 0;
      __label__ = 112;
      break;
     case 112:
      
      var $793 = $i + 2;
      $i = $793;
      __label__ = 113;
      break;
     case 113:
      
      
      
      if ($i < $attIndex) {
        __label__ = 73;
        break;
      } else {
        __label__ = 114;
        break;
      }
     case 114:
      
      
      
      if ($i < $attIndex) {
        __label__ = 115;
        break;
      } else {
        __label__ = 116;
        break;
      }
     case 115:
      
      
      
      
      var $804 = HEAP[$appAtts + 4 * $i] + -1;
      HEAP[$804] = 0;
      
      var $806 = $i + 2;
      $i = $806;
      
      
      
      if ($i < $attIndex) {
        __label__ = 115;
        break;
      } else {
        __label__ = 116;
        break;
      }
     case 116:
      
      
      $binding = HEAP[$bindingsPtr_addr];
      
      if (HEAP[$bindingsPtr_addr] != 0) {
        __label__ = 117;
        break;
      } else {
        __label__ = 118;
        break;
      }
     case 117:
      
      
      
      
      
      var $818 = HEAP[HEAP[$binding + 12]] + -1;
      HEAP[$818] = 0;
      
      
      var $821 = HEAP[$binding + 4];
      $binding = $821;
      
      if ($821 != 0) {
        __label__ = 117;
        break;
      } else {
        __label__ = 118;
        break;
      }
     case 118:
      
      
      
      
      if (HEAP[$parser_addr + 236] == 0) {
        __label__ = 119;
        break;
      } else {
        __label__ = 120;
        break;
      }
     case 119:
      $0 = 0;
      __label__ = 144;
      break;
     case 120:
      
      
      
      
      if (HEAP[$elementType + 4] != 0) {
        __label__ = 121;
        break;
      } else {
        __label__ = 125;
        break;
      }
     case 121:
      
      
      
      
      
      $binding = HEAP[HEAP[$elementType + 4] + 4];
      
      
      if ($binding == 0) {
        __label__ = 122;
        break;
      } else {
        __label__ = 123;
        break;
      }
     case 122:
      $0 = 27;
      __label__ = 144;
      break;
     case 123:
      
      
      
      $localPart = HEAP[$tagNamePtr_addr];
      __label__ = 124;
      break;
     case 124:
      
      
      
      var $844 = HEAP[$localPart] != 58;
      
      var $846 = $localPart + 1;
      $localPart = $846;
      
      if ($844 != 0) {
        __label__ = 124;
        break;
      } else {
        __label__ = 128;
        break;
      }
     case 125:
      
      
      
      
      
      if (HEAP[$dtd + 152 + 4] != 0) {
        __label__ = 126;
        break;
      } else {
        __label__ = 127;
        break;
      }
     case 126:
      
      
      
      
      $binding = HEAP[$dtd + 152 + 4];
      
      
      
      $localPart = HEAP[$tagNamePtr_addr];
      __label__ = 128;
      break;
     case 127:
      $0 = 0;
      __label__ = 144;
      break;
     case 128:
      $prefixLen = 0;
      
      
      
      
      if (HEAP[$parser_addr + 237] != 0) {
        __label__ = 129;
        break;
      } else {
        __label__ = 131;
        break;
      }
     case 129:
      
      
      
      
      
      
      if (HEAP[HEAP[$binding]] != 0) {
        __label__ = 130;
        break;
      } else {
        __label__ = 131;
        break;
      }
     case 130:
      
      
      
      
      
      
      
      
      
      var $878 = HEAP[HEAP[HEAP[$binding]] + $prefixLen] != 0;
      
      var $880 = $prefixLen + 1;
      $prefixLen = $880;
      
      if ($878 != 0) {
        __label__ = 130;
        break;
      } else {
        __label__ = 131;
        break;
      }
     case 131:
      
      
      
      HEAP[$tagNamePtr_addr + 4] = $localPart;
      
      
      var $886 = HEAP[$binding + 20];
      
      
      HEAP[$tagNamePtr_addr + 16] = $886;
      
      
      
      
      var $893 = HEAP[HEAP[$binding]];
      
      
      HEAP[$tagNamePtr_addr + 8] = $893;
      
      
      
      HEAP[$tagNamePtr_addr + 20] = $prefixLen;
      $i = 0;
      __label__ = 132;
      break;
     case 132:
      
      
      
      
      
      var $904 = HEAP[$localPart + $i] != 0;
      
      var $906 = $i + 1;
      $i = $906;
      
      if ($904 != 0) {
        __label__ = 132;
        break;
      } else {
        __label__ = 133;
        break;
      }
     case 133:
      
      
      
      
      
      
      
      $n = $i + HEAP[$binding + 20] + $prefixLen;
      
      
      
      
      
      if (HEAP[$binding + 24] < $n) {
        __label__ = 134;
        break;
      } else {
        __label__ = 141;
        break;
      }
     case 134:
      
      
      
      var $922 = HEAP[$parser_addr + 12];
      
      
      var $925 = FUNCTION_TABLE[$922]($n + 24);
      $uri = $925;
      
      
      if ($uri == 0) {
        __label__ = 135;
        break;
      } else {
        __label__ = 136;
        break;
      }
     case 135:
      $0 = 1;
      __label__ = 144;
      break;
     case 136:
      
      
      
      
      HEAP[$binding + 24] = $n + 24;
      
      
      var $934 = HEAP[$binding + 20];
      
      
      var $937 = HEAP[$binding + 16];
      
      _llvm_memcpy_p0i8_p0i8_i32($uri, $937, $934, 1, 0);
      
      
      
      $p = HEAP[$parser_addr + 364];
      
      if (HEAP[$parser_addr + 364] != 0) {
        __label__ = 137;
        break;
      } else {
        __label__ = 140;
        break;
      }
     case 137:
      
      
      
      
      
      
      
      
      if (HEAP[$p + 12] == HEAP[$binding + 16]) {
        __label__ = 138;
        break;
      } else {
        __label__ = 139;
        break;
      }
     case 138:
      
      
      
      
      HEAP[$p + 12] = $uri;
      __label__ = 139;
      break;
     case 139:
      
      
      var $957 = HEAP[$p];
      $p = $957;
      
      if ($957 != 0) {
        __label__ = 137;
        break;
      } else {
        __label__ = 140;
        break;
      }
     case 140:
      
      
      
      var $962 = HEAP[$parser_addr + 12 + 8];
      
      
      var $965 = HEAP[$binding + 16];
      FUNCTION_TABLE[$962]($965);
      
      
      
      HEAP[$binding + 16] = $uri;
      __label__ = 141;
      break;
     case 141:
      
      
      
      
      
      
      
      $uri = HEAP[$binding + 16] + HEAP[$binding + 20];
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($uri, $localPart, $i, 1, 0);
      
      
      if ($prefixLen != 0) {
        __label__ = 142;
        break;
      } else {
        __label__ = 143;
        break;
      }
     case 142:
      
      
      
      var $984 = $uri + ($i - 1);
      $uri = $984;
      
      
      var $987 = HEAP[$parser_addr + 472];
      
      HEAP[$uri] = $987;
      
      
      
      
      
      var $994 = HEAP[HEAP[$binding]];
      
      
      _llvm_memcpy_p0i8_p0i8_i32($uri + 1, $994, $prefixLen, 1, 0);
      __label__ = 143;
      break;
     case 143:
      
      
      var $999 = HEAP[$binding + 16];
      
      
      HEAP[$tagNamePtr_addr] = $999;
      $0 = 0;
      __label__ = 144;
      break;
     case 144:
      
      $retval = $0;
      var $retval178 = $retval;
      return $retval178;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _addBinding($parser, $prefix, $attId, $uri, $bindingsPtr) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $prefix_addr;
      var $attId_addr;
      var $uri_addr;
      var $bindingsPtr_addr;
      var $retval;
      var $iftmp_119;
      var $iftmp_117;
      var $iftmp_115;
      var $iftmp_113;
      var $0;
      var $mustBeXML;
      var $isXML;
      var $isXMLNS;
      var $b;
      var $len;
      var $temp;
      $parser_addr = $parser;
      $prefix_addr = $prefix;
      $attId_addr = $attId;
      $uri_addr = $uri;
      $bindingsPtr_addr = $bindingsPtr;
      $mustBeXML = 0;
      $isXML = 1;
      $isXMLNS = 1;
      
      
      
      if (HEAP[$uri_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$prefix_addr] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 28;
      __label__ = 65;
      break;
     case 3:
      
      
      
      
      if (HEAP[$prefix_addr] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$prefix_addr]] == 120) {
        __label__ = 5;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 5:
      
      
      
      
      
      
      if (HEAP[HEAP[$prefix_addr] + 1] == 109) {
        __label__ = 6;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 6:
      
      
      
      
      
      
      if (HEAP[HEAP[$prefix_addr] + 2] == 108) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      
      
      if (HEAP[HEAP[$prefix_addr] + 3] == 110) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$prefix_addr] + 4] == 115) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      
      
      if (HEAP[HEAP[$prefix_addr] + 5] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 39;
      __label__ = 65;
      break;
     case 11:
      
      
      
      
      
      
      if (HEAP[HEAP[$prefix_addr] + 3] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $mustBeXML = 1;
      __label__ = 13;
      break;
     case 13:
      $len = 0;
      
      
      
      
      
      var $59 = $isXML;
      if (HEAP[$uri_addr + $len] != 0) {
        __lastLabel__ = 13;
        __label__ = 14;
        break;
      } else {
        __lastLabel__ = 13;
        __label__ = 24;
        break;
      }
     case 14:
      var $60 = __lastLabel__ == 23 ? $93 : $59;
      
      if ($60 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      
      if ($len > 36) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      
      if (HEAP[$uri_addr + $len] != HEAP[_xmlNamespace_5259 + $len]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $isXML = 0;
      __label__ = 18;
      break;
     case 18:
      
      
      if ($mustBeXML == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 19:
      
      
      if ($isXMLNS != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      if ($len > 29) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      
      
      
      
      
      if (HEAP[$uri_addr + $len] != HEAP[_xmlnsNamespace_5261 + $len]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $isXMLNS = 0;
      __label__ = 23;
      break;
     case 23:
      
      var $87 = $len + 1;
      $len = $87;
      
      
      
      
      
      var $93 = $isXML;
      if (HEAP[$uri_addr + $len] != 0) {
        __lastLabel__ = 23;
        __label__ = 14;
        break;
      } else {
        __lastLabel__ = 23;
        __label__ = 24;
        break;
      }
     case 24:
      var $_lcssa = __lastLabel__ == 13 ? $59 : $93;
      
      if ($_lcssa == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      if ($len != 36) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      $iftmp_113 = 1;
      __label__ = 28;
      break;
     case 27:
      $iftmp_113 = 0;
      __label__ = 28;
      break;
     case 28:
      
      
      $isXML = $iftmp_113 & 255;
      
      
      if ($isXMLNS == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      if ($len != 29) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      $iftmp_115 = 1;
      __label__ = 32;
      break;
     case 31:
      $iftmp_115 = 0;
      __label__ = 32;
      break;
     case 32:
      
      
      $isXMLNS = $iftmp_115 & 255;
      
      
      
      if ($mustBeXML != $isXML) {
        __label__ = 33;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 33:
      
      
      if ($mustBeXML != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      $iftmp_117 = 38;
      __label__ = 36;
      break;
     case 35:
      $iftmp_117 = 40;
      __label__ = 36;
      break;
     case 36:
      
      $0 = $iftmp_117;
      __label__ = 65;
      break;
     case 37:
      
      
      if ($isXMLNS != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      $0 = 40;
      __label__ = 65;
      break;
     case 39:
      
      
      
      
      if (HEAP[$parser_addr + 472] != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      var $118 = $len + 1;
      $len = $118;
      __label__ = 41;
      break;
     case 41:
      
      
      
      
      var $123 = $parser_addr;
      if (HEAP[$parser_addr + 376] != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 42:
      
      
      $b = HEAP[$123 + 376];
      
      
      
      
      
      if (HEAP[$b + 24] < $len) {
        __label__ = 43;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 43:
      
      
      
      var $134 = HEAP[$parser_addr + 12 + 4];
      
      
      
      
      var $139 = HEAP[$b + 16];
      var $140 = FUNCTION_TABLE[$134]($139, $len + 24);
      $temp = $140;
      
      
      if ($temp == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      $0 = 1;
      __label__ = 65;
      break;
     case 45:
      
      
      
      HEAP[$b + 16] = $temp;
      
      
      
      
      HEAP[$b + 24] = $len + 24;
      __label__ = 46;
      break;
     case 46:
      
      
      var $152 = HEAP[$b + 4];
      
      
      HEAP[$parser_addr + 376] = $152;
      __label__ = 52;
      break;
     case 47:
      
      
      var $157 = HEAP[$123 + 12];
      var $158 = FUNCTION_TABLE[$157](28);
      
      $b = $158;
      
      
      if ($b == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      $0 = 1;
      __label__ = 65;
      break;
     case 49:
      
      
      
      var $165 = HEAP[$parser_addr + 12];
      
      
      var $168 = FUNCTION_TABLE[$165]($len + 24);
      
      
      HEAP[$b + 16] = $168;
      
      
      
      
      if (HEAP[$b + 16] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      
      
      var $178 = HEAP[$parser_addr + 12 + 8];
      
      
      FUNCTION_TABLE[$178]($b);
      $0 = 1;
      __label__ = 65;
      break;
     case 51:
      
      
      
      
      HEAP[$b + 24] = $len + 24;
      __label__ = 52;
      break;
     case 52:
      
      
      
      HEAP[$b + 20] = $len;
      
      
      
      var $191 = HEAP[$b + 16];
      
      _llvm_memcpy_p0i8_p0i8_i32($191, $uri_addr, $len, 1, 0);
      
      
      
      
      if (HEAP[$parser_addr + 472] != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      
      
      
      var $204 = HEAP[$parser_addr + 472];
      var $205 = HEAP[$b + 16] + ($len - 1);
      HEAP[$205] = $204;
      __label__ = 54;
      break;
     case 54:
      
      
      
      HEAP[$b] = $prefix_addr;
      
      
      
      HEAP[$b + 12] = $attId_addr;
      
      
      var $214 = HEAP[$prefix_addr + 4];
      
      
      HEAP[$b + 8] = $214;
      
      
      
      if (HEAP[$uri_addr] != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      
      
      
      
      if (HEAP[$parser_addr + 356] + 152 != $prefix_addr) {
        __label__ = 57;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 56:
      
      
      HEAP[$prefix_addr + 4] = 0;
      __label__ = 58;
      break;
     case 57:
      
      
      
      HEAP[$prefix_addr + 4] = $b;
      __label__ = 58;
      break;
     case 58:
      
      var $232 = HEAP[$bindingsPtr_addr];
      
      
      HEAP[$b + 4] = $232;
      
      
      HEAP[$bindingsPtr_addr] = $b;
      
      
      if ($attId_addr != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 59:
      
      
      
      
      if (HEAP[$parser_addr + 100] != 0) {
        __label__ = 60;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 60:
      
      
      var $245 = HEAP[$parser_addr + 100];
      
      
      
      
      if (HEAP[$prefix_addr + 4] != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      $iftmp_119 = $uri_addr;
      __label__ = 63;
      break;
     case 62:
      $iftmp_119 = 0;
      __label__ = 63;
      break;
     case 63:
      
      
      var $253 = HEAP[$prefix_addr];
      
      
      var $256 = HEAP[$parser_addr + 4];
      
      FUNCTION_TABLE[$245]($256, $253, $iftmp_119);
      __label__ = 64;
      break;
     case 64:
      $0 = 0;
      __label__ = 65;
      break;
     case 65:
      
      $retval = $0;
      var $retval66 = $retval;
      return $retval66;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cdataSectionProcessor($parser, $start, $end, $endPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $start_addr = __stackBase__;
      var $end_addr;
      var $endPtr_addr;
      var $retval;
      var $0;
      var $result;
      $parser_addr = $parser;
      HEAP[$start_addr] = $start;
      $end_addr = $end;
      $endPtr_addr = $endPtr;
      
      
      
      
      
      
      
      
      var $9 = HEAP[$parser_addr + 144];
      
      
      
      var $13 = HEAP[$parser_addr + 480 + 4] == 0 & 255;
      var $14 = _doCdataSection($parser_addr, $9, $start_addr, $end_addr, $endPtr_addr, $13);
      $result = $14;
      
      
      if ($result != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $result;
      __label__ = 7;
      break;
     case 2:
      
      
      if (HEAP[$start_addr] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      var $25 = $parser_addr + 280;
      if (HEAP[$parser_addr + 476] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      HEAP[$25] = FUNCTION_TABLE_OFFSET + 60;
      var $26 = HEAP[$start_addr];
      
      
      
      var $30 = _externalEntityContentProcessor($parser_addr, $26, $end_addr, $endPtr_addr);
      $0 = $30;
      __label__ = 7;
      break;
     case 5:
      HEAP[$25] = FUNCTION_TABLE_OFFSET + 64;
      var $31 = HEAP[$start_addr];
      
      
      
      var $35 = _contentProcessor($parser_addr, $31, $end_addr, $endPtr_addr);
      $0 = $35;
      __label__ = 7;
      break;
     case 6:
      
      $0 = $result;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _doCdataSection($parser, $enc, $startPtr, $end, $nextPtr, $haveMore) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 13;
    _memset(__stackBase__, 0, 13);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $startPtr_addr;
      var $end_addr;
      var $nextPtr_addr;
      var $haveMore_addr;
      var $retval;
      var $0;
      var $s = __stackBase__;
      var $eventPP;
      var $eventEndPP;
      var $next = __stackBase__ + 4;
      var $tok;
      var $c = __stackBase__ + 8;
      var $dataPtr = __stackBase__ + 9;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $startPtr_addr = $startPtr;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      $haveMore_addr = $haveMore;
      
      var $2 = HEAP[$startPtr_addr];
      HEAP[$s] = $2;
      
      
      
      
      
      var $8 = $parser_addr;
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $eventPP = $8 + 288;
      var $10 = HEAP[$s];
      
      HEAP[$eventPP] = $10;
      
      
      $eventEndPP = $parser_addr + 292;
      __label__ = 3;
      break;
     case 2:
      
      
      
      $eventPP = HEAP[$8 + 300];
      
      
      
      
      $eventEndPP = HEAP[$parser_addr + 300] + 4;
      __label__ = 3;
      break;
     case 3:
      var $21 = HEAP[$s];
      
      HEAP[$eventPP] = $21;
      
      HEAP[$startPtr_addr] = 0;
      __label__ = 4;
      break;
     case 4:
      
      
      
      var $27 = HEAP[$enc_addr + 8];
      var $28 = HEAP[$s];
      
      
      var $31 = FUNCTION_TABLE[$27]($enc_addr, $28, $end_addr, $next);
      $tok = $31;
      var $32 = HEAP[$next];
      
      HEAP[$eventEndPP] = $32;
      var $34 = $tok;
      if ($34 == -4) {
        __label__ = 27;
        break;
      } else if ($34 == -2) {
        __label__ = 24;
        break;
      } else if ($34 == -1) {
        __label__ = 27;
        break;
      } else if ($34 == 0) {
        __label__ = 23;
        break;
      } else if ($34 == 6) {
        __label__ = 16;
        break;
      } else if ($34 == 7) {
        __label__ = 12;
        break;
      } else if ($34 == 40) {
        __label__ = 5;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 5:
      
      
      
      
      var $39 = $parser_addr;
      if (HEAP[$parser_addr + 76] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $41 = HEAP[$39 + 76];
      
      
      var $44 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$41]($44);
      __label__ = 9;
      break;
     case 7:
      
      
      
      if (HEAP[$39 + 80] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $48 = HEAP[$next];
      var $49 = HEAP[$s];
      
      
      _reportDefault($parser_addr, $enc_addr, $49, $48);
      __label__ = 9;
      break;
     case 9:
      var $52 = HEAP[$next];
      
      HEAP[$startPtr_addr] = $52;
      var $54 = HEAP[$next];
      
      HEAP[$nextPtr_addr] = $54;
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 35;
      __label__ = 34;
      break;
     case 11:
      $0 = 0;
      __label__ = 34;
      break;
     case 12:
      
      
      
      
      if (HEAP[$parser_addr + 60] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      HEAP[$c] = 10;
      
      
      var $67 = HEAP[$parser_addr + 60];
      
      
      var $70 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$67]($70, $c, 1);
      __label__ = 31;
      break;
     case 14:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 15:
      var $75 = HEAP[$next];
      var $76 = HEAP[$s];
      
      
      _reportDefault($parser_addr, $enc_addr, $76, $75);
      __label__ = 31;
      break;
     case 16:
      
      
      
      
      if (HEAP[$parser_addr + 60] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[$enc_addr + 72] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 18:
      
      
      var $89 = HEAP[$parser_addr + 44];
      HEAP[$dataPtr] = $89;
      
      
      var $92 = HEAP[$enc_addr + 60];
      
      
      var $95 = HEAP[$parser_addr + 48];
      var $96 = HEAP[$next];
      
      FUNCTION_TABLE[$92]($enc_addr, $s, $96, $dataPtr, $95);
      var $98 = HEAP[$next];
      
      HEAP[$eventEndPP] = $98;
      
      
      var $102 = HEAP[$parser_addr + 60];
      
      
      
      
      
      
      var $109 = HEAP[$dataPtr] - HEAP[$parser_addr + 44];
      
      
      var $112 = HEAP[$parser_addr + 44];
      
      
      var $115 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$102]($115, $112, $109);
      
      
      
      if (HEAP[$s] == HEAP[$next]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      var $119 = HEAP[$s];
      
      HEAP[$eventPP] = $119;
      __label__ = 18;
      break;
     case 20:
      
      
      var $123 = HEAP[$parser_addr + 60];
      
      
      
      
      var $128 = HEAP[$next] - HEAP[$s];
      var $129 = HEAP[$s];
      
      
      var $132 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$123]($132, $129, $128);
      __label__ = 31;
      break;
     case 21:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 22:
      var $137 = HEAP[$next];
      var $138 = HEAP[$s];
      
      
      _reportDefault($parser_addr, $enc_addr, $138, $137);
      __label__ = 31;
      break;
     case 23:
      var $141 = HEAP[$next];
      
      HEAP[$eventPP] = $141;
      $0 = 4;
      __label__ = 34;
      break;
     case 24:
      
      
      if ($haveMore_addr != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $145 = HEAP[$s];
      
      HEAP[$nextPtr_addr] = $145;
      $0 = 0;
      __label__ = 34;
      break;
     case 26:
      $0 = 6;
      __label__ = 34;
      break;
     case 27:
      
      
      if ($haveMore_addr != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      var $149 = HEAP[$s];
      
      HEAP[$nextPtr_addr] = $149;
      $0 = 0;
      __label__ = 34;
      break;
     case 29:
      $0 = 20;
      __label__ = 34;
      break;
     case 30:
      var $151 = HEAP[$next];
      
      HEAP[$eventPP] = $151;
      $0 = 23;
      __label__ = 34;
      break;
     case 31:
      var $153 = HEAP[$next];
      HEAP[$s] = $153;
      var $154 = HEAP[$s];
      
      HEAP[$eventPP] = $154;
      
      
      
      var $159 = HEAP[$parser_addr + 480];
      if ($159 == 2) {
        __label__ = 33;
        break;
      } else if ($159 == 3) {
        __label__ = 32;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 32:
      var $160 = HEAP[$next];
      
      HEAP[$nextPtr_addr] = $160;
      $0 = 0;
      __label__ = 34;
      break;
     case 33:
      $0 = 35;
      __label__ = 34;
      break;
     case 34:
      
      $retval = $0;
      var $retval39 = $retval;
      STACKTOP = __stackBase__;
      return $retval39;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ignoreSectionProcessor($parser, $start, $end, $endPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $start_addr = __stackBase__;
      var $end_addr;
      var $endPtr_addr;
      var $retval;
      var $0;
      var $result;
      $parser_addr = $parser;
      HEAP[$start_addr] = $start;
      $end_addr = $end;
      $endPtr_addr = $endPtr;
      
      
      
      
      
      
      
      
      var $9 = HEAP[$parser_addr + 144];
      
      
      
      var $13 = HEAP[$parser_addr + 480 + 4] == 0 & 255;
      var $14 = _doIgnoreSection($parser_addr, $9, $start_addr, $end_addr, $endPtr_addr, $13);
      $result = $14;
      
      
      if ($result != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $result;
      __label__ = 5;
      break;
     case 2:
      
      
      if (HEAP[$start_addr] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 66;
      var $22 = HEAP[$start_addr];
      
      
      
      var $26 = _prologProcessor($parser_addr, $22, $end_addr, $endPtr_addr);
      $0 = $26;
      __label__ = 5;
      break;
     case 4:
      
      $0 = $result;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _doIgnoreSection($parser, $enc, $startPtr, $end, $nextPtr, $haveMore) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $startPtr_addr;
      var $end_addr;
      var $nextPtr_addr;
      var $haveMore_addr;
      var $retval;
      var $0;
      var $next = __stackBase__;
      var $tok;
      var $s;
      var $eventPP;
      var $eventEndPP;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $startPtr_addr = $startPtr;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      $haveMore_addr = $haveMore;
      
      
      $s = HEAP[$startPtr_addr];
      
      
      
      
      
      var $8 = $parser_addr;
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $eventPP = $8 + 288;
      
      
      HEAP[$eventPP] = $s;
      
      
      $eventEndPP = $parser_addr + 292;
      __label__ = 3;
      break;
     case 2:
      
      
      
      $eventPP = HEAP[$8 + 300];
      
      
      
      
      $eventEndPP = HEAP[$parser_addr + 300] + 4;
      __label__ = 3;
      break;
     case 3:
      
      
      HEAP[$eventPP] = $s;
      
      HEAP[$startPtr_addr] = 0;
      
      
      
      var $27 = HEAP[$enc_addr + 12];
      
      
      
      var $31 = FUNCTION_TABLE[$27]($enc_addr, $s, $end_addr, $next);
      $tok = $31;
      var $32 = HEAP[$next];
      
      HEAP[$eventEndPP] = $32;
      var $34 = $tok;
      if ($34 == -4) {
        __label__ = 13;
        break;
      } else if ($34 == -2) {
        __label__ = 10;
        break;
      } else if ($34 == -1) {
        __label__ = 13;
        break;
      } else if ($34 == 0) {
        __label__ = 9;
        break;
      } else if ($34 == 42) {
        __label__ = 4;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $39 = HEAP[$next];
      
      
      
      _reportDefault($parser_addr, $enc_addr, $s, $39);
      __label__ = 6;
      break;
     case 6:
      var $43 = HEAP[$next];
      
      HEAP[$startPtr_addr] = $43;
      var $45 = HEAP[$next];
      
      HEAP[$nextPtr_addr] = $45;
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 35;
      __label__ = 17;
      break;
     case 8:
      $0 = 0;
      __label__ = 17;
      break;
     case 9:
      var $52 = HEAP[$next];
      
      HEAP[$eventPP] = $52;
      $0 = 4;
      __label__ = 17;
      break;
     case 10:
      
      
      if ($haveMore_addr != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      HEAP[$nextPtr_addr] = $s;
      $0 = 0;
      __label__ = 17;
      break;
     case 12:
      $0 = 6;
      __label__ = 17;
      break;
     case 13:
      
      
      if ($haveMore_addr != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      HEAP[$nextPtr_addr] = $s;
      $0 = 0;
      __label__ = 17;
      break;
     case 15:
      $0 = 2;
      __label__ = 17;
      break;
     case 16:
      var $62 = HEAP[$next];
      
      HEAP[$eventPP] = $62;
      $0 = 23;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initializeEncoding($parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $0;
      var $iftmp_162;
      var $s;
      $parser_addr = $parser;
      
      
      
      $s = HEAP[$parser_addr + 232];
      
      
      
      
      if (HEAP[$parser_addr + 236] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $iftmp_162 = FUNCTION_TABLE_OFFSET + 68;
      __label__ = 3;
      break;
     case 2:
      $iftmp_162 = FUNCTION_TABLE_OFFSET + 70;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      var $12 = $iftmp_162;
      
      var $14 = FUNCTION_TABLE[$12]($parser_addr + 148, $parser_addr + 144, $s);
      
      if ($14 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      var $18 = HEAP[$parser_addr + 232];
      
      var $20 = _handleUnknownEncoding($parser_addr, $18);
      $0 = $20;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _processXmlDecl($parser, $isGeneralTextEntity, $s, $next) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $isGeneralTextEntity_addr;
      var $s_addr;
      var $next_addr;
      var $retval;
      var $0;
      var $iftmp_163;
      var $encodingName = __stackBase__;
      var $storedEncName;
      var $newEncoding = __stackBase__ + 4;
      var $version = __stackBase__ + 8;
      var $versionend = __stackBase__ + 12;
      var $storedversion;
      var $standalone = __stackBase__ + 16;
      var $result;
      $parser_addr = $parser;
      $isGeneralTextEntity_addr = $isGeneralTextEntity;
      $s_addr = $s;
      $next_addr = $next;
      HEAP[$encodingName] = 0;
      $storedEncName = 0;
      HEAP[$newEncoding] = 0;
      HEAP[$version] = 0;
      $storedversion = 0;
      HEAP[$standalone] = -1;
      
      
      
      
      if (HEAP[$parser_addr + 236] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $iftmp_163 = FUNCTION_TABLE_OFFSET + 72;
      __label__ = 3;
      break;
     case 2:
      $iftmp_163 = FUNCTION_TABLE_OFFSET + 74;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      var $9 = HEAP[$parser_addr + 144];
      var $10 = $iftmp_163;
      
      
      
      var $14 = FUNCTION_TABLE[$10]($isGeneralTextEntity_addr, $9, $s_addr, $next_addr, $parser_addr + 288, $version, $versionend, $encodingName, $newEncoding, $standalone);
      
      var $16 = $isGeneralTextEntity_addr;
      if ($14 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      if ($16 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 31;
      __label__ = 38;
      break;
     case 6:
      $0 = 30;
      __label__ = 38;
      break;
     case 7:
      
      if ($16 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      if (HEAP[$standalone] == 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      var $24 = HEAP[$parser_addr + 356] + 130;
      HEAP[$24] = 1;
      
      
      
      
      if (HEAP[$parser_addr + 492] == 1) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      HEAP[$parser_addr + 492] = 0;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      if (HEAP[$parser_addr + 140] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 12:
      
      
      if (HEAP[$encodingName] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      var $37 = HEAP[$encodingName];
      
      
      
      
      var $42 = HEAP[HEAP[$parser_addr + 144] + 32];
      var $43 = HEAP[$encodingName];
      
      
      var $46 = HEAP[$parser_addr + 144];
      var $47 = FUNCTION_TABLE[$42]($46, $43);
      var $48 = $37 + $47;
      var $49 = HEAP[$encodingName];
      
      
      var $52 = HEAP[$parser_addr + 144];
      
      
      var $55 = _poolStoreString($parser_addr + 440, $52, $49, $48);
      $storedEncName = $55;
      
      
      if ($storedEncName == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 1;
      __label__ = 38;
      break;
     case 15:
      
      
      
      var $61 = HEAP[$parser_addr + 440 + 12];
      
      
      
      HEAP[$parser_addr + 440 + 16] = $61;
      __label__ = 16;
      break;
     case 16:
      
      
      if (HEAP[$version] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      var $74 = HEAP[$versionend] + (0 - HEAP[HEAP[$parser_addr + 144] + 68]);
      var $75 = HEAP[$version];
      
      
      var $78 = HEAP[$parser_addr + 144];
      
      
      var $81 = _poolStoreString($parser_addr + 440, $78, $75, $74);
      $storedversion = $81;
      
      
      if ($storedversion == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = 1;
      __label__ = 38;
      break;
     case 19:
      
      
      var $86 = HEAP[$parser_addr + 140];
      var $87 = HEAP[$standalone];
      
      
      var $90 = HEAP[$parser_addr + 4];
      
      
      FUNCTION_TABLE[$86]($90, $storedversion, $storedEncName, $87);
      __label__ = 22;
      break;
     case 20:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      var $99 = HEAP[$parser_addr + 144];
      
      
      
      _reportDefault($parser_addr, $99, $s_addr, $next_addr);
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      if (HEAP[$parser_addr + 232] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 23:
      
      
      if (HEAP[$newEncoding] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 24:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$newEncoding] + 68] != HEAP[HEAP[$parser_addr + 144] + 68]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $118 = HEAP[$encodingName];
      
      
      HEAP[$parser_addr + 288] = $118;
      $0 = 19;
      __label__ = 38;
      break;
     case 26:
      var $121 = HEAP[$newEncoding];
      
      
      HEAP[$parser_addr + 144] = $121;
      __label__ = 34;
      break;
     case 27:
      
      
      if (HEAP[$encodingName] != 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 28:
      
      
      if ($storedEncName == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      var $128 = HEAP[$encodingName];
      
      
      
      
      var $133 = HEAP[HEAP[$parser_addr + 144] + 32];
      var $134 = HEAP[$encodingName];
      
      
      var $137 = HEAP[$parser_addr + 144];
      var $138 = FUNCTION_TABLE[$133]($137, $134);
      var $139 = $128 + $138;
      var $140 = HEAP[$encodingName];
      
      
      var $143 = HEAP[$parser_addr + 144];
      
      
      var $146 = _poolStoreString($parser_addr + 440, $143, $140, $139);
      $storedEncName = $146;
      
      
      if ($storedEncName == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $0 = 1;
      __label__ = 38;
      break;
     case 31:
      
      
      var $151 = _handleUnknownEncoding($parser_addr, $storedEncName);
      $result = $151;
      
      
      _poolClear($parser_addr + 440);
      
      
      if ($result == 18) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      var $156 = HEAP[$encodingName];
      
      
      HEAP[$parser_addr + 288] = $156;
      __label__ = 33;
      break;
     case 33:
      
      $0 = $result;
      __label__ = 38;
      break;
     case 34:
      
      
      if ($storedEncName != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      if ($storedversion != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      _poolClear($parser_addr + 440);
      __label__ = 37;
      break;
     case 37:
      $0 = 0;
      __label__ = 38;
      break;
     case 38:
      
      $retval = $0;
      var $retval38 = $retval;
      STACKTOP = __stackBase__;
      return $retval38;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _handleUnknownEncoding($parser, $encodingName) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1036;
    _memset(__stackBase__, 0, 1036);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $encodingName_addr;
      var $retval;
      var $iftmp_184;
      var $0;
      var $info = __stackBase__;
      var $i;
      var $enc;
      $parser_addr = $parser;
      $encodingName_addr = $encodingName;
      
      
      
      
      if (HEAP[$parser_addr + 124] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 1:
      $i = 0;
      var $5 = $info;
      __label__ = 2;
      break;
     case 2:
      
      
      HEAP[$5 + $i * 4] = -1;
      
      var $9 = $i + 1;
      $i = $9;
      
      if ($9 <= 255) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      HEAP[$info + 1028] = 0;
      
      HEAP[$info + 1024] = 0;
      
      HEAP[$info + 1032] = 0;
      
      
      var $16 = HEAP[$parser_addr + 124];
      
      
      var $19 = HEAP[$parser_addr + 248];
      
      var $21 = FUNCTION_TABLE[$16]($19, $encodingName_addr, $info);
      
      if ($21 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 4:
      
      
      
      var $26 = HEAP[$parser_addr + 12];
      var $27 = _PyExpat_XmlSizeOfUnknownEncoding();
      var $28 = FUNCTION_TABLE[$26]($27);
      
      
      HEAP[$parser_addr + 240] = $28;
      
      
      
      
      if (HEAP[$parser_addr + 240] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      if (HEAP[$info + 1032] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $39 = HEAP[$info + 1032];
      
      var $41 = HEAP[$info + 1024];
      FUNCTION_TABLE[$39]($41);
      __label__ = 7;
      break;
     case 7:
      $0 = 1;
      __label__ = 16;
      break;
     case 8:
      
      
      
      
      if (HEAP[$parser_addr + 236] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $iftmp_184 = FUNCTION_TABLE_OFFSET + 76;
      __label__ = 11;
      break;
     case 10:
      $iftmp_184 = FUNCTION_TABLE_OFFSET + 78;
      __label__ = 11;
      break;
     case 11:
      
      var $47 = HEAP[$info + 1024];
      
      var $49 = HEAP[$info + 1028];
      
      
      var $52 = HEAP[$parser_addr + 240];
      var $53 = $iftmp_184;
      
      var $55 = $info;
      var $56 = FUNCTION_TABLE[$53]($52, $55, $49, $47);
      $enc = $56;
      
      if ($56 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $59 = HEAP[$info + 1024];
      
      
      HEAP[$parser_addr + 244] = $59;
      
      var $63 = HEAP[$info + 1032];
      
      
      HEAP[$parser_addr + 252] = $63;
      
      
      
      HEAP[$parser_addr + 144] = $enc;
      $0 = 0;
      __label__ = 16;
      break;
     case 13:
      
      
      
      if (HEAP[$info + 1032] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $73 = HEAP[$info + 1032];
      
      var $75 = HEAP[$info + 1024];
      FUNCTION_TABLE[$73]($75);
      __label__ = 15;
      break;
     case 15:
      $0 = 18;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _prologInitProcessor($parser, $s, $end, $nextPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $s_addr;
      var $end_addr;
      var $nextPtr_addr;
      var $retval;
      var $0;
      var $result;
      $parser_addr = $parser;
      $s_addr = $s;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      
      var $2 = _initializeEncoding($parser_addr);
      $result = $2;
      
      
      if ($result != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $result;
      __label__ = 3;
      break;
     case 2:
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 66;
      
      
      
      
      var $12 = _prologProcessor($parser_addr, $s_addr, $end_addr, $nextPtr_addr);
      $0 = $12;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _externalParEntInitProcessor($parser, $s, $end, $nextPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $s_addr;
      var $end_addr;
      var $nextPtr_addr;
      var $retval;
      var $0;
      var $result;
      $parser_addr = $parser;
      $s_addr = $s;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      
      var $2 = _initializeEncoding($parser_addr);
      $result = $2;
      
      
      if ($result != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $result;
      __label__ = 5;
      break;
     case 2:
      
      
      
      var $9 = HEAP[$parser_addr + 356] + 131;
      HEAP[$9] = 1;
      
      
      
      
      
      
      var $16 = $parser_addr + 280;
      if (HEAP[$parser_addr + 256 + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      HEAP[$16] = FUNCTION_TABLE_OFFSET + 80;
      
      
      
      
      var $21 = _entityValueInitProcessor($parser_addr, $s_addr, $end_addr, $nextPtr_addr);
      $0 = $21;
      __label__ = 5;
      break;
     case 4:
      HEAP[$16] = FUNCTION_TABLE_OFFSET + 82;
      
      
      
      
      var $26 = _externalParEntProcessor($parser_addr, $s_addr, $end_addr, $nextPtr_addr);
      $0 = $26;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entityValueInitProcessor($parser, $s, $end, $nextPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $s_addr;
      var $end_addr;
      var $nextPtr_addr;
      var $retval;
      var $0;
      var $tok;
      var $start;
      var $next = __stackBase__;
      var $result;
      $parser_addr = $parser;
      $s_addr = $s;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      
      $start = $s_addr;
      
      HEAP[$next] = $start;
      
      
      
      HEAP[$parser_addr + 288] = $start;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      var $11 = HEAP[HEAP[$parser_addr + 144]];
      
      
      var $14 = HEAP[$parser_addr + 144];
      
      
      var $17 = FUNCTION_TABLE[$11]($14, $start, $end_addr, $next);
      $tok = $17;
      var $18 = HEAP[$next];
      
      
      HEAP[$parser_addr + 292] = $18;
      
      
      if ($tok <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 2:
      
      
      
      
      
      var $28 = $tok;
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      if ($28 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      HEAP[$nextPtr_addr] = $s_addr;
      $0 = 0;
      __label__ = 22;
      break;
     case 5:
      if ($28 == -2) {
        __label__ = 8;
        break;
      } else if ($28 == -1) {
        __label__ = 7;
        break;
      } else if ($28 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      $0 = 4;
      __label__ = 22;
      break;
     case 7:
      $0 = 5;
      __label__ = 22;
      break;
     case 8:
      $0 = 6;
      __label__ = 22;
      break;
     case 9:
      
      
      var $34 = HEAP[$parser_addr + 144];
      
      
      
      var $38 = _storeEntityValue($parser_addr, $34, $s_addr, $end_addr);
      $0 = $38;
      __label__ = 22;
      break;
     case 10:
      
      
      if ($tok == 12) {
        __label__ = 11;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 11:
      var $41 = HEAP[$next];
      
      
      var $44 = _processXmlDecl($parser_addr, 0, $start, $41);
      $result = $44;
      
      
      if ($result != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      $0 = $result;
      __label__ = 22;
      break;
     case 13:
      
      
      
      var $51 = HEAP[$parser_addr + 480];
      if ($51 == 2) {
        __label__ = 15;
        break;
      } else if ($51 == 3) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      var $52 = HEAP[$next];
      
      HEAP[$nextPtr_addr] = $52;
      $0 = 0;
      __label__ = 22;
      break;
     case 15:
      $0 = 35;
      __label__ = 22;
      break;
     case 16:
      var $54 = HEAP[$next];
      
      HEAP[$nextPtr_addr] = $54;
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 84;
      var $58 = HEAP[$next];
      
      
      
      var $62 = _entityValueProcessor($parser_addr, $58, $end_addr, $nextPtr_addr);
      $0 = $62;
      __label__ = 22;
      break;
     case 17:
      
      
      if ($tok == 14) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      if (HEAP[$next] == $end_addr) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $73 = HEAP[$next];
      
      HEAP[$nextPtr_addr] = $73;
      $0 = 0;
      __label__ = 22;
      break;
     case 21:
      
      $start = HEAP[$next];
      
      
      
      HEAP[$parser_addr + 288] = $start;
      __label__ = 1;
      break;
     case 22:
      
      $retval = $0;
      var $retval22 = $retval;
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _externalParEntProcessor($parser, $s, $end, $nextPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $s_addr;
      var $end_addr;
      var $nextPtr_addr;
      var $retval;
      var $0;
      var $next = __stackBase__;
      var $tok;
      $parser_addr = $parser;
      $s_addr = $s;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      
      HEAP[$next] = $s_addr;
      
      
      
      
      
      var $7 = HEAP[HEAP[$parser_addr + 144]];
      
      
      var $10 = HEAP[$parser_addr + 144];
      
      
      var $13 = FUNCTION_TABLE[$7]($10, $s_addr, $end_addr, $next);
      $tok = $13;
      
      
      if ($tok <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      
      
      
      var $21 = $tok;
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      if ($21 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      HEAP[$nextPtr_addr] = $s_addr;
      $0 = 0;
      __label__ = 11;
      break;
     case 4:
      if ($21 == -2) {
        __label__ = 7;
        break;
      } else if ($21 == -1) {
        __label__ = 6;
        break;
      } else if ($21 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      $0 = 4;
      __label__ = 11;
      break;
     case 6:
      $0 = 5;
      __label__ = 11;
      break;
     case 7:
      $0 = 6;
      __label__ = 11;
      break;
     case 8:
      
      
      if ($tok == 14) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      $s_addr = HEAP[$next];
      
      
      
      
      
      var $33 = HEAP[HEAP[$parser_addr + 144]];
      
      
      var $36 = HEAP[$parser_addr + 144];
      
      
      var $39 = FUNCTION_TABLE[$33]($36, $s_addr, $end_addr, $next);
      $tok = $39;
      __label__ = 10;
      break;
     case 10:
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 66;
      
      
      
      
      
      
      var $48 = HEAP[$next];
      
      
      var $51 = HEAP[$parser_addr + 144];
      
      
      
      
      
      var $57 = HEAP[$parser_addr + 480 + 4] == 0 & 255;
      var $58 = _doProlog($parser_addr, $51, $s_addr, $end_addr, $tok, $48, $nextPtr_addr, $57);
      $0 = $58;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entityValueProcessor($parser, $s, $end, $nextPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $s_addr;
      var $end_addr;
      var $nextPtr_addr;
      var $retval;
      var $0;
      var $start;
      var $next = __stackBase__;
      var $enc;
      var $tok;
      $parser_addr = $parser;
      $s_addr = $s;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      
      $start = $s_addr;
      
      HEAP[$next] = $s_addr;
      
      
      
      $enc = HEAP[$parser_addr + 144];
      
      
      
      var $9 = HEAP[$enc];
      
      
      
      var $13 = FUNCTION_TABLE[$9]($enc, $start, $end_addr, $next);
      $tok = $13;
      
      if ($13 <= 0) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 9;
        break;
      }
     case 1:
      var $15 = __lastLabel__ == 9 ? $37 : $13;
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      if ($15 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      HEAP[$nextPtr_addr] = $s_addr;
      $0 = 0;
      __label__ = 10;
      break;
     case 4:
      if ($15 == -2) {
        __label__ = 7;
        break;
      } else if ($15 == -1) {
        __label__ = 6;
        break;
      } else if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      $0 = 4;
      __label__ = 10;
      break;
     case 6:
      $0 = 5;
      __label__ = 10;
      break;
     case 7:
      $0 = 6;
      __label__ = 10;
      break;
     case 8:
      
      
      
      
      var $28 = _storeEntityValue($parser_addr, $enc, $s_addr, $end_addr);
      $0 = $28;
      __label__ = 10;
      break;
     case 9:
      
      $start = HEAP[$next];
      
      
      
      var $33 = HEAP[$enc];
      
      
      
      var $37 = FUNCTION_TABLE[$33]($enc, $start, $end_addr, $next);
      $tok = $37;
      
      if ($37 <= 0) {
        __lastLabel__ = 9;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = 9;
        __label__ = 9;
        break;
      }
     case 10:
      
      $retval = $0;
      var $retval11 = $retval;
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _prologProcessor($parser, $s, $end, $nextPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    
    var $parser_addr;
    var $s_addr;
    var $end_addr;
    var $nextPtr_addr;
    var $retval;
    var $0;
    var $next = __stackBase__;
    var $tok;
    $parser_addr = $parser;
    $s_addr = $s;
    $end_addr = $end;
    $nextPtr_addr = $nextPtr;
    
    HEAP[$next] = $s_addr;
    
    
    
    
    
    var $7 = HEAP[HEAP[$parser_addr + 144]];
    
    
    var $10 = HEAP[$parser_addr + 144];
    
    
    var $13 = FUNCTION_TABLE[$7]($10, $s_addr, $end_addr, $next);
    $tok = $13;
    
    
    
    
    
    
    var $20 = HEAP[$next];
    
    
    var $23 = HEAP[$parser_addr + 144];
    
    
    
    
    
    var $29 = HEAP[$parser_addr + 480 + 4] == 0 & 255;
    var $30 = _doProlog($parser_addr, $23, $s_addr, $end_addr, $tok, $20, $nextPtr_addr, $29);
    $0 = $30;
    
    $retval = $0;
    var $retval1 = $retval;
    STACKTOP = __stackBase__;
    return $retval1;
  }
  function _doProlog($parser, $enc, $s, $end, $tok, $next, $nextPtr, $haveMore) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $s_addr;
      var $end_addr;
      var $tok_addr;
      var $next_addr = __stackBase__;
      var $nextPtr_addr;
      var $haveMore_addr;
      var $retval;
      var $iftmp_227;
      var $iftmp_226;
      var $iftmp_217;
      var $iftmp_215;
      var $iftmp_206;
      var $0;
      var $dtd;
      var $eventPP;
      var $eventEndPP;
      var $quant;
      var $role;
      var $handleDefault;
      var $result;
      var $result34;
      var $tem;
      var $hadParamEntityRefs;
      var $entity;
      var $hadParamEntityRefs79;
      var $entity82;
      var $prefix;
      var $attVal;
      var $result144;
      var $result164;
      var $name;
      var $name227;
      var $tem251;
      var $systemId;
      var $result270;
      var $temp;
      var $temp283;
      var $myindex;
      var $name312;
      var $entity313;
      var $result334;
      var $betweenDecl;
      var $content;
      var $el;
      var $name373;
      var $nameLen;
      var $nxt;
      var $myindex374;
      var $model;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $s_addr = $s;
      $end_addr = $end;
      $tok_addr = $tok;
      HEAP[$next_addr] = $next;
      $nextPtr_addr = $nextPtr;
      $haveMore_addr = $haveMore;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      
      
      
      
      var $9 = $parser_addr;
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $eventPP = $9 + 288;
      
      
      $eventEndPP = $parser_addr + 292;
      __label__ = 3;
      break;
     case 2:
      
      
      
      $eventPP = HEAP[$9 + 300];
      
      
      
      
      $eventEndPP = HEAP[$parser_addr + 300] + 4;
      __label__ = 3;
      break;
     case 3:
      $handleDefault = 1;
      
      
      HEAP[$eventPP] = $s_addr;
      var $22 = HEAP[$next_addr];
      
      HEAP[$eventEndPP] = $22;
      
      
      if ($tok_addr <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 4:
      
      
      var $28 = $tok_addr;
      if ($haveMore_addr != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      if ($28 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      HEAP[$nextPtr_addr] = $s_addr;
      $0 = 0;
      __label__ = 380;
      break;
     case 7:
      if ($28 == -15) {
        __label__ = 11;
        break;
      } else if ($28 == -4) {
        __label__ = 12;
        break;
      } else if ($28 == -2) {
        __label__ = 10;
        break;
      } else if ($28 == -1) {
        __label__ = 9;
        break;
      } else if ($28 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 8:
      var $32 = HEAP[$next_addr];
      
      HEAP[$eventPP] = $32;
      $0 = 4;
      __label__ = 380;
      break;
     case 9:
      $0 = 5;
      __label__ = 380;
      break;
     case 10:
      $0 = 6;
      __label__ = 380;
      break;
     case 11:
      
      var $35 = 0 - $tok_addr;
      $tok_addr = $35;
      __label__ = 22;
      break;
     case 12:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] != $enc_addr) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 300] + 20] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      HEAP[$nextPtr_addr] = $s_addr;
      $0 = 0;
      __label__ = 380;
      break;
     case 15:
      
      
      
      
      if (HEAP[$parser_addr + 488] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] != $enc_addr) {
        __label__ = 17;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 17:
      
      
      
      var $61 = HEAP[$parser_addr + 256];
      
      
      
      
      
      var $67 = FUNCTION_TABLE[$61]($parser_addr + 256, -4, $end_addr, $end_addr, $enc_addr);
      var $68 = $67 == -1;
      if ($68) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = 29;
      __label__ = 380;
      break;
     case 19:
      
      
      HEAP[$nextPtr_addr] = $s_addr;
      $0 = 0;
      __label__ = 380;
      break;
     case 20:
      $0 = 3;
      __label__ = 380;
      break;
     case 21:
      
      var $72 = 0 - $tok_addr;
      $tok_addr = $72;
      
      HEAP[$next_addr] = $end_addr;
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $77 = HEAP[$parser_addr + 256];
      var $78 = HEAP[$next_addr];
      
      
      
      
      
      var $84 = FUNCTION_TABLE[$77]($parser_addr + 256, $tok_addr, $s_addr, $78, $enc_addr);
      $role = $84;
      if ($84 == -1) {
        __label__ = 238;
        break;
      } else if ($84 == 0) {
        __label__ = 359;
        break;
      } else if ($84 == 1) {
        __label__ = 23;
        break;
      } else if ($84 == 2) {
        __label__ = 74;
        break;
      } else if ($84 == 3) {
        __label__ = 361;
        break;
      } else if ($84 == 4) {
        __label__ = 26;
        break;
      } else if ($84 == 5) {
        __label__ = 156;
        break;
      } else if ($84 == 6) {
        __label__ = 36;
        break;
      } else if ($84 == 7) {
        __label__ = 31;
        break;
      } else if ($84 == 8) {
        __label__ = 52;
        break;
      } else if ($84 == 9) {
        __label__ = 188;
        break;
      } else if ($84 == 10) {
        __label__ = 204;
        break;
      } else if ($84 == 11) {
        __label__ = 363;
        break;
      } else if ($84 == 12) {
        __label__ = 149;
        break;
      } else if ($84 == 13) {
        __label__ = 170;
        break;
      } else if ($84 == 14) {
        __label__ = 44;
        break;
      } else if ($84 == 15) {
        __label__ = 176;
        break;
      } else if ($84 == 16) {
        __label__ = 180;
        break;
      } else if ($84 == 17) {
        __label__ = 366;
        break;
      } else if ($84 == 18) {
        __label__ = 218;
        break;
      } else if ($84 == 19) {
        __label__ = 228;
        break;
      } else if ($84 == 20) {
        __label__ = 234;
        break;
      } else if ($84 == 21) {
        __label__ = 222;
        break;
      } else if ($84 == 22) {
        __label__ = 90;
        break;
      } else if ($84 == 23) {
        __label__ = 93;
        break;
      } else if ($84 == 24) {
        __label__ = 94;
        break;
      } else if ($84 == 25) {
        __label__ = 95;
        break;
      } else if ($84 == 26) {
        __label__ = 96;
        break;
      } else if ($84 == 27) {
        __label__ = 97;
        break;
      } else if ($84 == 28) {
        __label__ = 98;
        break;
      } else if ($84 == 29) {
        __label__ = 99;
        break;
      } else if ($84 == 30) {
        __label__ = 100;
        break;
      } else if ($84 == 31) {
        __label__ = 104;
        break;
      } else if ($84 == 32) {
        __label__ = 104;
        break;
      } else if ($84 == 33) {
        __label__ = 368;
        break;
      } else if ($84 == 34) {
        __label__ = 88;
        break;
      } else if ($84 == 35) {
        __label__ = 117;
        break;
      } else if ($84 == 36) {
        __label__ = 117;
        break;
      } else if ($84 == 37) {
        __label__ = 132;
        break;
      } else if ($84 == 38) {
        __label__ = 132;
        break;
      } else if ($84 == 39) {
        __label__ = 371;
        break;
      } else if ($84 == 40) {
        __label__ = 308;
        break;
      } else if ($84 == 41) {
        __label__ = 312;
        break;
      } else if ($84 == 42) {
        __label__ = 312;
        break;
      } else if ($84 == 43) {
        __label__ = 321;
        break;
      } else if ($84 == 44) {
        __label__ = 248;
        break;
      } else if ($84 == 45) {
        __label__ = 340;
        break;
      } else if ($84 == 46) {
        __label__ = 342;
        break;
      } else if ($84 == 47) {
        __label__ = 341;
        break;
      } else if ($84 == 48) {
        __label__ = 343;
        break;
      } else if ($84 == 49) {
        __label__ = 268;
        break;
      } else if ($84 == 50) {
        __label__ = 263;
        break;
      } else if ($84 == 51) {
        __label__ = 324;
        break;
      } else if ($84 == 52) {
        __label__ = 326;
        break;
      } else if ($84 == 53) {
        __label__ = 325;
        break;
      } else if ($84 == 54) {
        __label__ = 327;
        break;
      } else if ($84 == 55) {
        __label__ = 353;
        break;
      } else if ($84 == 56) {
        __label__ = 356;
        break;
      } else if ($84 == 57) {
        __label__ = 33;
        break;
      } else if ($84 == 58) {
        __label__ = 242;
        break;
      } else if ($84 == 59) {
        __label__ = 276;
        break;
      } else if ($84 == 60) {
        __label__ = 276;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 23:
      var $85 = HEAP[$next_addr];
      
      
      var $88 = _processXmlDecl($parser_addr, 0, $s_addr, $85);
      $result = $88;
      
      
      if ($result != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      $0 = $result;
      __label__ = 380;
      break;
     case 25:
      
      
      
      $enc_addr = HEAP[$parser_addr + 144];
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 26:
      
      
      
      
      if (HEAP[$parser_addr + 84] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      var $99 = HEAP[$next_addr];
      
      
      
      
      var $104 = _poolStoreString($parser_addr + 416, $enc_addr, $s_addr, $99);
      
      
      HEAP[$parser_addr + 320] = $104;
      
      
      
      
      if (HEAP[$parser_addr + 320] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $0 = 1;
      __label__ = 380;
      break;
     case 29:
      
      
      
      var $114 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $114;
      
      
      HEAP[$parser_addr + 328] = 0;
      $handleDefault = 0;
      __label__ = 30;
      break;
     case 30:
      
      
      HEAP[$parser_addr + 324] = 0;
      __label__ = 373;
      break;
     case 31:
      
      
      
      
      if (HEAP[$parser_addr + 84] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 32:
      
      
      var $128 = HEAP[$parser_addr + 84];
      
      
      var $131 = HEAP[$parser_addr + 328];
      
      
      var $134 = HEAP[$parser_addr + 324];
      
      
      var $137 = HEAP[$parser_addr + 320];
      
      
      var $140 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$128]($140, $137, $134, $131, 1);
      
      
      HEAP[$parser_addr + 320] = 0;
      
      
      _poolClear($parser_addr + 416);
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 33:
      var $145 = HEAP[$next_addr];
      
      
      var $148 = _processXmlDecl($parser_addr, 1, $s_addr, $145);
      $result34 = $148;
      
      
      if ($result34 != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      $0 = $result34;
      __label__ = 380;
      break;
     case 35:
      
      
      
      $enc_addr = HEAP[$parser_addr + 144];
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 36:
      
      
      HEAP[$parser_addr + 489] = 0;
      
      
      var $159 = _lookup($dtd + 132, _externalSubsetName_6003, 36);
      
      
      
      HEAP[$parser_addr + 316] = $159;
      
      
      
      
      if (HEAP[$parser_addr + 316] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      $0 = 1;
      __label__ = 380;
      break;
     case 38:
      
      
      HEAP[$dtd + 129] = 1;
      
      
      
      
      if (HEAP[$parser_addr + 84] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 39:
      
      
      var $175 = HEAP[$enc_addr + 56];
      var $176 = HEAP[$next_addr];
      
      
      
      var $180 = FUNCTION_TABLE[$175]($enc_addr, $s_addr, $176, $eventPP);
      
      if ($180 == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      $0 = 32;
      __label__ = 380;
      break;
     case 41:
      
      
      
      
      
      var $187 = HEAP[$next_addr] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $192 = $s_addr + HEAP[$enc_addr + 68];
      
      
      
      var $196 = _poolStoreString($parser_addr + 416, $enc_addr, $192, $187);
      
      
      HEAP[$parser_addr + 328] = $196;
      
      
      
      
      if (HEAP[$parser_addr + 328] == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      $0 = 1;
      __label__ = 380;
      break;
     case 43:
      
      
      var $205 = HEAP[$parser_addr + 328];
      _normalizePublicId($205);
      
      
      
      var $209 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $209;
      $handleDefault = 0;
      __label__ = 46;
      break;
     case 44:
      
      
      var $215 = HEAP[$enc_addr + 56];
      var $216 = HEAP[$next_addr];
      
      
      
      var $220 = FUNCTION_TABLE[$215]($enc_addr, $s_addr, $216, $eventPP);
      
      if ($220 == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      $0 = 32;
      __label__ = 380;
      break;
     case 46:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 47:
      
      
      
      
      if (HEAP[$parser_addr + 316] != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 48:
      
      
      
      
      
      var $235 = HEAP[$next_addr] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $240 = $s_addr + HEAP[$enc_addr + 68];
      
      
      
      var $244 = _poolStoreString($dtd + 80, $enc_addr, $240, $235);
      $tem = $244;
      
      
      if ($tem == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      $0 = 1;
      __label__ = 380;
      break;
     case 50:
      
      _normalizePublicId($tem);
      
      
      
      var $251 = HEAP[$parser_addr + 316] + 24;
      
      HEAP[$251] = $tem;
      
      
      
      var $256 = HEAP[$dtd + 80 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $256;
      
      
      
      
      if (HEAP[$parser_addr + 136] != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 51:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 52:
      
      
      
      
      if (HEAP[$parser_addr + 320] != 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      var $270 = HEAP[$parser_addr + 84];
      
      
      var $273 = HEAP[$parser_addr + 328];
      
      
      var $276 = HEAP[$parser_addr + 324];
      
      
      var $279 = HEAP[$parser_addr + 320];
      
      
      var $282 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$270]($282, $279, $276, $273, 0);
      
      
      _poolClear($parser_addr + 416);
      $handleDefault = 0;
      __label__ = 54;
      break;
     case 54:
      
      
      
      
      if (HEAP[$parser_addr + 324] != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      
      
      if (HEAP[$parser_addr + 489] != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 56:
      
      
      
      $hadParamEntityRefs = HEAP[$dtd + 129];
      
      
      HEAP[$dtd + 129] = 1;
      
      
      
      
      if (HEAP[$parser_addr + 492] != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 57:
      
      
      
      
      if (HEAP[$parser_addr + 112] != 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 58:
      
      
      var $308 = _lookup($dtd + 132, _externalSubsetName_6003, 36);
      
      $entity = $308;
      
      
      if ($entity == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      $0 = 1;
      __label__ = 380;
      break;
     case 60:
      
      
      
      
      if (HEAP[$parser_addr + 489] != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      
      var $318 = HEAP[$parser_addr + 360];
      
      
      HEAP[$entity + 20] = $318;
      __label__ = 62;
      break;
     case 62:
      
      
      HEAP[$dtd + 131] = 0;
      
      
      var $325 = HEAP[$parser_addr + 112];
      
      
      var $328 = HEAP[$entity + 24];
      
      
      var $331 = HEAP[$entity + 16];
      
      
      var $334 = HEAP[$entity + 20];
      
      
      var $337 = HEAP[$parser_addr + 116];
      var $338 = FUNCTION_TABLE[$325]($337, 0, $334, $331, $328);
      
      if ($338 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      $0 = 21;
      __label__ = 380;
      break;
     case 64:
      
      
      
      
      if (HEAP[$dtd + 131] != 0) {
        __label__ = 65;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 65:
      
      
      
      
      if (HEAP[$dtd + 130] == 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 66:
      
      
      
      
      if (HEAP[$parser_addr + 108] != 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 67:
      
      
      var $354 = HEAP[$parser_addr + 108];
      
      
      var $357 = HEAP[$parser_addr + 4];
      var $358 = FUNCTION_TABLE[$354]($357);
      
      if ($358 == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 68:
      $0 = 22;
      __label__ = 380;
      break;
     case 69:
      
      
      
      
      if (HEAP[$parser_addr + 324] == 0) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      
      
      
      HEAP[$dtd + 129] = $hadParamEntityRefs;
      __label__ = 71;
      break;
     case 71:
      
      
      HEAP[$parser_addr + 489] = 0;
      __label__ = 72;
      break;
     case 72:
      
      
      
      
      if (HEAP[$parser_addr + 88] != 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 73:
      
      
      var $375 = HEAP[$parser_addr + 88];
      
      
      var $378 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$375]($378);
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 74:
      
      
      
      
      if (HEAP[$parser_addr + 489] != 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 75:
      
      
      
      $hadParamEntityRefs79 = HEAP[$dtd + 129];
      
      
      HEAP[$dtd + 129] = 1;
      
      
      
      
      if (HEAP[$parser_addr + 492] != 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 76:
      
      
      
      
      if (HEAP[$parser_addr + 112] != 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 77:
      
      
      var $398 = _lookup($dtd + 132, _externalSubsetName_6003, 36);
      
      $entity82 = $398;
      
      
      if ($entity82 == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      $0 = 1;
      __label__ = 380;
      break;
     case 79:
      
      
      var $404 = HEAP[$parser_addr + 360];
      
      
      HEAP[$entity82 + 20] = $404;
      
      
      HEAP[$dtd + 131] = 0;
      
      
      var $411 = HEAP[$parser_addr + 112];
      
      
      var $414 = HEAP[$entity82 + 24];
      
      
      var $417 = HEAP[$entity82 + 16];
      
      
      var $420 = HEAP[$entity82 + 20];
      
      
      var $423 = HEAP[$parser_addr + 116];
      var $424 = FUNCTION_TABLE[$411]($423, 0, $420, $417, $414);
      
      if ($424 == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      $0 = 21;
      __label__ = 380;
      break;
     case 81:
      
      
      
      
      var $430 = $dtd;
      if (HEAP[$dtd + 131] != 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 82:
      
      
      
      if (HEAP[$430 + 130] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 83:
      
      
      
      
      if (HEAP[$parser_addr + 108] != 0) {
        __label__ = 84;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 84:
      
      
      var $440 = HEAP[$parser_addr + 108];
      
      
      var $443 = HEAP[$parser_addr + 4];
      var $444 = FUNCTION_TABLE[$440]($443);
      
      if ($444 == 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 85:
      $0 = 22;
      __label__ = 380;
      break;
     case 86:
      
      
      HEAP[$430 + 129] = $hadParamEntityRefs79;
      __label__ = 87;
      break;
     case 87:
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 64;
      
      
      
      
      var $454 = _contentProcessor($parser_addr, $s_addr, $end_addr, $nextPtr_addr);
      $0 = $454;
      __label__ = 380;
      break;
     case 88:
      var $455 = HEAP[$next_addr];
      
      
      
      var $459 = _getElementType($parser_addr, $enc_addr, $s_addr, $455);
      
      
      HEAP[$parser_addr + 344] = $459;
      
      
      
      
      if (HEAP[$parser_addr + 344] == 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 89:
      $0 = 1;
      __label__ = 380;
      break;
     case 90:
      var $466 = HEAP[$next_addr];
      
      
      
      var $470 = _getAttributeId($parser_addr, $enc_addr, $s_addr, $466);
      
      
      HEAP[$parser_addr + 348] = $470;
      
      
      
      
      if (HEAP[$parser_addr + 348] == 0) {
        __label__ = 91;
        break;
      } else {
        __label__ = 92;
        break;
      }
     case 91:
      $0 = 1;
      __label__ = 380;
      break;
     case 92:
      
      
      HEAP[$parser_addr + 352] = 0;
      
      
      HEAP[$parser_addr + 332] = 0;
      
      
      HEAP[$parser_addr + 353] = 0;
      __label__ = 101;
      break;
     case 93:
      
      
      HEAP[$parser_addr + 352] = 1;
      
      
      HEAP[$parser_addr + 332] = _atypeCDATA_6004;
      __label__ = 101;
      break;
     case 94:
      
      
      HEAP[$parser_addr + 353] = 1;
      
      
      HEAP[$parser_addr + 332] = _atypeID_6005;
      __label__ = 101;
      break;
     case 95:
      
      
      HEAP[$parser_addr + 332] = _atypeIDREF_6006;
      __label__ = 101;
      break;
     case 96:
      
      
      HEAP[$parser_addr + 332] = _atypeIDREFS_6007;
      __label__ = 101;
      break;
     case 97:
      
      
      HEAP[$parser_addr + 332] = _atypeENTITY_6008;
      __label__ = 101;
      break;
     case 98:
      
      
      HEAP[$parser_addr + 332] = _atypeENTITIES_6009;
      __label__ = 101;
      break;
     case 99:
      
      
      HEAP[$parser_addr + 332] = _atypeNMTOKEN_6010;
      __label__ = 101;
      break;
     case 100:
      
      
      HEAP[$parser_addr + 332] = _atypeNMTOKENS_6011;
      __label__ = 101;
      break;
     case 101:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 102;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 102:
      
      
      
      
      if (HEAP[$parser_addr + 132] != 0) {
        __label__ = 103;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 103:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 104:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 105;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 105:
      
      
      
      
      if (HEAP[$parser_addr + 132] != 0) {
        __label__ = 106;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 106:
      
      
      
      
      if (HEAP[$parser_addr + 332] != 0) {
        __label__ = 107;
        break;
      } else {
        __label__ = 108;
        break;
      }
     case 107:
      $prefix = _enumValueSep_6013;
      __label__ = 112;
      break;
     case 108:
      
      
      if ($role == 32) {
        __label__ = 109;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 109:
      $iftmp_206 = _notationPrefix_6012;
      __label__ = 111;
      break;
     case 110:
      $iftmp_206 = _enumValueStart_6014;
      __label__ = 111;
      break;
     case 111:
      
      $prefix = $iftmp_206;
      __label__ = 112;
      break;
     case 112:
      
      
      
      var $529 = _poolAppendString($parser_addr + 416, $prefix);
      
      if ($529 == 0) {
        __label__ = 113;
        break;
      } else {
        __label__ = 114;
        break;
      }
     case 113:
      $0 = 1;
      __label__ = 380;
      break;
     case 114:
      var $531 = HEAP[$next_addr];
      
      
      
      
      var $536 = _poolAppend($parser_addr + 416, $enc_addr, $s_addr, $531);
      
      if ($536 == 0) {
        __label__ = 115;
        break;
      } else {
        __label__ = 116;
        break;
      }
     case 115:
      $0 = 1;
      __label__ = 380;
      break;
     case 116:
      
      
      
      var $541 = HEAP[$parser_addr + 416 + 16];
      
      
      HEAP[$parser_addr + 332] = $541;
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 117:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 118;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 118:
      
      
      
      
      
      
      
      
      
      
      var $558 = HEAP[$parser_addr + 348];
      
      
      var $561 = HEAP[$parser_addr + 344];
      var $562 = HEAP[$parser_addr + 352] & 255;
      var $563 = HEAP[$parser_addr + 353] & 255;
      
      var $565 = _defineAttribute($561, $558, $562, $563, 0, $parser_addr);
      
      if ($565 == 0) {
        __label__ = 119;
        break;
      } else {
        __label__ = 120;
        break;
      }
     case 119:
      $0 = 1;
      __label__ = 380;
      break;
     case 120:
      
      
      
      
      if (HEAP[$parser_addr + 132] != 0) {
        __label__ = 121;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 121:
      
      
      
      
      if (HEAP[$parser_addr + 332] != 0) {
        __label__ = 122;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 122:
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 332]] == 40) {
        __label__ = 125;
        break;
      } else {
        __label__ = 123;
        break;
      }
     case 123:
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 332]] != 78) {
        __label__ = 131;
        break;
      } else {
        __label__ = 124;
        break;
      }
     case 124:
      
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 332] + 1] == 79) {
        __label__ = 125;
        break;
      } else {
        __label__ = 131;
        break;
      }
     case 125:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 127;
        break;
      } else {
        __label__ = 126;
        break;
      }
     case 126:
      
      
      var $602 = _poolGrow($parser_addr + 416);
      
      if ($602 != 0) {
        __label__ = 127;
        break;
      } else {
        __label__ = 130;
        break;
      }
     case 127:
      
      
      
      var $607 = HEAP[$parser_addr + 416 + 12];
      HEAP[$607] = 41;
      var $608 = $607 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $608;
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 129;
        break;
      } else {
        __label__ = 128;
        break;
      }
     case 128:
      
      
      var $623 = _poolGrow($parser_addr + 416);
      
      if ($623 != 0) {
        __label__ = 129;
        break;
      } else {
        __label__ = 130;
        break;
      }
     case 129:
      
      
      
      var $628 = HEAP[$parser_addr + 416 + 12];
      HEAP[$628] = 0;
      var $629 = $628 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $629;
      
      
      
      var $636 = HEAP[$parser_addr + 416 + 16];
      
      
      HEAP[$parser_addr + 332] = $636;
      
      
      
      var $642 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $642;
      __label__ = 131;
      break;
     case 130:
      $0 = 1;
      __label__ = 380;
      break;
     case 131:
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $650 = HEAP[$parser_addr + 132];
      
      
      
      
      
      var $656 = HEAP[$parser_addr + 332];
      
      
      
      
      var $661 = HEAP[HEAP[$parser_addr + 348]];
      
      
      
      
      var $666 = HEAP[HEAP[$parser_addr + 344]];
      
      
      var $669 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$650]($669, $666, $661, $656, 0, $role == 36);
      
      
      _poolClear($parser_addr + 416);
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 132:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 133;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 133:
      
      
      
      
      
      
      
      var $683 = HEAP[$next_addr] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $688 = $s_addr + HEAP[$enc_addr + 68];
      
      
      
      
      
      
      var $695 = HEAP[$parser_addr + 352] & 255;
      var $696 = _storeAttributeValue($parser_addr, $enc_addr, $695, $688, $683, $dtd + 80);
      $result144 = $696;
      
      
      if ($result144 != 0) {
        __label__ = 134;
        break;
      } else {
        __label__ = 135;
        break;
      }
     case 134:
      
      $0 = $result144;
      __label__ = 380;
      break;
     case 135:
      
      
      
      
      $attVal = HEAP[$dtd + 80 + 16];
      
      
      
      var $707 = HEAP[$dtd + 80 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $707;
      
      
      
      
      
      
      var $717 = HEAP[$parser_addr + 348];
      
      
      var $720 = HEAP[$parser_addr + 344];
      var $721 = HEAP[$parser_addr + 352] & 255;
      
      
      var $724 = _defineAttribute($720, $717, $721, 0, $attVal, $parser_addr);
      
      if ($724 == 0) {
        __label__ = 136;
        break;
      } else {
        __label__ = 137;
        break;
      }
     case 136:
      $0 = 1;
      __label__ = 380;
      break;
     case 137:
      
      
      
      
      if (HEAP[$parser_addr + 132] != 0) {
        __label__ = 138;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 138:
      
      
      
      
      if (HEAP[$parser_addr + 332] != 0) {
        __label__ = 139;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 139:
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 332]] == 40) {
        __label__ = 142;
        break;
      } else {
        __label__ = 140;
        break;
      }
     case 140:
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 332]] != 78) {
        __label__ = 148;
        break;
      } else {
        __label__ = 141;
        break;
      }
     case 141:
      
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 332] + 1] == 79) {
        __label__ = 142;
        break;
      } else {
        __label__ = 148;
        break;
      }
     case 142:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 144;
        break;
      } else {
        __label__ = 143;
        break;
      }
     case 143:
      
      
      var $761 = _poolGrow($parser_addr + 416);
      
      if ($761 != 0) {
        __label__ = 144;
        break;
      } else {
        __label__ = 147;
        break;
      }
     case 144:
      
      
      
      var $766 = HEAP[$parser_addr + 416 + 12];
      HEAP[$766] = 41;
      var $767 = $766 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $767;
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 146;
        break;
      } else {
        __label__ = 145;
        break;
      }
     case 145:
      
      
      var $782 = _poolGrow($parser_addr + 416);
      
      if ($782 != 0) {
        __label__ = 146;
        break;
      } else {
        __label__ = 147;
        break;
      }
     case 146:
      
      
      
      var $787 = HEAP[$parser_addr + 416 + 12];
      HEAP[$787] = 0;
      var $788 = $787 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $788;
      
      
      
      var $795 = HEAP[$parser_addr + 416 + 16];
      
      
      HEAP[$parser_addr + 332] = $795;
      
      
      
      var $801 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $801;
      __label__ = 148;
      break;
     case 147:
      $0 = 1;
      __label__ = 380;
      break;
     case 148:
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $809 = HEAP[$parser_addr + 132];
      
      
      
      
      
      var $815 = HEAP[$parser_addr + 332];
      
      
      
      
      var $820 = HEAP[HEAP[$parser_addr + 348]];
      
      
      
      
      var $825 = HEAP[HEAP[$parser_addr + 344]];
      
      
      var $828 = HEAP[$parser_addr + 4];
      
      FUNCTION_TABLE[$809]($828, $825, $820, $815, $attVal, $role == 38);
      
      
      _poolClear($parser_addr + 416);
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 149:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 150;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 150:
      
      
      
      
      
      var $841 = HEAP[$next_addr] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $846 = $s_addr + HEAP[$enc_addr + 68];
      
      
      var $849 = _storeEntityValue($parser_addr, $enc_addr, $846, $841);
      $result164 = $849;
      
      
      
      
      if (HEAP[$parser_addr + 316] != 0) {
        __label__ = 151;
        break;
      } else {
        __label__ = 153;
        break;
      }
     case 151:
      
      
      
      
      
      
      var $860 = HEAP[$dtd + 104 + 16];
      var $861 = HEAP[$parser_addr + 316] + 4;
      HEAP[$861] = $860;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $875 = HEAP[$dtd + 104 + 12] - HEAP[$dtd + 104 + 16];
      var $876 = HEAP[$parser_addr + 316] + 8;
      HEAP[$876] = $875;
      
      
      
      var $880 = HEAP[$dtd + 104 + 12];
      
      
      
      HEAP[$dtd + 104 + 16] = $880;
      
      
      
      
      if (HEAP[$parser_addr + 136] != 0) {
        __label__ = 152;
        break;
      } else {
        __label__ = 154;
        break;
      }
     case 152:
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $892 = HEAP[$parser_addr + 136];
      
      
      var $895 = HEAP[$parser_addr + 360];
      
      
      
      
      var $900 = HEAP[HEAP[$parser_addr + 316] + 8];
      
      
      
      
      var $905 = HEAP[HEAP[$parser_addr + 316] + 4];
      
      
      
      
      
      var $911 = HEAP[HEAP[$parser_addr + 316] + 33];
      
      
      
      
      var $916 = HEAP[HEAP[$parser_addr + 316]];
      
      
      var $919 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$892]($919, $916, $911, $905, $900, $895, 0, 0, 0);
      $handleDefault = 0;
      __label__ = 154;
      break;
     case 153:
      
      
      
      var $923 = HEAP[$dtd + 104 + 16];
      
      
      
      HEAP[$dtd + 104 + 12] = $923;
      __label__ = 154;
      break;
     case 154:
      
      
      if ($result164 != 0) {
        __label__ = 155;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 155:
      
      $0 = $result164;
      __label__ = 380;
      break;
     case 156:
      
      
      HEAP[$parser_addr + 489] = 0;
      
      
      HEAP[$dtd + 129] = 1;
      
      
      
      
      if (HEAP[$parser_addr + 84] != 0) {
        __label__ = 157;
        break;
      } else {
        __label__ = 160;
        break;
      }
     case 157:
      
      
      
      
      
      var $943 = HEAP[$next_addr] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $948 = $s_addr + HEAP[$enc_addr + 68];
      
      
      
      var $952 = _poolStoreString($parser_addr + 416, $enc_addr, $948, $943);
      
      
      HEAP[$parser_addr + 324] = $952;
      
      
      
      
      if (HEAP[$parser_addr + 324] == 0) {
        __label__ = 158;
        break;
      } else {
        __label__ = 159;
        break;
      }
     case 158:
      $0 = 1;
      __label__ = 380;
      break;
     case 159:
      
      
      
      var $962 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $962;
      $handleDefault = 0;
      __label__ = 161;
      break;
     case 160:
      
      
      HEAP[$parser_addr + 324] = _externalSubsetName_6003;
      __label__ = 161;
      break;
     case 161:
      
      
      
      
      if (HEAP[$dtd + 130] == 0) {
        __label__ = 162;
        break;
      } else {
        __label__ = 166;
        break;
      }
     case 162:
      
      
      
      
      if (HEAP[$parser_addr + 492] == 0) {
        __label__ = 163;
        break;
      } else {
        __label__ = 166;
        break;
      }
     case 163:
      
      
      
      
      if (HEAP[$parser_addr + 108] != 0) {
        __label__ = 164;
        break;
      } else {
        __label__ = 166;
        break;
      }
     case 164:
      
      
      var $982 = HEAP[$parser_addr + 108];
      
      
      var $985 = HEAP[$parser_addr + 4];
      var $986 = FUNCTION_TABLE[$982]($985);
      
      if ($986 == 0) {
        __label__ = 165;
        break;
      } else {
        __label__ = 166;
        break;
      }
     case 165:
      $0 = 22;
      __label__ = 380;
      break;
     case 166:
      
      
      
      
      if (HEAP[$parser_addr + 316] == 0) {
        __label__ = 167;
        break;
      } else {
        __label__ = 170;
        break;
      }
     case 167:
      
      
      var $994 = _lookup($dtd + 132, _externalSubsetName_6003, 36);
      
      
      
      HEAP[$parser_addr + 316] = $994;
      
      
      
      
      if (HEAP[$parser_addr + 316] == 0) {
        __label__ = 168;
        break;
      } else {
        __label__ = 169;
        break;
      }
     case 168:
      $0 = 1;
      __label__ = 380;
      break;
     case 169:
      
      
      
      var $1005 = HEAP[$parser_addr + 316] + 24;
      HEAP[$1005] = 0;
      __label__ = 170;
      break;
     case 170:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 171;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 171:
      
      
      
      
      if (HEAP[$parser_addr + 316] != 0) {
        __label__ = 172;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 172:
      
      
      var $1016 = HEAP[$parser_addr + 316];
      
      
      
      
      
      var $1022 = HEAP[$next_addr] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $1027 = $s_addr + HEAP[$enc_addr + 68];
      
      
      
      var $1031 = _poolStoreString($dtd + 80, $enc_addr, $1027, $1022);
      var $1032 = $1016 + 16;
      HEAP[$1032] = $1031;
      
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 316] + 16] == 0) {
        __label__ = 173;
        break;
      } else {
        __label__ = 174;
        break;
      }
     case 173:
      $0 = 1;
      __label__ = 380;
      break;
     case 174:
      
      
      
      
      
      var $1044 = HEAP[$parser_addr + 360];
      var $1045 = HEAP[$parser_addr + 316] + 20;
      HEAP[$1045] = $1044;
      
      
      
      var $1049 = HEAP[$dtd + 80 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $1049;
      
      
      
      
      if (HEAP[$parser_addr + 136] != 0) {
        __label__ = 175;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 175:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 176:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 177;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 177:
      
      
      
      
      if (HEAP[$parser_addr + 316] != 0) {
        __label__ = 178;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 178:
      
      
      
      
      if (HEAP[$parser_addr + 136] != 0) {
        __label__ = 179;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 179:
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $1073 = HEAP[$parser_addr + 136];
      
      
      
      
      var $1078 = HEAP[HEAP[$parser_addr + 316] + 24];
      
      
      
      
      var $1083 = HEAP[HEAP[$parser_addr + 316] + 16];
      
      
      
      
      var $1088 = HEAP[HEAP[$parser_addr + 316] + 20];
      
      
      
      
      
      var $1094 = HEAP[HEAP[$parser_addr + 316] + 33];
      
      
      
      
      var $1099 = HEAP[HEAP[$parser_addr + 316]];
      
      
      var $1102 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$1073]($1102, $1099, $1094, 0, 0, $1088, $1083, $1078, 0);
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 180:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 181;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 181:
      
      
      
      
      if (HEAP[$parser_addr + 316] != 0) {
        __label__ = 182;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 182:
      
      
      var $1113 = HEAP[$parser_addr + 316];
      var $1114 = HEAP[$next_addr];
      
      
      
      
      var $1119 = _poolStoreString($dtd + 80, $enc_addr, $s_addr, $1114);
      var $1120 = $1113 + 28;
      HEAP[$1120] = $1119;
      
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 316] + 28] == 0) {
        __label__ = 183;
        break;
      } else {
        __label__ = 184;
        break;
      }
     case 183:
      $0 = 1;
      __label__ = 380;
      break;
     case 184:
      
      
      
      var $1130 = HEAP[$dtd + 80 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $1130;
      
      
      
      
      if (HEAP[$parser_addr + 92] != 0) {
        __label__ = 185;
        break;
      } else {
        __label__ = 186;
        break;
      }
     case 185:
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $1142 = HEAP[$parser_addr + 92];
      
      
      
      
      var $1147 = HEAP[HEAP[$parser_addr + 316] + 28];
      
      
      
      
      var $1152 = HEAP[HEAP[$parser_addr + 316] + 24];
      
      
      
      
      var $1157 = HEAP[HEAP[$parser_addr + 316] + 16];
      
      
      
      
      var $1162 = HEAP[HEAP[$parser_addr + 316] + 20];
      
      
      
      
      var $1167 = HEAP[HEAP[$parser_addr + 316]];
      
      
      var $1170 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$1142]($1170, $1167, $1162, $1157, $1152, $1147);
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 186:
      
      
      
      
      if (HEAP[$parser_addr + 136] != 0) {
        __label__ = 187;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 187:
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $1179 = HEAP[$parser_addr + 136];
      
      
      
      
      var $1184 = HEAP[HEAP[$parser_addr + 316] + 28];
      
      
      
      
      var $1189 = HEAP[HEAP[$parser_addr + 316] + 24];
      
      
      
      
      var $1194 = HEAP[HEAP[$parser_addr + 316] + 16];
      
      
      
      
      var $1199 = HEAP[HEAP[$parser_addr + 316] + 20];
      
      
      
      
      var $1204 = HEAP[HEAP[$parser_addr + 316]];
      
      
      var $1207 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$1179]($1207, $1204, 0, 0, 0, $1199, $1194, $1189, $1184);
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 188:
      
      
      var $1210 = HEAP[$enc_addr + 48];
      var $1211 = HEAP[$next_addr];
      
      
      var $1214 = FUNCTION_TABLE[$1210]($enc_addr, $s_addr, $1211);
      
      if ($1214 != 0) {
        __label__ = 189;
        break;
      } else {
        __label__ = 190;
        break;
      }
     case 189:
      
      
      HEAP[$parser_addr + 316] = 0;
      __label__ = 373;
      break;
     case 190:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 191;
        break;
      } else {
        __label__ = 203;
        break;
      }
     case 191:
      var $1222 = HEAP[$next_addr];
      
      
      
      
      var $1227 = _poolStoreString($dtd + 80, $enc_addr, $s_addr, $1222);
      $name = $1227;
      
      
      if ($name == 0) {
        __label__ = 192;
        break;
      } else {
        __label__ = 193;
        break;
      }
     case 192:
      $0 = 1;
      __label__ = 380;
      break;
     case 193:
      
      
      
      var $1233 = _lookup($dtd, $name, 36);
      
      
      
      HEAP[$parser_addr + 316] = $1233;
      
      
      
      
      if (HEAP[$parser_addr + 316] == 0) {
        __label__ = 194;
        break;
      } else {
        __label__ = 195;
        break;
      }
     case 194:
      $0 = 1;
      __label__ = 380;
      break;
     case 195:
      
      
      
      
      
      
      
      
      var $1249 = $dtd + 80;
      if (HEAP[HEAP[$parser_addr + 316]] != $name) {
        __label__ = 196;
        break;
      } else {
        __label__ = 197;
        break;
      }
     case 196:
      
      var $1251 = HEAP[$1249 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $1251;
      
      
      HEAP[$parser_addr + 316] = 0;
      __label__ = 373;
      break;
     case 197:
      
      var $1258 = HEAP[$1249 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $1258;
      
      
      
      var $1265 = HEAP[$parser_addr + 316] + 24;
      HEAP[$1265] = 0;
      
      
      
      var $1269 = HEAP[$parser_addr + 316] + 33;
      HEAP[$1269] = 0;
      
      
      var $1272 = HEAP[$parser_addr + 316];
      
      
      
      
      if (HEAP[$parser_addr + 476] != 0) {
        __label__ = 200;
        break;
      } else {
        __label__ = 198;
        break;
      }
     case 198:
      
      
      
      
      if (HEAP[$parser_addr + 300] != 0) {
        __label__ = 200;
        break;
      } else {
        __label__ = 199;
        break;
      }
     case 199:
      $iftmp_215 = 1;
      __label__ = 201;
      break;
     case 200:
      $iftmp_215 = 0;
      __label__ = 201;
      break;
     case 201:
      
      
      var $1283 = $1272 + 34;
      HEAP[$1283] = $iftmp_215 & 255;
      
      
      
      
      if (HEAP[$parser_addr + 136] != 0) {
        __label__ = 202;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 202:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 203:
      
      
      
      var $1291 = HEAP[$dtd + 80 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $1291;
      
      
      HEAP[$parser_addr + 316] = 0;
      __label__ = 373;
      break;
     case 204:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 205;
        break;
      } else {
        __label__ = 217;
        break;
      }
     case 205:
      var $1301 = HEAP[$next_addr];
      
      
      
      
      var $1306 = _poolStoreString($dtd + 80, $enc_addr, $s_addr, $1301);
      $name227 = $1306;
      
      
      if ($name227 == 0) {
        __label__ = 206;
        break;
      } else {
        __label__ = 207;
        break;
      }
     case 206:
      $0 = 1;
      __label__ = 380;
      break;
     case 207:
      
      
      
      var $1312 = _lookup($dtd + 132, $name227, 36);
      
      
      
      HEAP[$parser_addr + 316] = $1312;
      
      
      
      
      if (HEAP[$parser_addr + 316] == 0) {
        __label__ = 208;
        break;
      } else {
        __label__ = 209;
        break;
      }
     case 208:
      $0 = 1;
      __label__ = 380;
      break;
     case 209:
      
      
      
      
      
      
      
      
      var $1328 = $dtd + 80;
      if (HEAP[HEAP[$parser_addr + 316]] != $name227) {
        __label__ = 210;
        break;
      } else {
        __label__ = 211;
        break;
      }
     case 210:
      
      var $1330 = HEAP[$1328 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $1330;
      
      
      HEAP[$parser_addr + 316] = 0;
      __label__ = 373;
      break;
     case 211:
      
      var $1337 = HEAP[$1328 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $1337;
      
      
      
      var $1344 = HEAP[$parser_addr + 316] + 24;
      HEAP[$1344] = 0;
      
      
      
      var $1348 = HEAP[$parser_addr + 316] + 33;
      HEAP[$1348] = 1;
      
      
      var $1351 = HEAP[$parser_addr + 316];
      
      
      
      
      if (HEAP[$parser_addr + 476] != 0) {
        __label__ = 214;
        break;
      } else {
        __label__ = 212;
        break;
      }
     case 212:
      
      
      
      
      if (HEAP[$parser_addr + 300] != 0) {
        __label__ = 214;
        break;
      } else {
        __label__ = 213;
        break;
      }
     case 213:
      $iftmp_217 = 1;
      __label__ = 215;
      break;
     case 214:
      $iftmp_217 = 0;
      __label__ = 215;
      break;
     case 215:
      
      
      var $1362 = $1351 + 34;
      HEAP[$1362] = $iftmp_217 & 255;
      
      
      
      
      if (HEAP[$parser_addr + 136] != 0) {
        __label__ = 216;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 216:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 217:
      
      
      
      var $1370 = HEAP[$dtd + 80 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $1370;
      
      
      HEAP[$parser_addr + 316] = 0;
      __label__ = 373;
      break;
     case 218:
      
      
      HEAP[$parser_addr + 340] = 0;
      
      
      HEAP[$parser_addr + 336] = 0;
      
      
      
      
      if (HEAP[$parser_addr + 96] != 0) {
        __label__ = 219;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 219:
      var $1384 = HEAP[$next_addr];
      
      
      
      
      var $1389 = _poolStoreString($parser_addr + 416, $enc_addr, $s_addr, $1384);
      
      
      HEAP[$parser_addr + 336] = $1389;
      
      
      
      
      if (HEAP[$parser_addr + 336] == 0) {
        __label__ = 220;
        break;
      } else {
        __label__ = 221;
        break;
      }
     case 220:
      $0 = 1;
      __label__ = 380;
      break;
     case 221:
      
      
      
      var $1399 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $1399;
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 222:
      
      
      var $1405 = HEAP[$enc_addr + 56];
      var $1406 = HEAP[$next_addr];
      
      
      
      var $1410 = FUNCTION_TABLE[$1405]($enc_addr, $s_addr, $1406, $eventPP);
      
      if ($1410 == 0) {
        __label__ = 223;
        break;
      } else {
        __label__ = 224;
        break;
      }
     case 223:
      $0 = 32;
      __label__ = 380;
      break;
     case 224:
      
      
      
      
      if (HEAP[$parser_addr + 336] != 0) {
        __label__ = 225;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 225:
      
      
      
      
      
      var $1421 = HEAP[$next_addr] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $1426 = $s_addr + HEAP[$enc_addr + 68];
      
      
      
      var $1430 = _poolStoreString($parser_addr + 416, $enc_addr, $1426, $1421);
      $tem251 = $1430;
      
      
      if ($tem251 == 0) {
        __label__ = 226;
        break;
      } else {
        __label__ = 227;
        break;
      }
     case 226:
      $0 = 1;
      __label__ = 380;
      break;
     case 227:
      
      _normalizePublicId($tem251);
      
      
      
      HEAP[$parser_addr + 340] = $tem251;
      
      
      
      var $1440 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $1440;
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 228:
      
      
      
      
      if (HEAP[$parser_addr + 336] != 0) {
        __label__ = 229;
        break;
      } else {
        __label__ = 233;
        break;
      }
     case 229:
      
      
      
      
      if (HEAP[$parser_addr + 96] != 0) {
        __label__ = 230;
        break;
      } else {
        __label__ = 233;
        break;
      }
     case 230:
      
      
      
      
      
      var $1457 = HEAP[$next_addr] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $1462 = $s_addr + HEAP[$enc_addr + 68];
      
      
      
      var $1466 = _poolStoreString($parser_addr + 416, $enc_addr, $1462, $1457);
      $systemId = $1466;
      
      
      if ($systemId == 0) {
        __label__ = 231;
        break;
      } else {
        __label__ = 232;
        break;
      }
     case 231:
      $0 = 1;
      __label__ = 380;
      break;
     case 232:
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $1473 = HEAP[$parser_addr + 96];
      
      
      var $1476 = HEAP[$parser_addr + 340];
      
      
      var $1479 = HEAP[$parser_addr + 360];
      
      
      var $1482 = HEAP[$parser_addr + 336];
      
      
      var $1485 = HEAP[$parser_addr + 4];
      
      FUNCTION_TABLE[$1473]($1485, $1482, $1479, $systemId, $1476);
      $handleDefault = 0;
      __label__ = 233;
      break;
     case 233:
      
      
      _poolClear($parser_addr + 416);
      __label__ = 373;
      break;
     case 234:
      
      
      
      
      if (HEAP[$parser_addr + 340] != 0) {
        __label__ = 235;
        break;
      } else {
        __label__ = 237;
        break;
      }
     case 235:
      
      
      
      
      if (HEAP[$parser_addr + 96] != 0) {
        __label__ = 236;
        break;
      } else {
        __label__ = 237;
        break;
      }
     case 236:
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $1501 = HEAP[$parser_addr + 96];
      
      
      var $1504 = HEAP[$parser_addr + 340];
      
      
      var $1507 = HEAP[$parser_addr + 360];
      
      
      var $1510 = HEAP[$parser_addr + 336];
      
      
      var $1513 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$1501]($1513, $1510, $1507, 0, $1504);
      $handleDefault = 0;
      __label__ = 237;
      break;
     case 237:
      
      
      _poolClear($parser_addr + 416);
      __label__ = 373;
      break;
     case 238:
      var $1516 = $tok_addr;
      if ($1516 == 12) {
        __label__ = 240;
        break;
      } else if ($1516 == 28) {
        __label__ = 239;
        break;
      } else {
        __label__ = 241;
        break;
      }
     case 239:
      $0 = 10;
      __label__ = 380;
      break;
     case 240:
      $0 = 17;
      __label__ = 380;
      break;
     case 241:
      $0 = 2;
      __label__ = 380;
      break;
     case 242:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 243;
        break;
      } else {
        __label__ = 244;
        break;
      }
     case 243:
      var $1521 = HEAP[$next_addr];
      
      
      
      _reportDefault($parser_addr, $enc_addr, $s_addr, $1521);
      __label__ = 244;
      break;
     case 244:
      $handleDefault = 0;
      
      
      
      
      
      
      
      var $1532 = _doIgnoreSection($parser_addr, $enc_addr, $next_addr, $end_addr, $nextPtr_addr, $haveMore_addr & 255);
      $result270 = $1532;
      
      if ($1532 != 0) {
        __label__ = 245;
        break;
      } else {
        __label__ = 246;
        break;
      }
     case 245:
      
      $0 = $result270;
      __label__ = 380;
      break;
     case 246:
      
      
      if (HEAP[$next_addr] == 0) {
        __label__ = 247;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 247:
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 86;
      
      $0 = $result270;
      __label__ = 380;
      break;
     case 248:
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 256 + 4] >= HEAP[$parser_addr + 468]) {
        __label__ = 249;
        break;
      } else {
        __label__ = 258;
        break;
      }
     case 249:
      
      
      
      
      
      var $1553 = $parser_addr + 12;
      if (HEAP[$parser_addr + 468] != 0) {
        __label__ = 250;
        break;
      } else {
        __label__ = 256;
        break;
      }
     case 250:
      
      var $1555 = HEAP[$1553 + 4];
      
      
      
      var $1559 = HEAP[$parser_addr + 468] * 2;
      
      
      HEAP[$parser_addr + 468] = $1559;
      
      
      var $1564 = HEAP[$parser_addr + 468];
      
      
      var $1567 = HEAP[$parser_addr + 464];
      var $1568 = FUNCTION_TABLE[$1555]($1567, $1564);
      $temp = $1568;
      
      
      if ($temp == 0) {
        __label__ = 251;
        break;
      } else {
        __label__ = 252;
        break;
      }
     case 251:
      $0 = 1;
      __label__ = 380;
      break;
     case 252:
      
      
      
      HEAP[$parser_addr + 464] = $temp;
      
      
      
      
      if (HEAP[$dtd + 184] != 0) {
        __label__ = 253;
        break;
      } else {
        __label__ = 258;
        break;
      }
     case 253:
      
      
      
      var $1581 = HEAP[$parser_addr + 12 + 4];
      
      
      
      var $1585 = HEAP[$parser_addr + 468] * 4;
      
      
      
      var $1589 = HEAP[$dtd + 184];
      var $1590 = FUNCTION_TABLE[$1581]($1589, $1585);
      
      $temp283 = $1590;
      
      
      if ($temp283 == 0) {
        __label__ = 254;
        break;
      } else {
        __label__ = 255;
        break;
      }
     case 254:
      $0 = 1;
      __label__ = 380;
      break;
     case 255:
      
      
      
      HEAP[$dtd + 184] = $temp283;
      __label__ = 258;
      break;
     case 256:
      
      var $1598 = HEAP[$1553];
      
      
      HEAP[$parser_addr + 468] = 32;
      
      
      var $1603 = HEAP[$parser_addr + 468];
      var $1604 = FUNCTION_TABLE[$1598]($1603);
      
      
      HEAP[$parser_addr + 464] = $1604;
      
      
      
      
      if (HEAP[$parser_addr + 464] == 0) {
        __label__ = 257;
        break;
      } else {
        __label__ = 258;
        break;
      }
     case 257:
      $0 = 1;
      __label__ = 380;
      break;
     case 258:
      
      
      
      
      
      
      
      var $1618 = HEAP[$parser_addr + 464] + HEAP[$parser_addr + 256 + 4];
      HEAP[$1618] = 0;
      
      
      
      
      if (HEAP[$dtd + 160] != 0) {
        __label__ = 259;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 259:
      
      var $1624 = _nextScaffoldPart($parser_addr);
      $myindex = $1624;
      
      
      if ($myindex < 0) {
        __label__ = 260;
        break;
      } else {
        __label__ = 261;
        break;
      }
     case 260:
      $0 = 1;
      __label__ = 380;
      break;
     case 261:
      
      
      
      
      
      
      var $1633 = HEAP[$dtd + 184] + 4 * HEAP[$dtd + 180];
      
      HEAP[$1633] = $myindex;
      
      
      
      var $1638 = HEAP[$dtd + 180] + 1;
      
      
      HEAP[$dtd + 180] = $1638;
      
      
      
      
      
      var $1646 = HEAP[$dtd + 164] + 28 * $myindex;
      HEAP[$1646] = 6;
      
      
      
      
      if (HEAP[$parser_addr + 128] != 0) {
        __label__ = 262;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 262:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 263:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 464] + HEAP[$parser_addr + 256 + 4]] == 124) {
        __label__ = 264;
        break;
      } else {
        __label__ = 265;
        break;
      }
     case 264:
      $0 = 2;
      __label__ = 380;
      break;
     case 265:
      
      
      
      
      
      
      
      var $1668 = HEAP[$parser_addr + 464] + HEAP[$parser_addr + 256 + 4];
      HEAP[$1668] = 44;
      
      
      
      
      if (HEAP[$dtd + 160] != 0) {
        __label__ = 266;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 266:
      
      
      
      
      if (HEAP[$parser_addr + 128] != 0) {
        __label__ = 267;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 267:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 268:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 464] + HEAP[$parser_addr + 256 + 4]] == 44) {
        __label__ = 269;
        break;
      } else {
        __label__ = 270;
        break;
      }
     case 269:
      $0 = 2;
      __label__ = 380;
      break;
     case 270:
      
      
      
      
      if (HEAP[$dtd + 160] != 0) {
        __label__ = 271;
        break;
      } else {
        __label__ = 275;
        break;
      }
     case 271:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$parser_addr + 464] + HEAP[$parser_addr + 256 + 4]] == 0) {
        __label__ = 272;
        break;
      } else {
        __label__ = 275;
        break;
      }
     case 272:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$dtd + 164] + 28 * HEAP[HEAP[$dtd + 184] + 4 * (HEAP[$dtd + 180] - 1)]] != 3) {
        __label__ = 273;
        break;
      } else {
        __label__ = 275;
        break;
      }
     case 273:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1730 = HEAP[$dtd + 164] + 28 * HEAP[HEAP[$dtd + 184] + 4 * (HEAP[$dtd + 180] - 1)];
      HEAP[$1730] = 5;
      
      
      
      
      if (HEAP[$parser_addr + 128] != 0) {
        __label__ = 274;
        break;
      } else {
        __label__ = 275;
        break;
      }
     case 274:
      $handleDefault = 0;
      __label__ = 275;
      break;
     case 275:
      
      
      
      
      
      
      
      var $1742 = HEAP[$parser_addr + 464] + HEAP[$parser_addr + 256 + 4];
      HEAP[$1742] = 124;
      __label__ = 373;
      break;
     case 276:
      
      
      HEAP[$dtd + 129] = 1;
      
      
      
      
      if (HEAP[$parser_addr + 492] == 0) {
        __label__ = 277;
        break;
      } else {
        __label__ = 278;
        break;
      }
     case 277:
      
      
      var $1751 = HEAP[$dtd + 130];
      
      
      HEAP[$dtd + 128] = $1751;
      __label__ = 304;
      break;
     case 278:
      
      
      
      
      
      var $1759 = HEAP[$next_addr] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $1764 = $s_addr + HEAP[$enc_addr + 68];
      
      
      
      var $1768 = _poolStoreString($dtd + 80, $enc_addr, $1764, $1759);
      $name312 = $1768;
      
      
      if ($name312 == 0) {
        __label__ = 279;
        break;
      } else {
        __label__ = 280;
        break;
      }
     case 279:
      $0 = 1;
      __label__ = 380;
      break;
     case 280:
      
      
      
      var $1774 = _lookup($dtd + 132, $name312, 0);
      
      $entity313 = $1774;
      
      
      
      var $1779 = HEAP[$dtd + 80 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $1779;
      
      
      
      
      
      if (HEAP[$parser_addr + 256 + 16] == 0) {
        __label__ = 288;
        break;
      } else {
        __label__ = 281;
        break;
      }
     case 281:
      
      
      
      
      if (HEAP[$dtd + 130] != 0) {
        __label__ = 282;
        break;
      } else {
        __label__ = 283;
        break;
      }
     case 282:
      
      
      
      
      if (HEAP[$parser_addr + 300] != 0) {
        __label__ = 288;
        break;
      } else {
        __label__ = 284;
        break;
      }
     case 283:
      
      
      
      
      if (HEAP[$dtd + 129] != 0) {
        __label__ = 288;
        break;
      } else {
        __label__ = 284;
        break;
      }
     case 284:
      
      
      if ($entity313 == 0) {
        __label__ = 285;
        break;
      } else {
        __label__ = 286;
        break;
      }
     case 285:
      $0 = 11;
      __label__ = 380;
      break;
     case 286:
      
      
      
      
      if (HEAP[$entity313 + 34] == 0) {
        __label__ = 287;
        break;
      } else {
        __label__ = 292;
        break;
      }
     case 287:
      $0 = 24;
      __label__ = 380;
      break;
     case 288:
      
      
      if ($entity313 == 0) {
        __label__ = 289;
        break;
      } else {
        __label__ = 292;
        break;
      }
     case 289:
      
      
      var $1810 = HEAP[$dtd + 130];
      
      
      HEAP[$dtd + 128] = $1810;
      
      
      if ($role == 60) {
        __label__ = 290;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 290:
      
      
      
      
      if (HEAP[$parser_addr + 120] != 0) {
        __label__ = 291;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 291:
      
      
      var $1821 = HEAP[$parser_addr + 120];
      
      
      var $1824 = HEAP[$parser_addr + 4];
      
      FUNCTION_TABLE[$1821]($1824, $name312, 1);
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 292:
      
      
      
      
      if (HEAP[$entity313 + 32] != 0) {
        __label__ = 293;
        break;
      } else {
        __label__ = 294;
        break;
      }
     case 293:
      $0 = 12;
      __label__ = 380;
      break;
     case 294:
      
      
      
      
      if (HEAP[$entity313 + 4] != 0) {
        __label__ = 295;
        break;
      } else {
        __label__ = 298;
        break;
      }
     case 295:
      
      
      
      $betweenDecl = $role == 60;
      
      
      
      
      
      var $1842 = _processInternalEntity($parser_addr, $entity313, $betweenDecl & 255);
      $result334 = $1842;
      
      
      if ($result334 != 0) {
        __label__ = 296;
        break;
      } else {
        __label__ = 297;
        break;
      }
     case 296:
      
      $0 = $result334;
      __label__ = 380;
      break;
     case 297:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 298:
      
      
      
      
      var $1850 = $dtd;
      if (HEAP[$parser_addr + 112] != 0) {
        __label__ = 299;
        break;
      } else {
        __label__ = 303;
        break;
      }
     case 299:
      
      HEAP[$1850 + 131] = 0;
      
      
      HEAP[$entity313 + 32] = 1;
      
      
      var $1856 = HEAP[$parser_addr + 112];
      
      
      var $1859 = HEAP[$entity313 + 24];
      
      
      var $1862 = HEAP[$entity313 + 16];
      
      
      var $1865 = HEAP[$entity313 + 20];
      
      
      var $1868 = HEAP[$parser_addr + 116];
      var $1869 = FUNCTION_TABLE[$1856]($1868, 0, $1865, $1862, $1859);
      var $1870 = $1869 == 0;
      
      
      HEAP[$entity313 + 32] = 0;
      if ($1870) {
        __label__ = 300;
        break;
      } else {
        __label__ = 301;
        break;
      }
     case 300:
      $0 = 21;
      __label__ = 380;
      break;
     case 301:
      $handleDefault = 0;
      
      
      
      
      if (HEAP[$dtd + 131] == 0) {
        __label__ = 302;
        break;
      } else {
        __label__ = 304;
        break;
      }
     case 302:
      
      
      var $1879 = HEAP[$dtd + 130];
      
      
      HEAP[$dtd + 128] = $1879;
      __label__ = 373;
      break;
     case 303:
      
      var $1883 = HEAP[$1850 + 130];
      
      
      HEAP[$dtd + 128] = $1883;
      __label__ = 373;
      break;
     case 304:
      
      
      
      
      if (HEAP[$dtd + 130] == 0) {
        __label__ = 305;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 305:
      
      
      
      
      if (HEAP[$parser_addr + 108] != 0) {
        __label__ = 306;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 306:
      
      
      var $1896 = HEAP[$parser_addr + 108];
      
      
      var $1899 = HEAP[$parser_addr + 4];
      var $1900 = FUNCTION_TABLE[$1896]($1899);
      
      if ($1900 == 0) {
        __label__ = 307;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 307:
      $0 = 22;
      __label__ = 380;
      break;
     case 308:
      
      
      
      
      if (HEAP[$parser_addr + 128] != 0) {
        __label__ = 309;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 309:
      var $1906 = HEAP[$next_addr];
      
      
      
      var $1910 = _getElementType($parser_addr, $enc_addr, $s_addr, $1906);
      
      
      HEAP[$parser_addr + 344] = $1910;
      
      
      
      
      if (HEAP[$parser_addr + 344] == 0) {
        __label__ = 310;
        break;
      } else {
        __label__ = 311;
        break;
      }
     case 310:
      $0 = 1;
      __label__ = 380;
      break;
     case 311:
      
      
      HEAP[$dtd + 180] = 0;
      
      
      HEAP[$dtd + 176] = 0;
      
      
      HEAP[$dtd + 160] = 1;
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 312:
      
      
      
      
      if (HEAP[$dtd + 160] != 0) {
        __label__ = 313;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 313:
      
      
      
      
      if (HEAP[$parser_addr + 128] != 0) {
        __label__ = 314;
        break;
      } else {
        __label__ = 320;
        break;
      }
     case 314:
      
      
      
      var $1934 = HEAP[$parser_addr + 12];
      var $1935 = FUNCTION_TABLE[$1934](20);
      
      $content = $1935;
      
      
      if ($content == 0) {
        __label__ = 315;
        break;
      } else {
        __label__ = 316;
        break;
      }
     case 315:
      $0 = 1;
      __label__ = 380;
      break;
     case 316:
      
      
      HEAP[$content + 4] = 0;
      
      
      HEAP[$content + 8] = 0;
      
      
      HEAP[$content + 12] = 0;
      
      
      HEAP[$content + 16] = 0;
      
      
      if ($role == 41) {
        __label__ = 317;
        break;
      } else {
        __label__ = 318;
        break;
      }
     case 317:
      $iftmp_226 = 2;
      __label__ = 319;
      break;
     case 318:
      $iftmp_226 = 1;
      __label__ = 319;
      break;
     case 319:
      
      
      
      HEAP[$content] = $iftmp_226;
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $1956 = HEAP[$parser_addr + 128];
      
      
      
      
      var $1961 = HEAP[HEAP[$parser_addr + 344]];
      
      
      var $1964 = HEAP[$parser_addr + 4];
      
      FUNCTION_TABLE[$1956]($1964, $1961, $content);
      $handleDefault = 0;
      __label__ = 320;
      break;
     case 320:
      
      
      HEAP[$dtd + 160] = 0;
      __label__ = 373;
      break;
     case 321:
      
      
      
      
      if (HEAP[$dtd + 160] != 0) {
        __label__ = 322;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 322:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1985 = HEAP[$dtd + 164] + 28 * HEAP[HEAP[$dtd + 184] + 4 * (HEAP[$dtd + 180] - 1)];
      HEAP[$1985] = 3;
      
      
      
      
      if (HEAP[$parser_addr + 128] != 0) {
        __label__ = 323;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 323:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 324:
      $quant = 0;
      __label__ = 328;
      break;
     case 325:
      $quant = 1;
      __label__ = 328;
      break;
     case 326:
      $quant = 2;
      __label__ = 328;
      break;
     case 327:
      $quant = 3;
      __label__ = 328;
      break;
     case 328:
      
      
      
      
      if (HEAP[$dtd + 160] != 0) {
        __label__ = 329;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 329:
      
      
      var $1996 = HEAP[$next_addr];
      if ($quant != 0) {
        __label__ = 330;
        break;
      } else {
        __label__ = 331;
        break;
      }
     case 330:
      
      
      
      
      
      $iftmp_227 = $1996 + (0 - HEAP[$enc_addr + 68]);
      __label__ = 332;
      break;
     case 331:
      $iftmp_227 = $1996;
      __label__ = 332;
      break;
     case 332:
      
      $nxt = $iftmp_227;
      
      var $2004 = _nextScaffoldPart($parser_addr);
      $myindex374 = $2004;
      
      if ($2004 < 0) {
        __label__ = 333;
        break;
      } else {
        __label__ = 334;
        break;
      }
     case 333:
      $0 = 1;
      __label__ = 380;
      break;
     case 334:
      
      
      
      
      
      var $2011 = HEAP[$dtd + 164] + 28 * $myindex374;
      HEAP[$2011] = 4;
      
      
      
      
      
      var $2017 = HEAP[$dtd + 164] + 28 * $myindex374 + 4;
      
      HEAP[$2017] = $quant;
      
      
      
      
      var $2023 = _getElementType($parser_addr, $enc_addr, $s_addr, $nxt);
      $el = $2023;
      
      
      if ($el == 0) {
        __label__ = 335;
        break;
      } else {
        __label__ = 336;
        break;
      }
     case 335:
      $0 = 1;
      __label__ = 380;
      break;
     case 336:
      
      
      
      $name373 = HEAP[$el];
      
      
      
      
      
      var $2034 = HEAP[$dtd + 164] + 28 * $myindex374 + 8;
      
      HEAP[$2034] = $name373;
      $nameLen = 0;
      __label__ = 337;
      break;
     case 337:
      
      
      
      
      
      var $2041 = HEAP[$name373 + $nameLen] != 0;
      
      var $2043 = $nameLen + 1;
      $nameLen = $2043;
      
      if ($2041 != 0) {
        __label__ = 337;
        break;
      } else {
        __label__ = 338;
        break;
      }
     case 338:
      
      
      
      
      var $2048 = $nameLen + HEAP[$dtd + 168];
      
      
      HEAP[$dtd + 168] = $2048;
      
      
      
      
      if (HEAP[$parser_addr + 128] != 0) {
        __label__ = 339;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 339:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 340:
      $quant = 0;
      __label__ = 344;
      break;
     case 341:
      $quant = 1;
      __label__ = 344;
      break;
     case 342:
      $quant = 2;
      __label__ = 344;
      break;
     case 343:
      $quant = 3;
      __label__ = 344;
      break;
     case 344:
      
      
      
      
      if (HEAP[$dtd + 160] != 0) {
        __label__ = 345;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 345:
      
      
      
      
      if (HEAP[$parser_addr + 128] != 0) {
        __label__ = 346;
        break;
      } else {
        __label__ = 347;
        break;
      }
     case 346:
      $handleDefault = 0;
      __label__ = 347;
      break;
     case 347:
      
      
      
      var $2066 = HEAP[$dtd + 180] - 1;
      
      
      HEAP[$dtd + 180] = $2066;
      
      
      
      
      
      
      
      
      
      
      
      
      var $2081 = HEAP[$dtd + 164] + 28 * HEAP[HEAP[$dtd + 184] + 4 * HEAP[$dtd + 180]] + 4;
      
      HEAP[$2081] = $quant;
      
      
      
      
      if (HEAP[$dtd + 180] == 0) {
        __label__ = 348;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 348:
      
      
      if ($handleDefault == 0) {
        __label__ = 349;
        break;
      } else {
        __label__ = 352;
        break;
      }
     case 349:
      
      var $2090 = _build_model($parser_addr);
      $model = $2090;
      
      
      if ($model == 0) {
        __label__ = 350;
        break;
      } else {
        __label__ = 351;
        break;
      }
     case 350:
      $0 = 1;
      __label__ = 380;
      break;
     case 351:
      
      
      HEAP[$eventEndPP] = $s_addr;
      
      
      var $2097 = HEAP[$parser_addr + 128];
      
      
      
      
      var $2102 = HEAP[HEAP[$parser_addr + 344]];
      
      
      var $2105 = HEAP[$parser_addr + 4];
      
      FUNCTION_TABLE[$2097]($2105, $2102, $model);
      __label__ = 352;
      break;
     case 352:
      
      
      HEAP[$dtd + 160] = 0;
      
      
      HEAP[$dtd + 168] = 0;
      __label__ = 373;
      break;
     case 353:
      var $2111 = HEAP[$next_addr];
      
      
      
      var $2115 = _reportProcessingInstruction($parser_addr, $enc_addr, $s_addr, $2111);
      
      if ($2115 == 0) {
        __label__ = 354;
        break;
      } else {
        __label__ = 355;
        break;
      }
     case 354:
      $0 = 1;
      __label__ = 380;
      break;
     case 355:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 356:
      var $2117 = HEAP[$next_addr];
      
      
      
      var $2121 = _reportComment($parser_addr, $enc_addr, $s_addr, $2117);
      
      if ($2121 == 0) {
        __label__ = 357;
        break;
      } else {
        __label__ = 358;
        break;
      }
     case 357:
      $0 = 1;
      __label__ = 380;
      break;
     case 358:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 359:
      
      
      if ($tok_addr == 14) {
        __label__ = 360;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 360:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 361:
      
      
      
      
      if (HEAP[$parser_addr + 84] != 0) {
        __label__ = 362;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 362:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 363:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 364;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 364:
      
      
      
      
      if (HEAP[$parser_addr + 136] != 0) {
        __label__ = 365;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 365:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 366:
      
      
      
      
      if (HEAP[$parser_addr + 96] != 0) {
        __label__ = 367;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 367:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 368:
      
      
      
      
      if (HEAP[$dtd + 128] != 0) {
        __label__ = 369;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 369:
      
      
      
      
      if (HEAP[$parser_addr + 132] != 0) {
        __label__ = 370;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 370:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 371:
      
      
      
      
      if (HEAP[$parser_addr + 128] != 0) {
        __label__ = 372;
        break;
      } else {
        __label__ = 373;
        break;
      }
     case 372:
      $handleDefault = 0;
      __label__ = 376;
      break;
     case 373:
      
      
      if ($handleDefault != 0) {
        __label__ = 374;
        break;
      } else {
        __label__ = 376;
        break;
      }
     case 374:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 375;
        break;
      } else {
        __label__ = 376;
        break;
      }
     case 375:
      var $2157 = HEAP[$next_addr];
      
      
      
      _reportDefault($parser_addr, $enc_addr, $s_addr, $2157);
      __label__ = 376;
      break;
     case 376:
      
      
      
      var $2164 = HEAP[$parser_addr + 480];
      if ($2164 == 2) {
        __label__ = 378;
        break;
      } else if ($2164 == 3) {
        __label__ = 377;
        break;
      } else {
        __label__ = 379;
        break;
      }
     case 377:
      var $2165 = HEAP[$next_addr];
      
      HEAP[$nextPtr_addr] = $2165;
      $0 = 0;
      __label__ = 380;
      break;
     case 378:
      $0 = 35;
      __label__ = 380;
      break;
     case 379:
      
      $s_addr = HEAP[$next_addr];
      
      
      
      var $2171 = HEAP[$enc_addr];
      
      
      
      var $2175 = FUNCTION_TABLE[$2171]($enc_addr, $s_addr, $end_addr, $next_addr);
      $tok_addr = $2175;
      __label__ = 3;
      break;
     case 380:
      
      $retval = $0;
      var $retval432 = $retval;
      STACKTOP = __stackBase__;
      return $retval432;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _epilogProcessor($parser, $s, $end, $nextPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $s_addr;
      var $end_addr;
      var $nextPtr_addr;
      var $retval;
      var $0;
      var $next = __stackBase__;
      var $tok;
      $parser_addr = $parser;
      $s_addr = $s;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 88;
      
      
      
      HEAP[$parser_addr + 288] = $s_addr;
      __label__ = 1;
      break;
     case 1:
      HEAP[$next] = 0;
      
      
      
      
      
      var $11 = HEAP[HEAP[$parser_addr + 144]];
      
      
      var $14 = HEAP[$parser_addr + 144];
      
      
      var $17 = FUNCTION_TABLE[$11]($14, $s_addr, $end_addr, $next);
      $tok = $17;
      var $18 = HEAP[$next];
      
      
      HEAP[$parser_addr + 292] = $18;
      var $21 = $tok;
      if ($21 == -15) {
        __label__ = 2;
        break;
      } else if ($21 == -4) {
        __label__ = 6;
        break;
      } else if ($21 == -2) {
        __label__ = 17;
        break;
      } else if ($21 == -1) {
        __label__ = 14;
        break;
      } else if ($21 == 0) {
        __label__ = 13;
        break;
      } else if ($21 == 11) {
        __label__ = 9;
        break;
      } else if ($21 == 13) {
        __label__ = 11;
        break;
      } else if ($21 == 15) {
        __label__ = 7;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $26 = HEAP[$next];
      
      
      var $29 = HEAP[$parser_addr + 144];
      
      
      _reportDefault($parser_addr, $29, $s_addr, $26);
      
      
      
      
      
      if (HEAP[$parser_addr + 480] == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 35;
      __label__ = 24;
      break;
     case 5:
      var $37 = HEAP[$next];
      
      HEAP[$nextPtr_addr] = $37;
      $0 = 0;
      __label__ = 24;
      break;
     case 6:
      
      
      HEAP[$nextPtr_addr] = $s_addr;
      $0 = 0;
      __label__ = 24;
      break;
     case 7:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 8:
      var $45 = HEAP[$next];
      
      
      var $48 = HEAP[$parser_addr + 144];
      
      
      _reportDefault($parser_addr, $48, $s_addr, $45);
      __label__ = 21;
      break;
     case 9:
      var $51 = HEAP[$next];
      
      
      var $54 = HEAP[$parser_addr + 144];
      
      
      var $57 = _reportProcessingInstruction($parser_addr, $54, $s_addr, $51);
      
      if ($57 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 10:
      $0 = 1;
      __label__ = 24;
      break;
     case 11:
      var $59 = HEAP[$next];
      
      
      var $62 = HEAP[$parser_addr + 144];
      
      
      var $65 = _reportComment($parser_addr, $62, $s_addr, $59);
      
      if ($65 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 12:
      $0 = 1;
      __label__ = 24;
      break;
     case 13:
      var $67 = HEAP[$next];
      
      
      HEAP[$parser_addr + 288] = $67;
      $0 = 4;
      __label__ = 24;
      break;
     case 14:
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      HEAP[$nextPtr_addr] = $s_addr;
      $0 = 0;
      __label__ = 24;
      break;
     case 16:
      $0 = 5;
      __label__ = 24;
      break;
     case 17:
      
      
      
      
      
      if (HEAP[$parser_addr + 480 + 4] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      HEAP[$nextPtr_addr] = $s_addr;
      $0 = 0;
      __label__ = 24;
      break;
     case 19:
      $0 = 6;
      __label__ = 24;
      break;
     case 20:
      $0 = 9;
      __label__ = 24;
      break;
     case 21:
      
      $s_addr = HEAP[$next];
      
      
      
      HEAP[$parser_addr + 288] = $s_addr;
      
      
      
      var $91 = HEAP[$parser_addr + 480];
      if ($91 == 2) {
        __label__ = 23;
        break;
      } else if ($91 == 3) {
        __label__ = 22;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 22:
      var $92 = HEAP[$next];
      
      HEAP[$nextPtr_addr] = $92;
      $0 = 0;
      __label__ = 24;
      break;
     case 23:
      $0 = 35;
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval28 = $retval;
      STACKTOP = __stackBase__;
      return $retval28;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _processInternalEntity($parser, $entity, $betweenDecl) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $entity_addr;
      var $betweenDecl_addr;
      var $retval;
      var $0;
      var $textStart;
      var $textEnd;
      var $next = __stackBase__;
      var $result;
      var $openEntity;
      var $tok;
      $parser_addr = $parser;
      $entity_addr = $entity;
      $betweenDecl_addr = $betweenDecl;
      
      
      
      
      var $5 = $parser_addr;
      if (HEAP[$parser_addr + 304] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      $openEntity = HEAP[$5 + 304];
      
      
      var $10 = HEAP[$openEntity + 8];
      
      
      HEAP[$parser_addr + 304] = $10;
      __label__ = 4;
      break;
     case 2:
      
      
      var $15 = HEAP[$5 + 12];
      var $16 = FUNCTION_TABLE[$15](24);
      
      $openEntity = $16;
      
      
      if ($openEntity == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 1;
      __label__ = 13;
      break;
     case 4:
      
      
      HEAP[$entity_addr + 32] = 1;
      
      
      HEAP[$entity_addr + 12] = 0;
      
      
      var $26 = HEAP[$parser_addr + 300];
      
      
      HEAP[$openEntity + 8] = $26;
      
      
      
      HEAP[$parser_addr + 300] = $openEntity;
      
      
      
      HEAP[$openEntity + 12] = $entity_addr;
      
      
      var $37 = HEAP[$parser_addr + 312];
      
      
      HEAP[$openEntity + 16] = $37;
      
      
      
      HEAP[$openEntity + 20] = $betweenDecl_addr;
      
      
      HEAP[$openEntity] = 0;
      
      
      HEAP[$openEntity + 4] = 0;
      
      
      
      $textStart = HEAP[$entity_addr + 4];
      
      
      
      
      
      
      
      $textEnd = HEAP[$entity_addr + 4] + HEAP[$entity_addr + 8];
      
      
      
      
      
      
      var $63 = HEAP[$parser_addr + 228];
      if (HEAP[$entity_addr + 33] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $66 = HEAP[$63];
      
      
      var $69 = HEAP[$parser_addr + 228];
      
      
      var $72 = FUNCTION_TABLE[$66]($69, $textStart, $textEnd, $next);
      $tok = $72;
      var $73 = HEAP[$next];
      
      
      var $76 = HEAP[$parser_addr + 228];
      
      
      
      
      var $81 = _doProlog($parser_addr, $76, $textStart, $textEnd, $tok, $73, $next, 0);
      $result = $81;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      
      
      var $84 = HEAP[$parser_addr + 312];
      
      
      
      var $88 = _doContent($parser_addr, $84, $63, $textStart, $textEnd, $next, 0);
      $result = $88;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $89 = __lastLabel__ == 6 ? $88 : $81;
      
      if ($89 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      
      if ($textEnd == HEAP[$next]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      if (HEAP[$parser_addr + 480] != 3) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      var $103 = HEAP[$next] - $textStart;
      
      
      HEAP[$entity_addr + 12] = $103;
      
      
      HEAP[$parser_addr + 280] = FUNCTION_TABLE_OFFSET + 90;
      __label__ = 12;
      break;
     case 11:
      
      
      HEAP[$entity_addr + 32] = 0;
      
      
      var $112 = HEAP[$openEntity + 8];
      
      
      HEAP[$parser_addr + 300] = $112;
      
      
      var $117 = HEAP[$parser_addr + 304];
      
      
      HEAP[$openEntity + 8] = $117;
      
      
      
      HEAP[$parser_addr + 304] = $openEntity;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $result;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _internalEntityProcessor($parser, $s, $end, $nextPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $s_addr;
      var $end_addr;
      var $nextPtr_addr;
      var $retval;
      var $0;
      var $entity;
      var $textStart;
      var $textEnd;
      var $next = __stackBase__;
      var $result;
      var $openEntity;
      var $tok;
      var $tok11;
      $parser_addr = $parser;
      $s_addr = $s;
      $end_addr = $end;
      $nextPtr_addr = $nextPtr;
      
      
      
      $openEntity = HEAP[$parser_addr + 300];
      
      
      if ($openEntity == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 23;
      __label__ = 13;
      break;
     case 2:
      
      
      
      $entity = HEAP[$openEntity + 12];
      
      
      
      
      
      
      
      $textStart = HEAP[$entity + 4] + HEAP[$entity + 12];
      
      
      
      
      
      
      
      $textEnd = HEAP[$entity + 4] + HEAP[$entity + 8];
      
      
      
      
      
      
      var $29 = HEAP[$parser_addr + 228];
      if (HEAP[$entity + 33] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $32 = HEAP[$29];
      
      
      var $35 = HEAP[$parser_addr + 228];
      
      
      var $38 = FUNCTION_TABLE[$32]($35, $textStart, $textEnd, $next);
      $tok = $38;
      var $39 = HEAP[$next];
      
      
      var $42 = HEAP[$parser_addr + 228];
      
      
      
      
      var $47 = _doProlog($parser_addr, $42, $textStart, $textEnd, $tok, $39, $next, 0);
      $result = $47;
      __lastLabel__ = 3;
      __label__ = 5;
      break;
     case 4:
      
      
      var $50 = HEAP[$openEntity + 16];
      
      
      
      var $54 = _doContent($parser_addr, $50, $29, $textStart, $textEnd, $next, 0);
      $result = $54;
      __lastLabel__ = 4;
      __label__ = 5;
      break;
     case 5:
      var $55 = __lastLabel__ == 4 ? $54 : $47;
      
      if ($55 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      $0 = $result;
      __label__ = 13;
      break;
     case 7:
      
      
      
      if ($textEnd == HEAP[$next]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      if (HEAP[$parser_addr + 480] != 3) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      var $72 = HEAP[$next] - HEAP[$entity + 4];
      
      
      HEAP[$entity + 12] = $72;
      
      $0 = $result;
      __label__ = 13;
      break;
     case 10:
      
      
      HEAP[$entity + 32] = 0;
      
      
      var $80 = HEAP[$openEntity + 8];
      
      
      HEAP[$parser_addr + 300] = $80;
      
      
      var $85 = HEAP[$parser_addr + 304];
      
      
      HEAP[$openEntity + 8] = $85;
      
      
      
      HEAP[$parser_addr + 304] = $openEntity;
      
      
      
      
      
      var $96 = $parser_addr + 280;
      if (HEAP[$entity + 33] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      HEAP[$96] = FUNCTION_TABLE_OFFSET + 66;
      
      
      
      
      
      var $102 = HEAP[HEAP[$parser_addr + 144]];
      
      
      var $105 = HEAP[$parser_addr + 144];
      
      
      var $108 = FUNCTION_TABLE[$102]($105, $s_addr, $end_addr, $next);
      $tok11 = $108;
      
      
      
      
      
      
      var $115 = HEAP[$next];
      
      
      var $118 = HEAP[$parser_addr + 144];
      
      
      
      
      
      var $124 = HEAP[$parser_addr + 480 + 4] == 0 & 255;
      var $125 = _doProlog($parser_addr, $118, $s_addr, $end_addr, $tok11, $115, $nextPtr_addr, $124);
      $0 = $125;
      __label__ = 13;
      break;
     case 12:
      HEAP[$96] = FUNCTION_TABLE_OFFSET + 64;
      
      
      
      
      
      
      
      
      var $134 = HEAP[$parser_addr + 144];
      
      
      
      
      var $139 = HEAP[$parser_addr + 476] != 0;
      
      
      
      
      var $144 = HEAP[$parser_addr + 480 + 4] == 0 & 255;
      var $145 = _doContent($parser_addr, $139, $134, $s_addr, $end_addr, $nextPtr_addr, $144);
      $0 = $145;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _errorProcessor($parser, $s, $end, $nextPtr) {
    
    var $parser_addr;
    var $s_addr;
    var $end_addr;
    var $nextPtr_addr;
    var $retval;
    var $0;
    $parser_addr = $parser;
    $s_addr = $s;
    $end_addr = $end;
    $nextPtr_addr = $nextPtr;
    
    
    
    $0 = HEAP[$parser_addr + 284];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _storeAttributeValue($parser, $enc, $isCdata, $ptr, $end, $pool) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $isCdata_addr;
      var $ptr_addr;
      var $end_addr;
      var $pool_addr;
      var $retval;
      var $iftmp_252;
      var $0;
      var $result;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $isCdata_addr = $isCdata;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $pool_addr = $pool;
      
      
      
      
      
      
      
      
      var $9 = _appendAttributeValue($parser_addr, $enc_addr, $isCdata_addr & 255, $ptr_addr, $end_addr, $pool_addr);
      $result = $9;
      
      
      if ($result != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $result;
      __label__ = 10;
      break;
     case 2:
      
      
      if ($isCdata_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] != HEAP[$pool_addr + 16]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $25 = HEAP[$pool_addr + 12] + -1;
      
      
      if (HEAP[$25] == 32) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      var $31 = HEAP[$pool_addr + 12] + -1;
      
      
      HEAP[$pool_addr + 12] = $31;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] != HEAP[$pool_addr + 8]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $42 = _poolGrow($pool_addr);
      
      if ($42 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $iftmp_252 = 1;
      $0 = 1;
      __label__ = 10;
      break;
     case 9:
      
      
      var $46 = HEAP[$pool_addr + 12];
      HEAP[$46] = 0;
      var $47 = $46 + 1;
      
      
      HEAP[$pool_addr + 12] = $47;
      $iftmp_252 = 0;
      $0 = 0;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _appendAttributeValue($parser, $enc, $isCdata, $ptr, $end, $pool) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $isCdata_addr;
      var $ptr_addr;
      var $end_addr;
      var $pool_addr;
      var $retval;
      var $iftmp_262;
      var $iftmp_261;
      var $iftmp_259;
      var $iftmp_257;
      var $iftmp_254;
      var $0;
      var $dtd;
      var $next = __stackBase__;
      var $tok;
      var $buf = __stackBase__ + 4;
      var $i;
      var $n;
      var $name;
      var $entity;
      var $checkEntityDecl;
      var $ch;
      var $result;
      var $textEnd;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $isCdata_addr = $isCdata;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $pool_addr = $pool;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      var $buf17 = $buf;
      __label__ = 1;
      break;
     case 1:
      
      
      
      var $7 = HEAP[$enc_addr + 16];
      
      
      
      var $11 = FUNCTION_TABLE[$7]($enc_addr, $ptr_addr, $end_addr, $next);
      $tok = $11;
      if ($11 == -4) {
        __label__ = 2;
        break;
      } else if ($11 == -3) {
        __label__ = 29;
        break;
      } else if ($11 == -1) {
        __label__ = 6;
        break;
      } else if ($11 == 0) {
        __label__ = 3;
        break;
      } else if ($11 == 6) {
        __label__ = 27;
        break;
      } else if ($11 == 7) {
        __label__ = 30;
        break;
      } else if ($11 == 9) {
        __label__ = 37;
        break;
      } else if ($11 == 10) {
        __label__ = 9;
        break;
      } else if ($11 == 39) {
        __label__ = 30;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 81;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $17 = HEAP[$next];
      
      
      HEAP[$parser_addr + 288] = $17;
      __label__ = 5;
      break;
     case 5:
      $0 = 4;
      __label__ = 81;
      break;
     case 6:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      HEAP[$parser_addr + 288] = $ptr_addr;
      __label__ = 8;
      break;
     case 8:
      $0 = 4;
      __label__ = 81;
      break;
     case 9:
      
      
      var $30 = HEAP[$enc_addr + 44];
      
      
      var $33 = FUNCTION_TABLE[$30]($enc_addr, $ptr_addr);
      $n = $33;
      
      
      if ($n < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      HEAP[$parser_addr + 288] = $ptr_addr;
      __label__ = 12;
      break;
     case 12:
      $0 = 14;
      __label__ = 81;
      break;
     case 13:
      
      
      if ($isCdata_addr == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      if ($n == 32) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] == HEAP[$pool_addr + 16]) {
        __label__ = 80;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $58 = HEAP[$pool_addr + 12] + -1;
      
      
      if (HEAP[$58] == 32) {
        __label__ = 80;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $62 = _PyExpat_XmlUtf8Encode($n, $buf17);
      $n = $62;
      
      if ($62 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      HEAP[$parser_addr + 288] = $ptr_addr;
      __label__ = 20;
      break;
     case 20:
      $0 = 14;
      __label__ = 81;
      break;
     case 21:
      $i = 0;
      __label__ = 26;
      break;
     case 22:
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] != HEAP[$pool_addr + 8]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      var $80 = _poolGrow($pool_addr);
      
      if ($80 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      $iftmp_254 = 1;
      $0 = 1;
      __label__ = 81;
      break;
     case 25:
      
      
      var $84 = HEAP[$pool_addr + 12];
      
      
      var $87 = HEAP[$buf + $i];
      HEAP[$84] = $87;
      var $88 = $84 + 1;
      
      
      HEAP[$pool_addr + 12] = $88;
      $iftmp_254 = 0;
      
      var $92 = $i + 1;
      $i = $92;
      __label__ = 26;
      break;
     case 26:
      
      
      
      if ($i < $n) {
        __label__ = 22;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 27:
      var $96 = HEAP[$next];
      
      
      
      var $100 = _poolAppend($pool_addr, $enc_addr, $ptr_addr, $96);
      
      if ($100 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 28:
      $0 = 1;
      __label__ = 81;
      break;
     case 29:
      
      
      
      
      var $106 = $ptr_addr + HEAP[$enc_addr + 68];
      HEAP[$next] = $106;
      __label__ = 30;
      break;
     case 30:
      
      
      if ($isCdata_addr == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] == HEAP[$pool_addr + 16]) {
        __label__ = 80;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      var $119 = HEAP[$pool_addr + 12] + -1;
      
      
      if (HEAP[$119] == 32) {
        __label__ = 80;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] != HEAP[$pool_addr + 8]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      var $130 = _poolGrow($pool_addr);
      
      if ($130 != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      var $134 = HEAP[$pool_addr + 12];
      HEAP[$134] = 32;
      var $135 = $134 + 1;
      
      
      HEAP[$pool_addr + 12] = $135;
      $iftmp_257 = 0;
      __label__ = 80;
      break;
     case 36:
      $iftmp_257 = 1;
      $0 = 1;
      __label__ = 81;
      break;
     case 37:
      
      
      var $140 = HEAP[$enc_addr + 48];
      
      
      
      
      
      var $146 = HEAP[$next] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $151 = $ptr_addr + HEAP[$enc_addr + 68];
      
      var $153 = FUNCTION_TABLE[$140]($enc_addr, $151, $146);
      
      $ch = $153 & 255;
      
      
      if ($ch != 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 38:
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] != HEAP[$pool_addr + 8]) {
        __label__ = 40;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      var $165 = _poolGrow($pool_addr);
      
      if ($165 != 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      var $169 = HEAP[$pool_addr + 12];
      
      HEAP[$169] = $ch;
      var $171 = $169 + 1;
      
      
      HEAP[$pool_addr + 12] = $171;
      $iftmp_259 = 0;
      __label__ = 80;
      break;
     case 41:
      $iftmp_259 = 1;
      $0 = 1;
      __label__ = 81;
      break;
     case 42:
      
      
      
      
      
      var $179 = HEAP[$next] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $184 = $ptr_addr + HEAP[$enc_addr + 68];
      
      
      
      var $188 = _poolStoreString($parser_addr + 440, $enc_addr, $184, $179);
      $name = $188;
      
      
      if ($name == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      $0 = 1;
      __label__ = 81;
      break;
     case 44:
      
      
      
      var $194 = _lookup($dtd, $name, 0);
      
      $entity = $194;
      
      
      
      var $199 = HEAP[$parser_addr + 440 + 16];
      
      
      
      HEAP[$parser_addr + 440 + 12] = $199;
      
      
      
      
      if ($dtd + 80 == $pool_addr) {
        __label__ = 45;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 45:
      
      
      
      
      
      if (HEAP[$parser_addr + 256 + 16] == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      
      
      
      if (HEAP[$dtd + 130] != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      
      if (HEAP[$parser_addr + 300] != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      
      if (HEAP[$dtd + 129] != 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      $iftmp_261 = 1;
      __label__ = 51;
      break;
     case 50:
      $iftmp_261 = 0;
      __label__ = 51;
      break;
     case 51:
      
      var $225 = $iftmp_261 & 255;
      $checkEntityDecl = $225;
      __lastLabel__ = 51;
      __label__ = 57;
      break;
     case 52:
      
      
      
      
      if (HEAP[$dtd + 129] == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 53:
      
      
      
      
      if (HEAP[$dtd + 130] != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      $iftmp_262 = 1;
      __label__ = 56;
      break;
     case 55:
      $iftmp_262 = 0;
      __label__ = 56;
      break;
     case 56:
      
      var $235 = $iftmp_262 & 255;
      $checkEntityDecl = $235;
      __lastLabel__ = 56;
      __label__ = 57;
      break;
     case 57:
      var $236 = __lastLabel__ == 56 ? $235 : $225;
      
      
      var $239 = $entity == 0;
      if ($236 != 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 58:
      if ($239) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      $0 = 11;
      __label__ = 81;
      break;
     case 60:
      
      
      
      
      if (HEAP[$entity + 34] == 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 61:
      $0 = 24;
      __label__ = 81;
      break;
     case 62:
      if ($239) {
        __label__ = 80;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 63:
      
      
      
      
      if (HEAP[$entity + 32] != 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 64:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 65;
        break;
      } else {
        __label__ = 66;
        break;
      }
     case 65:
      
      
      
      HEAP[$parser_addr + 288] = $ptr_addr;
      __label__ = 66;
      break;
     case 66:
      $0 = 12;
      __label__ = 81;
      break;
     case 67:
      
      
      
      
      if (HEAP[$entity + 28] != 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 68:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      
      
      
      HEAP[$parser_addr + 288] = $ptr_addr;
      __label__ = 70;
      break;
     case 70:
      $0 = 15;
      __label__ = 81;
      break;
     case 71:
      
      
      
      
      if (HEAP[$entity + 4] == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 72:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 73;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 73:
      
      
      
      HEAP[$parser_addr + 288] = $ptr_addr;
      __label__ = 74;
      break;
     case 74:
      $0 = 16;
      __label__ = 81;
      break;
     case 75:
      
      
      
      
      
      
      
      $textEnd = HEAP[$entity + 4] + HEAP[$entity + 8];
      
      
      HEAP[$entity + 32] = 1;
      
      
      var $291 = HEAP[$entity + 4];
      
      
      
      
      var $296 = HEAP[$parser_addr + 228];
      
      
      
      
      var $301 = _appendAttributeValue($parser_addr, $296, $isCdata_addr & 255, $291, $textEnd, $pool_addr);
      $result = $301;
      
      
      HEAP[$entity + 32] = 0;
      
      
      if ($result != 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 80;
        break;
      }
     case 76:
      
      $0 = $result;
      __label__ = 81;
      break;
     case 77:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      
      
      
      HEAP[$parser_addr + 288] = $ptr_addr;
      __label__ = 79;
      break;
     case 79:
      $0 = 23;
      __label__ = 81;
      break;
     case 80:
      
      $ptr_addr = HEAP[$next];
      __label__ = 1;
      break;
     case 81:
      
      $retval = $0;
      var $retval98 = $retval;
      STACKTOP = __stackBase__;
      return $retval98;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _storeEntityValue($parser, $enc, $entityTextPtr, $entityTextEnd) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $entityTextPtr_addr;
      var $entityTextEnd_addr;
      var $retval;
      var $0;
      var $dtd;
      var $pool;
      var $result;
      var $oldInEntityValue;
      var $next = __stackBase__;
      var $tok;
      var $name;
      var $entity;
      var $buf = __stackBase__ + 4;
      var $i;
      var $n;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $entityTextPtr_addr = $entityTextPtr;
      $entityTextEnd_addr = $entityTextEnd;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      
      $pool = $dtd + 104;
      $result = 0;
      
      
      
      
      $oldInEntityValue = HEAP[$parser_addr + 256 + 20];
      
      
      
      HEAP[$parser_addr + 256 + 20] = 1;
      
      
      
      
      if (HEAP[$pool] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $18 = _poolGrow($pool);
      
      if ($18 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $buf39 = $buf;
      __label__ = 4;
      break;
     case 3:
      $0 = 1;
      __label__ = 57;
      break;
     case 4:
      
      
      
      var $23 = HEAP[$enc_addr + 16 + 4];
      
      
      
      var $27 = FUNCTION_TABLE[$23]($enc_addr, $entityTextPtr_addr, $entityTextEnd_addr, $next);
      $tok = $27;
      if ($27 == -4) {
        __label__ = 24;
        break;
      } else if ($27 == -3) {
        __label__ = 27;
        break;
      } else if ($27 == -1) {
        __label__ = 46;
        break;
      } else if ($27 == 0) {
        __label__ = 49;
        break;
      } else if ($27 == 6) {
        __label__ = 25;
        break;
      } else if ($27 == 7) {
        __label__ = 28;
        break;
      } else if ($27 == 9) {
        __label__ = 25;
        break;
      } else if ($27 == 10) {
        __label__ = 32;
        break;
      } else if ($27 == 28) {
        __label__ = 5;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$parser_addr + 488] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] != $enc_addr) {
        __label__ = 7;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 7:
      
      
      
      
      
      var $42 = HEAP[$next] + (0 - HEAP[$enc_addr + 68]);
      
      
      
      
      var $47 = $entityTextPtr_addr + HEAP[$enc_addr + 68];
      
      
      
      var $51 = _poolStoreString($parser_addr + 416, $enc_addr, $47, $42);
      $name = $51;
      
      if ($51 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $result = 1;
      __label__ = 56;
      break;
     case 9:
      
      
      
      var $56 = _lookup($dtd + 132, $name, 0);
      
      $entity = $56;
      
      
      
      var $61 = HEAP[$parser_addr + 416 + 16];
      
      
      
      HEAP[$parser_addr + 416 + 12] = $61;
      
      
      if ($entity == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      var $69 = HEAP[$dtd + 130];
      
      
      HEAP[$dtd + 128] = $69;
      __label__ = 56;
      break;
     case 11:
      
      
      
      
      if (HEAP[$entity + 32] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      HEAP[$parser_addr + 288] = $entityTextPtr_addr;
      __label__ = 14;
      break;
     case 14:
      $result = 12;
      __label__ = 56;
      break;
     case 15:
      
      
      
      
      if (HEAP[$entity + 16] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 16:
      
      
      
      
      var $92 = $dtd;
      if (HEAP[$parser_addr + 112] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 17:
      
      HEAP[$92 + 131] = 0;
      
      
      HEAP[$entity + 32] = 1;
      
      
      var $98 = HEAP[$parser_addr + 112];
      
      
      var $101 = HEAP[$entity + 24];
      
      
      var $104 = HEAP[$entity + 16];
      
      
      var $107 = HEAP[$entity + 20];
      
      
      var $110 = HEAP[$parser_addr + 116];
      var $111 = FUNCTION_TABLE[$98]($110, 0, $107, $104, $101);
      var $112 = $111 == 0;
      
      
      HEAP[$entity + 32] = 0;
      if ($112) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $result = 21;
      __label__ = 56;
      break;
     case 19:
      
      
      
      
      if (HEAP[$dtd + 131] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 20:
      
      
      var $121 = HEAP[$dtd + 130];
      
      
      HEAP[$dtd + 128] = $121;
      __label__ = 55;
      break;
     case 21:
      
      var $125 = HEAP[$92 + 130];
      
      
      HEAP[$dtd + 128] = $125;
      __label__ = 55;
      break;
     case 22:
      
      
      HEAP[$entity + 32] = 1;
      
      
      
      
      
      
      var $136 = HEAP[$entity + 4] + HEAP[$entity + 8];
      
      
      var $139 = HEAP[$entity + 4];
      
      
      var $142 = HEAP[$parser_addr + 228];
      
      var $144 = _storeEntityValue($parser_addr, $142, $139, $136);
      $result = $144;
      
      
      HEAP[$entity + 32] = 0;
      
      
      if ($result != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 23:
      
      
      
      HEAP[$parser_addr + 288] = $entityTextPtr_addr;
      $result = 10;
      __label__ = 56;
      break;
     case 24:
      $result = 0;
      __label__ = 56;
      break;
     case 25:
      var $152 = HEAP[$next];
      
      
      
      var $156 = _poolAppend($pool, $enc_addr, $entityTextPtr_addr, $152);
      
      if ($156 == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 26:
      $result = 1;
      __label__ = 56;
      break;
     case 27:
      
      
      
      
      var $162 = $entityTextPtr_addr + HEAP[$enc_addr + 68];
      HEAP[$next] = $162;
      __label__ = 28;
      break;
     case 28:
      
      
      
      
      
      
      
      if (HEAP[$pool + 8] == HEAP[$pool + 12]) {
        __label__ = 29;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 29:
      
      var $171 = _poolGrow($pool);
      
      if ($171 == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $result = 1;
      __label__ = 56;
      break;
     case 31:
      
      
      var $175 = HEAP[$pool + 12];
      HEAP[$175] = 10;
      var $176 = $175 + 1;
      
      
      HEAP[$pool + 12] = $176;
      __label__ = 55;
      break;
     case 32:
      
      
      var $181 = HEAP[$enc_addr + 44];
      
      
      var $184 = FUNCTION_TABLE[$181]($enc_addr, $entityTextPtr_addr);
      $n = $184;
      
      
      if ($n < 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 33:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      HEAP[$parser_addr + 288] = $entityTextPtr_addr;
      __label__ = 35;
      break;
     case 35:
      $result = 14;
      __label__ = 56;
      break;
     case 36:
      
      var $196 = _PyExpat_XmlUtf8Encode($n, $buf39);
      $n = $196;
      
      
      if ($n == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 37:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      
      HEAP[$parser_addr + 288] = $entityTextPtr_addr;
      __label__ = 39;
      break;
     case 39:
      $result = 14;
      __label__ = 56;
      break;
     case 40:
      $i = 0;
      __label__ = 45;
      break;
     case 41:
      
      
      
      
      
      
      
      if (HEAP[$pool + 8] == HEAP[$pool + 12]) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      var $215 = _poolGrow($pool);
      
      if ($215 == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      $result = 1;
      __label__ = 56;
      break;
     case 44:
      
      
      var $219 = HEAP[$pool + 12];
      
      
      var $222 = HEAP[$buf + $i];
      HEAP[$219] = $222;
      var $223 = $219 + 1;
      
      
      HEAP[$pool + 12] = $223;
      
      var $227 = $i + 1;
      $i = $227;
      __label__ = 45;
      break;
     case 45:
      
      
      
      if ($i < $n) {
        __label__ = 41;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 46:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      
      HEAP[$parser_addr + 288] = $entityTextPtr_addr;
      __label__ = 48;
      break;
     case 48:
      $result = 4;
      __label__ = 56;
      break;
     case 49:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      var $244 = HEAP[$next];
      
      
      HEAP[$parser_addr + 288] = $244;
      __label__ = 51;
      break;
     case 51:
      $result = 4;
      __label__ = 56;
      break;
     case 52:
      
      
      
      
      
      if (HEAP[$parser_addr + 144] == $enc_addr) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      HEAP[$parser_addr + 288] = $entityTextPtr_addr;
      __label__ = 54;
      break;
     case 54:
      $result = 23;
      __label__ = 56;
      break;
     case 55:
      
      $entityTextPtr_addr = HEAP[$next];
      __label__ = 4;
      break;
     case 56:
      
      
      
      
      HEAP[$parser_addr + 256 + 20] = $oldInEntityValue;
      
      $0 = $result;
      __label__ = 57;
      break;
     case 57:
      
      $retval = $0;
      var $retval61 = $retval;
      STACKTOP = __stackBase__;
      return $retval61;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normalizeLines($s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $p;
      $s_addr = $s;
      __label__ = 1;
      break;
     case 1:
      
      
      
      if (HEAP[$s_addr] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $6 = $s_addr;
      if (HEAP[$s_addr] == 13) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = $6 + 1;
      $s_addr = $7;
      __label__ = 1;
      break;
     case 4:
      $p = $6;
      __label__ = 5;
      break;
     case 5:
      
      
      
      if (HEAP[$s_addr] == 13) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      HEAP[$p] = 10;
      
      var $13 = $p + 1;
      $p = $13;
      
      var $15 = $s_addr + 1;
      $s_addr = $15;
      
      
      
      if (HEAP[$s_addr] == 10) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      var $20 = $s_addr + 1;
      $s_addr = $20;
      __label__ = 9;
      break;
     case 8:
      
      var $22 = HEAP[$s_addr];
      
      HEAP[$p] = $22;
      
      var $25 = $p + 1;
      $p = $25;
      
      var $27 = $s_addr + 1;
      $s_addr = $27;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$s_addr] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      HEAP[$p] = 0;
      __label__ = 11;
      break;
     case 11:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _reportProcessingInstruction($parser, $enc, $start, $end) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $start_addr;
      var $end_addr;
      var $retval;
      var $0;
      var $target;
      var $data;
      var $tem;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $start_addr = $start;
      $end_addr = $end;
      
      
      
      
      if (HEAP[$parser_addr + 64] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      _reportDefault($parser_addr, $enc_addr, $start_addr, $end_addr);
      __label__ = 3;
      break;
     case 3:
      $0 = 1;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      
      var $18 = $start_addr + HEAP[$enc_addr + 68] * 2;
      $start_addr = $18;
      
      
      var $21 = HEAP[$enc_addr + 32];
      
      
      var $24 = FUNCTION_TABLE[$21]($enc_addr, $start_addr);
      
      
      $tem = $start_addr + $24;
      
      
      
      
      
      var $32 = _poolStoreString($parser_addr + 416, $enc_addr, $start_addr, $tem);
      $target = $32;
      
      
      if ($target == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      
      var $38 = HEAP[$parser_addr + 416 + 12];
      
      
      
      HEAP[$parser_addr + 416 + 16] = $38;
      
      
      
      var $45 = HEAP[$enc_addr + 68] * -2;
      
      var $47 = $end_addr + $45;
      
      
      var $50 = HEAP[$enc_addr + 36];
      
      
      var $53 = FUNCTION_TABLE[$50]($enc_addr, $tem);
      
      
      
      var $57 = _poolStoreString($parser_addr + 416, $enc_addr, $53, $47);
      $data = $57;
      
      
      if ($data == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      
      _normalizeLines($data);
      
      
      var $63 = HEAP[$parser_addr + 64];
      
      
      var $66 = HEAP[$parser_addr + 4];
      
      
      FUNCTION_TABLE[$63]($66, $target, $data);
      
      
      _poolClear($parser_addr + 416);
      $0 = 1;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _reportComment($parser, $enc, $start, $end) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $start_addr;
      var $end_addr;
      var $retval;
      var $0;
      var $data;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $start_addr = $start;
      $end_addr = $end;
      
      
      
      
      if (HEAP[$parser_addr + 68] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$parser_addr + 80] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      _reportDefault($parser_addr, $enc_addr, $start_addr, $end_addr);
      __label__ = 3;
      break;
     case 3:
      $0 = 1;
      __label__ = 7;
      break;
     case 4:
      
      
      
      var $16 = HEAP[$enc_addr + 68] * -3;
      
      var $18 = $end_addr + $16;
      
      
      
      
      
      var $24 = $start_addr + HEAP[$enc_addr + 68] * 4;
      
      
      
      var $28 = _poolStoreString($parser_addr + 416, $enc_addr, $24, $18);
      $data = $28;
      
      
      if ($data == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      _normalizeLines($data);
      
      
      var $34 = HEAP[$parser_addr + 68];
      
      
      var $37 = HEAP[$parser_addr + 4];
      
      FUNCTION_TABLE[$34]($37, $data);
      
      
      _poolClear($parser_addr + 416);
      $0 = 1;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _reportDefault($parser, $enc, $s, $end) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $s_addr = __stackBase__;
      var $end_addr;
      var $eventPP;
      var $eventEndPP;
      var $dataPtr = __stackBase__ + 4;
      $parser_addr = $parser;
      $enc_addr = $enc;
      HEAP[$s_addr] = $s;
      $end_addr = $end;
      
      
      
      
      var $4 = $parser_addr;
      if (HEAP[$enc_addr + 72] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      var $9 = $parser_addr;
      if (HEAP[$4 + 144] == $enc_addr) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $eventPP = $9 + 288;
      
      
      $eventEndPP = $parser_addr + 292;
      __label__ = 4;
      break;
     case 3:
      
      
      
      $eventPP = HEAP[$9 + 300];
      
      
      
      
      $eventEndPP = HEAP[$parser_addr + 300] + 4;
      __label__ = 4;
      break;
     case 4:
      
      
      var $22 = HEAP[$parser_addr + 44];
      HEAP[$dataPtr] = $22;
      
      
      var $25 = HEAP[$enc_addr + 60];
      
      
      var $28 = HEAP[$parser_addr + 48];
      
      
      FUNCTION_TABLE[$25]($enc_addr, $s_addr, $end_addr, $dataPtr, $28);
      var $31 = HEAP[$s_addr];
      
      HEAP[$eventEndPP] = $31;
      
      
      var $35 = HEAP[$parser_addr + 80];
      
      
      
      
      
      
      var $42 = HEAP[$dataPtr] - HEAP[$parser_addr + 44];
      
      
      var $45 = HEAP[$parser_addr + 44];
      
      
      var $48 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$35]($48, $45, $42);
      var $49 = HEAP[$s_addr];
      
      HEAP[$eventPP] = $49;
      
      
      
      if (HEAP[$s_addr] != $end_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $55 = HEAP[$4 + 80];
      
      
      
      
      var $60 = $end_addr - HEAP[$s_addr];
      var $61 = HEAP[$s_addr];
      
      
      var $64 = HEAP[$parser_addr + 4];
      FUNCTION_TABLE[$55]($64, $61, $60);
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _defineAttribute($type, $attId, $isCdata, $isId, $value, $parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $attId_addr;
      var $isCdata_addr;
      var $isId_addr;
      var $value_addr;
      var $parser_addr;
      var $retval;
      var $0;
      var $att;
      var $i;
      var $temp;
      var $count;
      $type_addr = $type;
      $attId_addr = $attId;
      $isCdata_addr = $isCdata;
      $isId_addr = $isId;
      $value_addr = $value;
      $parser_addr = $parser;
      
      
      if ($value_addr != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($isId_addr != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 2:
      $i = 0;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$type_addr + 20] + 12 * $i] == $attId_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 1;
      __label__ = 21;
      break;
     case 5:
      
      var $15 = $i + 1;
      $i = $15;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      if (HEAP[$type_addr + 12] > $i) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if ($isId_addr != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      if (HEAP[$type_addr + 8] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[$attId_addr + 9] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      HEAP[$type_addr + 8] = $attId_addr;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      
      
      if (HEAP[$type_addr + 12] == HEAP[$type_addr + 16]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 12:
      
      
      
      
      
      var $46 = $type_addr + 16;
      if (HEAP[$type_addr + 16] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      HEAP[$46] = 8;
      
      
      
      var $50 = HEAP[$parser_addr + 12];
      
      
      
      var $54 = HEAP[$type_addr + 16] * 12;
      var $55 = FUNCTION_TABLE[$50]($54);
      var $56 = $55;
      
      
      HEAP[$type_addr + 20] = $56;
      
      
      
      
      if (HEAP[$type_addr + 20] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 21;
      break;
     case 15:
      
      
      $count = HEAP[$46] * 2;
      
      
      
      var $68 = HEAP[$parser_addr + 12 + 4];
      
      
      
      
      
      var $74 = HEAP[$type_addr + 20];
      var $75 = FUNCTION_TABLE[$68]($74, $count * 12);
      
      $temp = $75;
      
      
      if ($temp == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = 0;
      __label__ = 21;
      break;
     case 17:
      
      
      
      HEAP[$type_addr + 16] = $count;
      
      
      
      HEAP[$type_addr + 20] = $temp;
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      
      
      
      $att = HEAP[$type_addr + 20] + 12 * HEAP[$type_addr + 12];
      
      
      
      HEAP[$att] = $attId_addr;
      
      
      
      HEAP[$att + 8] = $value_addr;
      
      
      
      HEAP[$att + 4] = $isCdata_addr;
      
      
      if ($isCdata_addr == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      HEAP[$attId_addr + 8] = 1;
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $108 = HEAP[$type_addr + 12] + 1;
      
      
      HEAP[$type_addr + 12] = $108;
      $0 = 1;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _setElementTypePrefix($parser, $elementType) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $elementType_addr;
      var $retval;
      var $iftmp_278;
      var $0;
      var $iftmp_277;
      var $dtd;
      var $name;
      var $prefix;
      var $s;
      $parser_addr = $parser;
      $elementType_addr = $elementType;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      
      
      $name = HEAP[$elementType_addr];
      __label__ = 18;
      break;
     case 1:
      
      
      
      if (HEAP[$name] == 58) {
        __label__ = 2;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 2:
      
      
      
      $s = HEAP[$elementType_addr];
      __label__ = 7;
      break;
     case 3:
      if ($40) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $15 = _poolGrow($dtd + 80);
      
      if ($15 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $iftmp_277 = 1;
      $0 = 0;
      __label__ = 20;
      break;
     case 6:
      
      
      
      var $20 = HEAP[$dtd + 80 + 12];
      
      var $22 = HEAP[$s];
      HEAP[$20] = $22;
      var $23 = $20 + 1;
      
      
      
      HEAP[$dtd + 80 + 12] = $23;
      $iftmp_277 = 0;
      
      var $28 = $s + 1;
      $s = $28;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      
      
      var $40 = HEAP[$dtd + 80 + 12] != HEAP[$dtd + 80 + 8];
      if ($s != $name) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      if ($40) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $43 = _poolGrow($dtd + 80);
      
      if ($43 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      $iftmp_278 = 1;
      $0 = 0;
      __label__ = 20;
      break;
     case 11:
      
      
      
      var $48 = HEAP[$dtd + 80 + 12];
      HEAP[$48] = 0;
      var $49 = $48 + 1;
      
      
      
      HEAP[$dtd + 80 + 12] = $49;
      $iftmp_278 = 0;
      
      
      
      var $56 = HEAP[$dtd + 80 + 16];
      
      
      var $59 = _lookup($dtd + 60, $56, 8);
      
      $prefix = $59;
      
      if ($59 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 20;
      break;
     case 13:
      
      
      
      
      
      
      
      
      
      var $71 = $dtd + 80;
      if (HEAP[$prefix] == HEAP[$dtd + 80 + 16]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $73 = HEAP[$71 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $73;
      __label__ = 16;
      break;
     case 15:
      
      var $78 = HEAP[$71 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $78;
      __label__ = 16;
      break;
     case 16:
      
      
      
      HEAP[$elementType_addr + 4] = $prefix;
      __label__ = 17;
      break;
     case 17:
      
      var $86 = $name + 1;
      $name = $86;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if (HEAP[$name] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      $0 = 1;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getAttributeId($parser, $enc, $start, $end) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $start_addr;
      var $end_addr;
      var $retval;
      var $iftmp_281;
      var $iftmp_280;
      var $0;
      var $iftmp_279;
      var $dtd;
      var $id;
      var $name;
      var $i;
      var $j;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $start_addr = $start;
      $end_addr = $end;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      
      
      
      
      
      
      
      
      if (HEAP[$dtd + 80 + 12] != HEAP[$dtd + 80 + 8]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $15 = _poolGrow($dtd + 80);
      
      if ($15 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_279 = 1;
      $0 = 0;
      __label__ = 40;
      break;
     case 3:
      
      
      
      var $20 = HEAP[$dtd + 80 + 12];
      HEAP[$20] = 0;
      var $21 = $20 + 1;
      
      
      
      HEAP[$dtd + 80 + 12] = $21;
      $iftmp_279 = 0;
      
      
      
      
      
      var $30 = _poolStoreString($dtd + 80, $enc_addr, $start_addr, $end_addr);
      $name = $30;
      
      if ($30 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 40;
      break;
     case 5:
      
      var $33 = $name + 1;
      $name = $33;
      
      
      
      var $37 = _lookup($dtd + 40, $name, 12);
      
      $id = $37;
      
      
      if ($id == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 40;
      break;
     case 7:
      
      
      
      
      
      
      var $47 = $dtd + 80;
      if (HEAP[$id] != $name) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $49 = HEAP[$47 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $49;
      __label__ = 39;
      break;
     case 9:
      
      var $54 = HEAP[$47 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $54;
      
      
      
      
      if (HEAP[$parser_addr + 236] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[$name] != 120) {
        __label__ = 21;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[$name + 1] != 109) {
        __label__ = 21;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      if (HEAP[$name + 2] != 108) {
        __label__ = 21;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      if (HEAP[$name + 3] != 110) {
        __label__ = 21;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      if (HEAP[$name + 4] != 115) {
        __label__ = 21;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$name + 5] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      if (HEAP[$name + 5] == 58) {
        __label__ = 17;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 17:
      
      
      
      
      if (HEAP[$name + 5] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      HEAP[$id + 4] = $dtd + 152;
      __label__ = 20;
      break;
     case 19:
      
      
      
      
      var $102 = _lookup($dtd + 60, $name + 6, 8);
      
      
      
      HEAP[$id + 4] = $102;
      __label__ = 20;
      break;
     case 20:
      
      
      HEAP[$id + 9] = 1;
      __label__ = 39;
      break;
     case 21:
      $i = 0;
      __label__ = 38;
      break;
     case 22:
      
      
      
      
      
      if (HEAP[$name + $i] == 58) {
        __label__ = 23;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 23:
      $j = 0;
      __label__ = 28;
      break;
     case 24:
      if ($142) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      var $115 = _poolGrow($dtd + 80);
      
      if ($115 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      $iftmp_280 = 1;
      $0 = 0;
      __label__ = 40;
      break;
     case 27:
      
      
      
      var $120 = HEAP[$dtd + 80 + 12];
      
      
      
      var $124 = HEAP[$name + $j];
      HEAP[$120] = $124;
      var $125 = $120 + 1;
      
      
      
      HEAP[$dtd + 80 + 12] = $125;
      $iftmp_280 = 0;
      
      var $130 = $j + 1;
      $j = $130;
      __label__ = 28;
      break;
     case 28:
      
      
      
      
      
      
      
      
      
      
      
      var $142 = HEAP[$dtd + 80 + 12] != HEAP[$dtd + 80 + 8];
      if ($j < $i) {
        __label__ = 24;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      if ($142) {
        __label__ = 32;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      var $145 = _poolGrow($dtd + 80);
      
      if ($145 != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      $iftmp_281 = 1;
      $0 = 0;
      __label__ = 40;
      break;
     case 32:
      
      
      
      var $150 = HEAP[$dtd + 80 + 12];
      HEAP[$150] = 0;
      var $151 = $150 + 1;
      
      
      
      HEAP[$dtd + 80 + 12] = $151;
      $iftmp_281 = 0;
      
      
      
      var $158 = HEAP[$dtd + 80 + 16];
      
      
      var $161 = _lookup($dtd + 60, $158, 8);
      var $162 = $161;
      
      
      HEAP[$id + 4] = $162;
      
      
      
      
      if (HEAP[$id + 4] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      $0 = 0;
      __label__ = 40;
      break;
     case 34:
      
      
      
      
      
      
      
      
      
      
      
      var $180 = $dtd + 80;
      if (HEAP[HEAP[$id + 4]] == HEAP[$dtd + 80 + 16]) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      var $182 = HEAP[$180 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $182;
      __label__ = 39;
      break;
     case 36:
      
      var $187 = HEAP[$180 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $187;
      __label__ = 39;
      break;
     case 37:
      
      var $192 = $i + 1;
      $i = $192;
      __label__ = 38;
      break;
     case 38:
      
      
      
      
      
      if (HEAP[$name + $i] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      $0 = $id;
      __label__ = 40;
      break;
     case 40:
      
      $retval = $0;
      var $retval52 = $retval;
      return $retval52;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getContext($parser) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $iftmp_290;
      var $iftmp_289;
      var $iftmp_288;
      var $iftmp_287;
      var $iftmp_286;
      var $iftmp_285;
      var $iftmp_284;
      var $iftmp_283;
      var $0;
      var $iftmp_282;
      var $dtd;
      var $iter = __stackBase__;
      var $needSep;
      var $i;
      var $len;
      var $i21;
      var $len22;
      var $s;
      var $prefix;
      var $s65;
      var $e;
      $parser_addr = $parser;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      $needSep = 0;
      
      
      
      
      
      if (HEAP[$dtd + 152 + 4] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $20 = _poolGrow($parser_addr + 416);
      
      if ($20 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_282 = 1;
      $0 = 0;
      __label__ = 58;
      break;
     case 4:
      
      
      
      var $25 = HEAP[$parser_addr + 416 + 12];
      HEAP[$25] = 61;
      var $26 = $25 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $26;
      $iftmp_282 = 0;
      
      
      
      
      
      
      $len = HEAP[HEAP[$dtd + 152 + 4] + 20];
      
      
      
      
      if (HEAP[$parser_addr + 472] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $41 = $len - 1;
      $len = $41;
      __label__ = 6;
      break;
     case 6:
      $i = 0;
      __label__ = 11;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $53 = _poolGrow($parser_addr + 416);
      
      if ($53 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      $iftmp_283 = 1;
      $0 = 0;
      __label__ = 58;
      break;
     case 10:
      
      
      
      var $58 = HEAP[$parser_addr + 416 + 12];
      
      
      
      
      
      
      
      
      var $67 = HEAP[HEAP[HEAP[$dtd + 152 + 4] + 16] + $i];
      HEAP[$58] = $67;
      var $68 = $58 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $68;
      $iftmp_283 = 0;
      
      var $73 = $i + 1;
      $i = $73;
      __label__ = 11;
      break;
     case 11:
      
      
      
      if ($i < $len) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      $needSep = 1;
      __label__ = 13;
      break;
     case 13:
      
      
      _hashTableIterInit($iter, $dtd + 60);
      __label__ = 14;
      break;
     case 14:
      var $79 = _hashTableIterNext($iter);
      
      $prefix = $79;
      
      if ($79 == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      if (HEAP[$prefix + 4] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      if ($needSep != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 17:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      var $99 = _poolGrow($parser_addr + 416);
      
      if ($99 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      var $104 = HEAP[$parser_addr + 416 + 12];
      HEAP[$104] = 12;
      var $105 = $104 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $105;
      $iftmp_284 = 0;
      __label__ = 21;
      break;
     case 20:
      $iftmp_284 = 1;
      $0 = 0;
      __label__ = 58;
      break;
     case 21:
      
      
      
      $s = HEAP[$prefix];
      __label__ = 26;
      break;
     case 22:
      if ($139) {
        __label__ = 25;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $114 = _poolGrow($parser_addr + 416);
      
      if ($114 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      $iftmp_285 = 1;
      $0 = 0;
      __label__ = 58;
      break;
     case 25:
      
      
      
      var $119 = HEAP[$parser_addr + 416 + 12];
      
      var $121 = HEAP[$s];
      HEAP[$119] = $121;
      var $122 = $119 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $122;
      $iftmp_285 = 0;
      
      var $127 = $s + 1;
      $s = $127;
      __label__ = 26;
      break;
     case 26:
      
      
      
      
      
      
      
      
      
      
      
      var $139 = HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8];
      if (HEAP[$s] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      if ($139) {
        __label__ = 30;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      var $142 = _poolGrow($parser_addr + 416);
      
      if ($142 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      $iftmp_286 = 1;
      $0 = 0;
      __label__ = 58;
      break;
     case 30:
      
      
      
      var $147 = HEAP[$parser_addr + 416 + 12];
      HEAP[$147] = 61;
      var $148 = $147 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $148;
      $iftmp_286 = 0;
      
      
      
      
      
      $len22 = HEAP[HEAP[$prefix + 4] + 20];
      
      
      
      
      if (HEAP[$parser_addr + 472] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      var $162 = $len22 - 1;
      $len22 = $162;
      __label__ = 32;
      break;
     case 32:
      $i21 = 0;
      __label__ = 37;
      break;
     case 33:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 36;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      var $174 = _poolGrow($parser_addr + 416);
      
      if ($174 != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      $iftmp_287 = 1;
      $0 = 0;
      __label__ = 58;
      break;
     case 36:
      
      
      
      var $179 = HEAP[$parser_addr + 416 + 12];
      
      
      
      
      
      
      
      var $187 = HEAP[HEAP[HEAP[$prefix + 4] + 16] + $i21];
      HEAP[$179] = $187;
      var $188 = $179 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $188;
      $iftmp_287 = 0;
      
      var $193 = $i21 + 1;
      $i21 = $193;
      __label__ = 37;
      break;
     case 37:
      
      
      
      if ($i21 < $len22) {
        __label__ = 33;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      $needSep = 1;
      __label__ = 14;
      break;
     case 39:
      
      
      _hashTableIterInit($iter, $dtd);
      __label__ = 40;
      break;
     case 40:
      var $199 = _hashTableIterNext($iter);
      
      $e = $199;
      
      if ($199 == 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      
      
      
      if (HEAP[$e + 32] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      if ($needSep != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 43:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 45;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      var $219 = _poolGrow($parser_addr + 416);
      
      if ($219 != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      var $224 = HEAP[$parser_addr + 416 + 12];
      HEAP[$224] = 12;
      var $225 = $224 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $225;
      $iftmp_288 = 0;
      __label__ = 47;
      break;
     case 46:
      $iftmp_288 = 1;
      $0 = 0;
      __label__ = 58;
      break;
     case 47:
      
      
      
      $s65 = HEAP[$e];
      __label__ = 52;
      break;
     case 48:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 51;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      
      var $243 = _poolGrow($parser_addr + 416);
      
      if ($243 != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      $iftmp_289 = 1;
      $0 = 0;
      __label__ = 58;
      break;
     case 51:
      
      
      
      var $248 = HEAP[$parser_addr + 416 + 12];
      
      var $250 = HEAP[$s65];
      HEAP[$248] = $250;
      var $251 = $248 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $251;
      $iftmp_289 = 0;
      
      var $256 = $s65 + 1;
      $s65 = $256;
      __label__ = 52;
      break;
     case 52:
      
      
      
      if (HEAP[$s65] != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 53:
      $needSep = 1;
      __label__ = 40;
      break;
     case 54:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 57;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      var $271 = _poolGrow($parser_addr + 416);
      
      if ($271 != 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 56:
      $iftmp_290 = 1;
      $0 = 0;
      __label__ = 58;
      break;
     case 57:
      
      
      
      var $276 = HEAP[$parser_addr + 416 + 12];
      HEAP[$276] = 0;
      var $277 = $276 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $277;
      $iftmp_290 = 0;
      
      
      
      
      $0 = HEAP[$parser_addr + 416 + 16];
      __label__ = 58;
      break;
     case 58:
      
      $retval = $0;
      var $retval96 = $retval;
      STACKTOP = __stackBase__;
      return $retval96;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _setContext($parser, $context) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $context_addr;
      var $retval;
      var $iftmp_295;
      var $iftmp_294;
      var $iftmp_293;
      var $iftmp_292;
      var $0;
      var $iftmp_291;
      var $dtd;
      var $s;
      var $e;
      var $prefix;
      $parser_addr = $parser;
      $context_addr = $context;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      $s = $context_addr;
      __label__ = 42;
      break;
     case 1:
      
      
      
      if (HEAP[$s] == 12) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$s] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $22 = _poolGrow($parser_addr + 416);
      
      if ($22 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $iftmp_291 = 1;
      $0 = 0;
      __label__ = 44;
      break;
     case 6:
      
      
      
      var $27 = HEAP[$parser_addr + 416 + 12];
      HEAP[$27] = 0;
      var $28 = $27 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $28;
      $iftmp_291 = 0;
      
      
      
      var $35 = HEAP[$parser_addr + 416 + 16];
      
      
      var $38 = _lookup($dtd, $35, 0);
      
      $e = $38;
      
      if ($38 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      HEAP[$e + 32] = 1;
      __label__ = 8;
      break;
     case 8:
      
      
      
      if (HEAP[$s] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $47 = $s + 1;
      $s = $47;
      __label__ = 10;
      break;
     case 10:
      
      $context_addr = $s;
      
      
      
      var $52 = HEAP[$parser_addr + 416 + 16];
      
      
      
      HEAP[$parser_addr + 416 + 12] = $52;
      __label__ = 42;
      break;
     case 11:
      
      
      
      
      
      
      var $62 = HEAP[$parser_addr + 416 + 12];
      
      var $64 = $parser_addr + 416;
      if (HEAP[$s] == 61) {
        __label__ = 12;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 12:
      
      
      
      if ($62 == HEAP[$64 + 16]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      $prefix = $dtd + 152;
      __label__ = 23;
      break;
     case 14:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $81 = _poolGrow($parser_addr + 416);
      
      if ($81 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      $iftmp_292 = 1;
      $0 = 0;
      __label__ = 44;
      break;
     case 17:
      
      
      
      var $86 = HEAP[$parser_addr + 416 + 12];
      HEAP[$86] = 0;
      var $87 = $86 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $87;
      $iftmp_292 = 0;
      
      
      
      var $94 = HEAP[$parser_addr + 416 + 16];
      
      
      var $97 = _lookup($dtd + 60, $94, 8);
      
      $prefix = $97;
      
      if ($97 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = 0;
      __label__ = 44;
      break;
     case 19:
      
      
      
      
      
      
      
      
      if (HEAP[$prefix] == HEAP[$parser_addr + 416 + 16]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      var $110 = HEAP[$prefix];
      
      
      var $113 = _poolCopyString($dtd + 80, $110);
      
      
      HEAP[$prefix] = $113;
      
      
      
      
      if (HEAP[$prefix] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $0 = 0;
      __label__ = 44;
      break;
     case 22:
      
      
      
      var $123 = HEAP[$parser_addr + 416 + 16];
      
      
      
      HEAP[$parser_addr + 416 + 12] = $123;
      __label__ = 23;
      break;
     case 23:
      
      
      $context_addr = $s + 1;
      __label__ = 28;
      break;
     case 24:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 27;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 25:
      
      
      var $140 = _poolGrow($parser_addr + 416);
      
      if ($140 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      $iftmp_293 = 1;
      $0 = 0;
      __label__ = 44;
      break;
     case 27:
      
      
      
      var $145 = HEAP[$parser_addr + 416 + 12];
      
      var $147 = HEAP[$context_addr];
      HEAP[$145] = $147;
      var $148 = $145 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $148;
      $iftmp_293 = 0;
      
      var $153 = $context_addr + 1;
      $context_addr = $153;
      __label__ = 28;
      break;
     case 28:
      
      
      
      if (HEAP[$context_addr] == 12) {
        __label__ = 30;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      
      if (HEAP[$context_addr] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      
      
      
      
      
      
      if (HEAP[$parser_addr + 416 + 12] != HEAP[$parser_addr + 416 + 8]) {
        __label__ = 33;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $171 = _poolGrow($parser_addr + 416);
      
      if ($171 != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      $iftmp_294 = 1;
      $0 = 0;
      __label__ = 44;
      break;
     case 33:
      
      
      
      var $176 = HEAP[$parser_addr + 416 + 12];
      HEAP[$176] = 0;
      var $177 = $176 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $177;
      $iftmp_294 = 0;
      
      
      
      
      
      var $186 = HEAP[$parser_addr + 416 + 16];
      
      
      var $189 = _addBinding($parser_addr, $prefix, 0, $186, $parser_addr + 372);
      
      if ($189 != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      $0 = 0;
      __label__ = 44;
      break;
     case 35:
      
      
      
      var $194 = HEAP[$parser_addr + 416 + 16];
      
      
      
      HEAP[$parser_addr + 416 + 12] = $194;
      
      
      
      if (HEAP[$context_addr] != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      var $202 = $context_addr + 1;
      $context_addr = $202;
      __label__ = 37;
      break;
     case 37:
      
      $s = $context_addr;
      __label__ = 42;
      break;
     case 38:
      
      
      
      if ($62 != HEAP[$64 + 8]) {
        __label__ = 41;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      var $209 = _poolGrow($parser_addr + 416);
      
      if ($209 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      $iftmp_295 = 1;
      $0 = 0;
      __label__ = 44;
      break;
     case 41:
      
      
      
      var $214 = HEAP[$parser_addr + 416 + 12];
      
      var $216 = HEAP[$s];
      HEAP[$214] = $216;
      var $217 = $214 + 1;
      
      
      
      HEAP[$parser_addr + 416 + 12] = $217;
      $iftmp_295 = 0;
      
      var $222 = $s + 1;
      $s = $222;
      __label__ = 42;
      break;
     case 42:
      
      
      
      if (HEAP[$context_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      $0 = 1;
      __label__ = 44;
      break;
     case 44:
      
      $retval = $0;
      
      var $retval6364 = $retval & 255;
      return $retval6364;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normalizePublicId($publicId) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $publicId_addr;
      var $p;
      var $s;
      $publicId_addr = $publicId;
      
      $p = $publicId_addr;
      
      $s = $publicId_addr;
      
      
      
      if (HEAP[$s] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$s];
      if ($7 == 10) {
        __label__ = 2;
        break;
      } else if ($7 == 13) {
        __label__ = 2;
        break;
      } else if ($7 == 32) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      if ($p != $publicId_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $12 = $p + -1;
      
      
      if (HEAP[$12] != 32) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      HEAP[$p] = 32;
      
      var $17 = $p + 1;
      $p = $17;
      __label__ = 6;
      break;
     case 5:
      
      var $19 = HEAP[$s];
      
      HEAP[$p] = $19;
      
      var $22 = $p + 1;
      $p = $22;
      __label__ = 6;
      break;
     case 6:
      
      var $24 = $s + 1;
      $s = $24;
      
      
      
      if (HEAP[$s] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if ($p != $publicId_addr) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      var $32 = $p + -1;
      
      
      if (HEAP[$32] == 32) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $36 = $p + -1;
      $p = $36;
      __label__ = 10;
      break;
     case 10:
      
      HEAP[$p] = 0;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dtdCreate($ms) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $ms_addr;
      var $retval;
      var $0;
      var $p;
      $ms_addr = $ms;
      
      
      var $3 = HEAP[$ms_addr];
      var $4 = FUNCTION_TABLE[$3](188);
      
      $p = $4;
      
      
      var $8 = $p;
      if ($p == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = $8;
      __label__ = 3;
      break;
     case 2:
      
      
      _poolInit($8 + 80, $ms_addr);
      
      
      
      _poolInit($p + 104, $ms_addr);
      
      
      
      _hashTableInit($p, $ms_addr);
      
      
      
      _hashTableInit($p + 20, $ms_addr);
      
      
      
      _hashTableInit($p + 40, $ms_addr);
      
      
      
      _hashTableInit($p + 60, $ms_addr);
      
      
      HEAP[$p + 131] = 0;
      
      
      
      _hashTableInit($p + 132, $ms_addr);
      
      
      
      HEAP[$p + 152] = 0;
      
      
      
      HEAP[$p + 152 + 4] = 0;
      
      
      HEAP[$p + 160] = 0;
      
      
      HEAP[$p + 184] = 0;
      
      
      HEAP[$p + 164] = 0;
      
      
      HEAP[$p + 180] = 0;
      
      
      HEAP[$p + 172] = 0;
      
      
      HEAP[$p + 176] = 0;
      
      
      HEAP[$p + 168] = 0;
      
      
      HEAP[$p + 128] = 1;
      
      
      HEAP[$p + 129] = 0;
      
      
      HEAP[$p + 130] = 0;
      
      $0 = $p;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dtdReset($p, $ms) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $ms_addr;
      var $iter = __stackBase__;
      var $e;
      $p_addr = $p;
      $ms_addr = $ms;
      
      
      _hashTableIterInit($iter, $p_addr + 20);
      var $2 = _hashTableIterNext($iter);
      
      $e = $2;
      
      if ($2 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$e + 16] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[$ms_addr + 8];
      
      
      
      var $15 = HEAP[$e + 20];
      FUNCTION_TABLE[$11]($15);
      __label__ = 3;
      break;
     case 3:
      var $16 = _hashTableIterNext($iter);
      
      $e = $16;
      
      if ($16 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 4:
      
      
      _hashTableClear($p_addr);
      
      
      HEAP[$p_addr + 131] = 0;
      
      
      _hashTableClear($p_addr + 132);
      
      
      _hashTableClear($p_addr + 20);
      
      
      _hashTableClear($p_addr + 40);
      
      
      _hashTableClear($p_addr + 60);
      
      
      _poolClear($p_addr + 80);
      
      
      _poolClear($p_addr + 104);
      
      
      
      HEAP[$p_addr + 152] = 0;
      
      
      
      HEAP[$p_addr + 152 + 4] = 0;
      
      
      HEAP[$p_addr + 160] = 0;
      
      
      var $45 = HEAP[$ms_addr + 8];
      
      
      
      var $49 = HEAP[$p_addr + 184];
      FUNCTION_TABLE[$45]($49);
      
      
      HEAP[$p_addr + 184] = 0;
      
      
      var $54 = HEAP[$ms_addr + 8];
      
      
      
      var $58 = HEAP[$p_addr + 164];
      FUNCTION_TABLE[$54]($58);
      
      
      HEAP[$p_addr + 164] = 0;
      
      
      HEAP[$p_addr + 180] = 0;
      
      
      HEAP[$p_addr + 172] = 0;
      
      
      HEAP[$p_addr + 176] = 0;
      
      
      HEAP[$p_addr + 168] = 0;
      
      
      HEAP[$p_addr + 128] = 1;
      
      
      HEAP[$p_addr + 129] = 0;
      
      
      HEAP[$p_addr + 130] = 0;
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dtdDestroy($p, $isDocEntity, $ms) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $isDocEntity_addr;
      var $ms_addr;
      var $iter = __stackBase__;
      var $e;
      $p_addr = $p;
      $isDocEntity_addr = $isDocEntity;
      $ms_addr = $ms;
      
      
      _hashTableIterInit($iter, $p_addr + 20);
      var $2 = _hashTableIterNext($iter);
      
      $e = $2;
      
      if ($2 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$e + 16] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[$ms_addr + 8];
      
      
      
      var $15 = HEAP[$e + 20];
      FUNCTION_TABLE[$11]($15);
      __label__ = 3;
      break;
     case 3:
      var $16 = _hashTableIterNext($iter);
      
      $e = $16;
      
      if ($16 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 4:
      
      
      _hashTableDestroy($p_addr);
      
      
      _hashTableDestroy($p_addr + 132);
      
      
      _hashTableDestroy($p_addr + 20);
      
      
      _hashTableDestroy($p_addr + 40);
      
      
      _hashTableDestroy($p_addr + 60);
      
      
      _poolDestroy($p_addr + 80);
      
      
      _poolDestroy($p_addr + 104);
      
      
      if ($isDocEntity_addr != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $37 = HEAP[$ms_addr + 8];
      
      
      
      var $41 = HEAP[$p_addr + 184];
      FUNCTION_TABLE[$37]($41);
      
      
      var $44 = HEAP[$ms_addr + 8];
      
      
      
      var $48 = HEAP[$p_addr + 164];
      FUNCTION_TABLE[$44]($48);
      __label__ = 6;
      break;
     case 6:
      
      
      var $51 = HEAP[$ms_addr + 8];
      
      
      FUNCTION_TABLE[$51]($p_addr);
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _dtdCopy($newDtd, $oldDtd, $ms) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $newDtd_addr;
      var $oldDtd_addr;
      var $ms_addr;
      var $retval;
      var $iftmp_296;
      var $0;
      var $iter = __stackBase__;
      var $name;
      var $oldP;
      var $newA;
      var $name8;
      var $oldA;
      var $i;
      var $newE;
      var $name26;
      var $oldE;
      $newDtd_addr = $newDtd;
      $oldDtd_addr = $oldDtd;
      $ms_addr = $ms;
      
      
      _hashTableIterInit($iter, $oldDtd_addr + 60);
      __label__ = 1;
      break;
     case 1:
      var $3 = _hashTableIterNext($iter);
      
      $oldP = $3;
      
      if ($3 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $8 = HEAP[$oldP];
      
      
      var $11 = _poolCopyString($newDtd_addr + 80, $8);
      $name = $11;
      
      
      if ($name == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 44;
      break;
     case 4:
      
      
      
      var $17 = _lookup($newDtd_addr + 60, $name, 8);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 44;
      break;
     case 6:
      
      
      _hashTableIterInit($iter, $oldDtd_addr + 40);
      __label__ = 7;
      break;
     case 7:
      var $21 = _hashTableIterNext($iter);
      
      $oldA = $21;
      
      if ($21 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      if (HEAP[$newDtd_addr + 80 + 12] != HEAP[$newDtd_addr + 80 + 8]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $35 = _poolGrow($newDtd_addr + 80);
      
      if ($35 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      $iftmp_296 = 1;
      $0 = 0;
      __label__ = 44;
      break;
     case 11:
      
      
      
      var $40 = HEAP[$newDtd_addr + 80 + 12];
      HEAP[$40] = 0;
      var $41 = $40 + 1;
      
      
      
      HEAP[$newDtd_addr + 80 + 12] = $41;
      $iftmp_296 = 0;
      
      
      var $47 = HEAP[$oldA];
      
      
      var $50 = _poolCopyString($newDtd_addr + 80, $47);
      $name8 = $50;
      
      if ($50 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 44;
      break;
     case 13:
      
      var $53 = $name8 + 1;
      $name8 = $53;
      
      
      
      var $57 = _lookup($newDtd_addr + 40, $name8, 12);
      
      $newA = $57;
      
      
      if ($newA == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 44;
      break;
     case 15:
      
      
      var $63 = HEAP[$oldA + 8];
      
      
      HEAP[$newA + 8] = $63;
      
      
      
      
      if (HEAP[$oldA + 4] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 16:
      
      
      var $72 = HEAP[$oldA + 9];
      
      
      HEAP[$newA + 9] = $72;
      
      
      
      
      
      
      if (HEAP[$oldA + 4] == $oldDtd_addr + 152) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      HEAP[$newA + 4] = $newDtd_addr + 152;
      __label__ = 7;
      break;
     case 18:
      
      
      
      
      var $89 = HEAP[HEAP[$oldA + 4]];
      
      
      var $92 = _lookup($newDtd_addr + 60, $89, 0);
      var $93 = $92;
      
      
      HEAP[$newA + 4] = $93;
      __label__ = 7;
      break;
     case 19:
      
      
      _hashTableIterInit($iter, $oldDtd_addr + 20);
      __label__ = 20;
      break;
     case 20:
      var $98 = _hashTableIterNext($iter);
      
      $oldE = $98;
      
      if ($98 == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      var $103 = HEAP[$oldE];
      
      
      var $106 = _poolCopyString($newDtd_addr + 80, $103);
      $name26 = $106;
      
      
      if ($name26 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = 0;
      __label__ = 44;
      break;
     case 23:
      
      
      
      var $112 = _lookup($newDtd_addr + 20, $name26, 24);
      
      $newE = $112;
      
      
      if ($newE == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $0 = 0;
      __label__ = 44;
      break;
     case 25:
      
      
      
      
      if (HEAP[$oldE + 12] != 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      var $122 = HEAP[$ms_addr];
      
      
      
      var $126 = HEAP[$oldE + 12] * 12;
      var $127 = FUNCTION_TABLE[$122]($126);
      var $128 = $127;
      
      
      HEAP[$newE + 20] = $128;
      
      
      
      
      if (HEAP[$newE + 20] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      var $137 = HEAP[$ms_addr + 8];
      
      
      FUNCTION_TABLE[$137]($newE);
      $0 = 0;
      __label__ = 44;
      break;
     case 28:
      
      
      
      
      if (HEAP[$oldE + 8] != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $148 = HEAP[HEAP[$oldE + 8]];
      
      
      var $151 = _lookup($newDtd_addr + 40, $148, 0);
      var $152 = $151;
      
      
      HEAP[$newE + 8] = $152;
      __label__ = 30;
      break;
     case 30:
      
      
      var $157 = HEAP[$oldE + 12];
      
      
      HEAP[$newE + 12] = $157;
      
      
      var $162 = HEAP[$newE + 12];
      
      
      HEAP[$newE + 16] = $162;
      
      
      
      
      if (HEAP[$oldE + 4] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $173 = HEAP[HEAP[$oldE + 4]];
      
      
      var $176 = _lookup($newDtd_addr + 60, $173, 0);
      var $177 = $176;
      
      
      HEAP[$newE + 4] = $177;
      __label__ = 32;
      break;
     case 32:
      $i = 0;
      __label__ = 38;
      break;
     case 33:
      
      
      
      
      var $184 = HEAP[$newE + 20] + 12 * $i;
      
      
      
      
      
      
      
      
      var $193 = HEAP[HEAP[HEAP[$oldE + 20] + 12 * $i]];
      
      
      var $196 = _lookup($newDtd_addr + 40, $193, 0);
      var $197 = $196;
      var $198 = $184;
      HEAP[$198] = $197;
      
      
      
      
      
      
      
      
      
      
      
      var $210 = HEAP[HEAP[$oldE + 20] + 12 * $i + 4];
      var $211 = HEAP[$newE + 20] + 12 * $i + 4;
      HEAP[$211] = $210;
      
      
      
      
      
      
      
      
      
      
      
      
      var $224 = HEAP[$newE + 20] + 12 * $i;
      if (HEAP[HEAP[$oldE + 20] + 12 * $i + 8] != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 34:
      
      
      
      
      
      
      var $231 = HEAP[HEAP[$oldE + 20] + 12 * $i + 8];
      
      
      var $234 = _poolCopyString($newDtd_addr + 80, $231);
      var $235 = $224 + 8;
      HEAP[$235] = $234;
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$newE + 20] + 12 * $i + 8] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      $0 = 0;
      __label__ = 44;
      break;
     case 36:
      var $244 = $224 + 8;
      HEAP[$244] = 0;
      __label__ = 37;
      break;
     case 37:
      
      var $246 = $i + 1;
      $i = $246;
      __label__ = 38;
      break;
     case 38:
      
      
      
      
      
      if (HEAP[$newE + 12] > $i) {
        __label__ = 33;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 39:
      
      
      
      
      
      
      var $258 = _copyEntityTable($newDtd_addr, $newDtd_addr + 80, $oldDtd_addr);
      
      if ($258 == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      $0 = 0;
      __label__ = 44;
      break;
     case 41:
      
      
      
      
      
      
      var $266 = _copyEntityTable($newDtd_addr + 132, $newDtd_addr + 80, $oldDtd_addr + 132);
      
      if ($266 == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      $0 = 0;
      __label__ = 44;
      break;
     case 43:
      
      
      var $270 = HEAP[$oldDtd_addr + 131];
      
      
      HEAP[$newDtd_addr + 131] = $270;
      
      
      var $275 = HEAP[$oldDtd_addr + 128];
      
      
      HEAP[$newDtd_addr + 128] = $275;
      
      
      var $280 = HEAP[$oldDtd_addr + 129];
      
      
      HEAP[$newDtd_addr + 129] = $280;
      
      
      var $285 = HEAP[$oldDtd_addr + 130];
      
      
      HEAP[$newDtd_addr + 130] = $285;
      
      
      var $290 = HEAP[$oldDtd_addr + 160];
      
      
      HEAP[$newDtd_addr + 160] = $290;
      
      
      var $295 = HEAP[$oldDtd_addr + 164];
      
      
      HEAP[$newDtd_addr + 164] = $295;
      
      
      var $300 = HEAP[$oldDtd_addr + 168];
      
      
      HEAP[$newDtd_addr + 168] = $300;
      
      
      var $305 = HEAP[$oldDtd_addr + 172];
      
      
      HEAP[$newDtd_addr + 172] = $305;
      
      
      var $310 = HEAP[$oldDtd_addr + 180];
      
      
      HEAP[$newDtd_addr + 180] = $310;
      
      
      var $315 = HEAP[$oldDtd_addr + 184];
      
      
      HEAP[$newDtd_addr + 184] = $315;
      $0 = 1;
      __label__ = 44;
      break;
     case 44:
      
      $retval = $0;
      var $retval53 = $retval;
      STACKTOP = __stackBase__;
      return $retval53;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _copyEntityTable($newTable, $newPool, $oldTable) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $newTable_addr;
      var $newPool_addr;
      var $oldTable_addr;
      var $retval;
      var $0;
      var $iter = __stackBase__;
      var $cachedOldBase;
      var $cachedNewBase;
      var $newE;
      var $name;
      var $oldE;
      var $tem;
      var $tem20;
      var $tem25;
      $newTable_addr = $newTable;
      $newPool_addr = $newPool;
      $oldTable_addr = $oldTable;
      $cachedOldBase = 0;
      $cachedNewBase = 0;
      
      _hashTableIterInit($iter, $oldTable_addr);
      __label__ = 1;
      break;
     case 1:
      var $2 = _hashTableIterNext($iter);
      
      $oldE = $2;
      
      if ($2 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $7 = HEAP[$oldE];
      
      var $9 = _poolCopyString($newPool_addr, $7);
      $name = $9;
      
      
      if ($name == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 28;
      break;
     case 4:
      
      
      var $14 = _lookup($newTable_addr, $name, 36);
      
      $newE = $14;
      
      
      if ($newE == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 28;
      break;
     case 6:
      
      
      
      
      var $22 = $oldE;
      if (HEAP[$oldE + 16] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 7:
      
      var $24 = HEAP[$22 + 16];
      
      var $26 = _poolCopyString($newPool_addr, $24);
      $tem = $26;
      
      
      if ($tem == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 28;
      break;
     case 9:
      
      
      
      HEAP[$newE + 16] = $tem;
      
      
      
      
      if (HEAP[$oldE + 20] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 10:
      
      
      
      
      
      if (HEAP[$oldE + 20] == $cachedOldBase) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      HEAP[$newE + 20] = $cachedNewBase;
      __label__ = 15;
      break;
     case 12:
      
      
      
      $cachedOldBase = HEAP[$oldE + 20];
      
      
      var $49 = _poolCopyString($newPool_addr, $cachedOldBase);
      $tem = $49;
      
      
      if ($tem == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 28;
      break;
     case 14:
      
      
      
      HEAP[$newE + 20] = $tem;
      
      
      
      $cachedNewBase = HEAP[$newE + 20];
      __label__ = 15;
      break;
     case 15:
      
      
      
      
      if (HEAP[$oldE + 24] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 16:
      
      
      var $64 = HEAP[$oldE + 24];
      
      var $66 = _poolCopyString($newPool_addr, $64);
      $tem = $66;
      
      
      if ($tem == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = 0;
      __label__ = 28;
      break;
     case 18:
      
      
      
      HEAP[$newE + 24] = $tem;
      __label__ = 22;
      break;
     case 19:
      
      var $73 = HEAP[$22 + 8];
      
      
      var $76 = HEAP[$oldE + 4];
      
      var $78 = _poolCopyStringN($newPool_addr, $76, $73);
      $tem20 = $78;
      
      
      if ($tem20 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = 0;
      __label__ = 28;
      break;
     case 21:
      
      
      
      HEAP[$newE + 4] = $tem20;
      
      
      var $86 = HEAP[$oldE + 8];
      
      
      HEAP[$newE + 8] = $86;
      __label__ = 22;
      break;
     case 22:
      
      
      
      
      if (HEAP[$oldE + 28] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      
      
      var $95 = HEAP[$oldE + 28];
      
      var $97 = _poolCopyString($newPool_addr, $95);
      $tem25 = $97;
      
      
      if ($tem25 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $0 = 0;
      __label__ = 28;
      break;
     case 25:
      
      
      
      HEAP[$newE + 28] = $tem25;
      __label__ = 26;
      break;
     case 26:
      
      
      var $105 = HEAP[$oldE + 33];
      
      
      HEAP[$newE + 33] = $105;
      
      
      var $110 = HEAP[$oldE + 34];
      
      
      HEAP[$newE + 34] = $110;
      __label__ = 1;
      break;
     case 27:
      $0 = 1;
      __label__ = 28;
      break;
     case 28:
      
      $retval = $0;
      var $retval31 = $retval;
      STACKTOP = __stackBase__;
      return $retval31;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _keyeq($s1, $s2) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s1_addr;
      var $s2_addr;
      var $retval;
      var $0;
      $s1_addr = $s1;
      $s2_addr = $s2;
      __label__ = 4;
      break;
     case 1:
      
      
      
      if (HEAP[$s1_addr] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 1;
      __label__ = 6;
      break;
     case 3:
      
      var $5 = $s1_addr + 1;
      $s1_addr = $5;
      
      var $7 = $s2_addr + 1;
      $s2_addr = $7;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[$s1_addr] == HEAP[$s2_addr]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      
      var $retval67 = $retval & 255;
      return $retval67;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _hash($s) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $retval;
      var $0;
      var $h;
      $s_addr = $s;
      $h = 0;
      
      
      
      var $4 = $h;
      if (HEAP[$s_addr] != 0) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = __lastLabel__ == 1 ? $16 : $4;
      
      
      
      
      var $10 = HEAP[$s_addr] ^ $5 * 1000003;
      $h = $10;
      
      var $12 = $s_addr + 1;
      $s_addr = $12;
      
      
      
      var $16 = $h;
      if (HEAP[$s_addr] != 0) {
        __lastLabel__ = 1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      }
     case 2:
      var $_lcssa = __lastLabel__ == -1 ? $4 : $16;
      $0 = $_lcssa;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _lookup($table, $name, $createSize) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $table_addr;
      var $name_addr;
      var $createSize_addr;
      var $retval;
      var $iftmp_299;
      var $iftmp_298;
      var $iftmp_297;
      var $0;
      var $i;
      var $tsize;
      var $h;
      var $mask;
      var $step;
      var $newPower;
      var $newSize;
      var $newMask;
      var $tsize19;
      var $newV;
      var $newHash;
      var $j;
      $table_addr = $table;
      $name_addr = $name;
      $createSize_addr = $createSize;
      
      
      
      
      if (HEAP[$table_addr + 8] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      if ($createSize_addr == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 41;
      break;
     case 3:
      
      
      HEAP[$table_addr + 4] = 6;
      
      
      HEAP[$table_addr + 8] = 64;
      
      
      
      
      $tsize = HEAP[$table_addr + 8] * 4;
      
      
      
      
      var $19 = HEAP[HEAP[$table_addr + 16]];
      
      var $21 = FUNCTION_TABLE[$19]($tsize);
      var $22 = $21;
      
      
      HEAP[$table_addr] = $22;
      
      
      
      
      var $29 = $table_addr;
      if (HEAP[$table_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      HEAP[$29 + 8] = 0;
      $0 = 0;
      __label__ = 41;
      break;
     case 5:
      
      
      
      var $34 = HEAP[$29];
      _llvm_memset_p0i8_i32($34, 0, $tsize, 1, 0);
      
      var $36 = _hash($name_addr);
      
      
      
      
      
      $i = HEAP[$table_addr + 8] - 1 & $36;
      __label__ = 38;
      break;
     case 6:
      
      var $43 = _hash($name_addr);
      $h = $43;
      
      
      
      
      $mask = HEAP[$table_addr + 8] - 1;
      $step = 0;
      
      
      
      $i = $mask & $h;
      __label__ = 14;
      break;
     case 7:
      
      
      
      
      
      
      
      var $58 = HEAP[HEAP[HEAP[$table_addr] + 4 * $i]];
      
      var $60 = _keyeq($name_addr, $58);
      
      if ($60 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      
      $0 = HEAP[HEAP[$table_addr] + 4 * $i];
      __label__ = 41;
      break;
     case 9:
      
      
      if ($step == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $not = $mask ^ -1;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $step = ($h & $not) >>> HEAP[$table_addr + 4] - 1 & 255 & ($mask >>> 2 & 255) | 1;
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      if ($step > $i) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      var $96 = $i + HEAP[$table_addr + 8] + (0 - $step);
      $i = $96;
      
      $iftmp_297 = $i;
      __label__ = 14;
      break;
     case 13:
      
      
      
      var $101 = $i - $step;
      $i = $101;
      
      $iftmp_297 = $i;
      __label__ = 14;
      break;
     case 14:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$table_addr] + 4 * $i] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if ($createSize_addr == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = 0;
      __label__ = 41;
      break;
     case 17:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$table_addr + 12] >>> HEAP[$table_addr + 4] - 1 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 18:
      
      
      
      
      $newPower = HEAP[$table_addr + 4] + 1;
      
      
      
      $newSize = 1 << $newPower;
      
      
      $newMask = $newSize - 1;
      
      
      $tsize19 = $newSize * 4;
      
      
      
      
      var $137 = HEAP[HEAP[$table_addr + 16]];
      
      var $139 = FUNCTION_TABLE[$137]($tsize19);
      
      $newV = $139;
      
      
      if ($newV == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = 0;
      __label__ = 41;
      break;
     case 20:
      
      
      
      _llvm_memset_p0i8_i32($newV, 0, $tsize19, 1, 0);
      $i = 0;
      
      
      
      
      
      var $151 = $table_addr;
      if (HEAP[$table_addr + 8] > $i) {
        __lastLabel__ = 20;
        __label__ = 21;
        break;
      } else {
        __lastLabel__ = 20;
        __label__ = 31;
        break;
      }
     case 21:
      var $152 = __lastLabel__ == 30 ? $226 : $151;
      
      
      
      
      
      
      if (HEAP[HEAP[$152] + 4 * $i] != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      var $166 = HEAP[HEAP[HEAP[$table_addr] + 4 * $i]];
      var $167 = _hash($166);
      $newHash = $167;
      
      
      
      $j = $newMask & $newHash;
      $step = 0;
      
      
      
      
      
      if (HEAP[$newV + 4 * $j] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 23:
      
      
      if ($step == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      var $not26 = $newMask ^ -1;
      
      
      
      
      
      
      
      
      
      
      
      
      $step = ($newHash & $not26) >>> $newPower - 1 & 255 & ($newMask >>> 2 & 255) | 1;
      __label__ = 25;
      break;
     case 25:
      
      
      
      
      
      var $196 = $step;
      if ($step > $j) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      
      
      var $200 = $newSize + (0 - $196) + $j;
      $j = $200;
      
      $iftmp_298 = $j;
      __label__ = 27;
      break;
     case 27:
      
      
      
      
      
      if (HEAP[$newV + 4 * $j] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      var $208 = $j - $196;
      $j = $208;
      
      $iftmp_298 = $j;
      __label__ = 27;
      break;
     case 29:
      
      
      
      
      
      var $215 = HEAP[HEAP[$table_addr] + 4 * $i];
      
      
      
      HEAP[$newV + 4 * $j] = $215;
      __label__ = 30;
      break;
     case 30:
      
      var $220 = $i + 1;
      $i = $220;
      
      
      
      
      
      var $226 = $table_addr;
      if (HEAP[$table_addr + 8] > $i) {
        __lastLabel__ = 30;
        __label__ = 21;
        break;
      } else {
        __lastLabel__ = 30;
        __label__ = 31;
        break;
      }
     case 31:
      var $_lcssa = __lastLabel__ == 20 ? $151 : $226;
      
      
      
      var $230 = HEAP[HEAP[$_lcssa + 16] + 8];
      
      
      
      var $234 = HEAP[$table_addr];
      FUNCTION_TABLE[$230]($234);
      
      
      
      HEAP[$table_addr] = $newV;
      
      
      
      HEAP[$table_addr + 4] = $newPower;
      
      
      
      HEAP[$table_addr + 8] = $newSize;
      
      
      
      $i = $newMask & $h;
      $step = 0;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$table_addr] + 4 * $i] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 32:
      
      
      if ($step == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      var $not38 = $newMask ^ -1;
      
      
      
      
      
      
      
      
      
      
      
      
      $step = ($h & $not38) >>> $newPower - 1 & 255 & ($newMask >>> 2 & 255) | 1;
      __label__ = 34;
      break;
     case 34:
      
      
      
      
      
      var $274 = $step;
      if ($step > $i) {
        __label__ = 35;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 35:
      
      
      
      
      var $278 = $newSize + (0 - $274) + $i;
      $i = $278;
      
      $iftmp_299 = $i;
      __label__ = 36;
      break;
     case 36:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$table_addr] + 4 * $i] != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      var $288 = $i - $274;
      $i = $288;
      
      $iftmp_299 = $i;
      __label__ = 36;
      break;
     case 38:
      
      
      var $292 = HEAP[$table_addr];
      
      
      
      
      var $297 = HEAP[HEAP[$table_addr + 16]];
      
      var $299 = FUNCTION_TABLE[$297]($createSize_addr);
      var $300 = $299;
      
      var $302 = $292 + 4 * $i;
      HEAP[$302] = $300;
      
      
      
      
      
      
      
      if (HEAP[HEAP[$table_addr] + 4 * $i] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      $0 = 0;
      __label__ = 41;
      break;
     case 40:
      
      
      
      
      
      
      
      var $317 = HEAP[HEAP[$table_addr] + 4 * $i];
      _llvm_memset_p0i8_i32($317, 0, $createSize_addr, 1, 0);
      
      
      
      
      
      
      var $324 = HEAP[HEAP[$table_addr] + 4 * $i];
      
      HEAP[$324] = $name_addr;
      
      
      
      var $329 = HEAP[$table_addr + 12] + 1;
      
      
      HEAP[$table_addr + 12] = $329;
      
      
      
      
      
      
      $0 = HEAP[HEAP[$table_addr] + 4 * $i];
      __label__ = 41;
      break;
     case 41:
      
      $retval = $0;
      var $retval48 = $retval;
      return $retval48;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _hashTableClear($table) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $table_addr;
      var $i;
      $table_addr = $table;
      $i = 0;
      
      
      
      
      
      var $5 = $table_addr;
      if (HEAP[$table_addr + 8] > $i) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = __lastLabel__ == 1 ? $30 : $5;
      
      
      
      var $10 = HEAP[HEAP[$6 + 16] + 8];
      
      
      
      
      
      
      var $17 = HEAP[HEAP[$table_addr] + 4 * $i];
      FUNCTION_TABLE[$10]($17);
      
      
      
      
      var $22 = HEAP[$table_addr] + 4 * $i;
      HEAP[$22] = 0;
      
      var $24 = $i + 1;
      $i = $24;
      
      
      
      
      
      var $30 = $table_addr;
      if (HEAP[$table_addr + 8] > $i) {
        __lastLabel__ = 1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      }
     case 2:
      var $_lcssa = __lastLabel__ == -1 ? $5 : $30;
      
      HEAP[$_lcssa + 12] = 0;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _hashTableDestroy($table) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $table_addr;
      var $i;
      $table_addr = $table;
      $i = 0;
      
      
      
      
      
      
      
      
      
      var $9 = HEAP[HEAP[$table_addr + 16] + 8];
      
      
      var $12 = HEAP[$table_addr];
      if (HEAP[$table_addr + 8] > $i) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 2;
        break;
      }
     case 1:
      var $13 = __lastLabel__ == 1 ? $33 : $12;
      var $14 = __lastLabel__ == 1 ? $30 : $9;
      
      
      
      var $18 = HEAP[$13 + 4 * $i];
      FUNCTION_TABLE[$14]($18);
      
      var $20 = $i + 1;
      $i = $20;
      
      
      
      
      
      
      
      
      
      var $30 = HEAP[HEAP[$table_addr + 16] + 8];
      
      
      var $33 = HEAP[$table_addr];
      if (HEAP[$table_addr + 8] > $i) {
        __lastLabel__ = 1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      }
     case 2:
      var $_lcssa1 = __lastLabel__ == -1 ? $12 : $33;
      var $_lcssa = __lastLabel__ == -1 ? $9 : $30;
      var $34 = $_lcssa1;
      FUNCTION_TABLE[$_lcssa]($34);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _hashTableInit($p, $ms) {
    
    var $p_addr;
    var $ms_addr;
    $p_addr = $p;
    $ms_addr = $ms;
    
    
    HEAP[$p_addr + 4] = 0;
    
    
    HEAP[$p_addr + 8] = 0;
    
    
    HEAP[$p_addr + 12] = 0;
    
    
    HEAP[$p_addr] = 0;
    
    
    
    HEAP[$p_addr + 16] = $ms_addr;
    return;
  }
  function _hashTableIterInit($iter, $table) {
    
    var $iter_addr;
    var $table_addr;
    $iter_addr = $iter;
    $table_addr = $table;
    
    
    var $2 = HEAP[$table_addr];
    
    
    HEAP[$iter_addr] = $2;
    
    
    
    
    
    
    var $11 = HEAP[$iter_addr] + 4 * HEAP[$table_addr + 8];
    
    
    HEAP[$iter_addr + 4] = $11;
    return;
  }
  function _hashTableIterNext($iter) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $iter_addr;
      var $retval;
      var $0;
      var $tem;
      $iter_addr = $iter;
      __label__ = 3;
      break;
     case 1:
      
      
      var $3 = HEAP[$iter_addr];
      
      $tem = HEAP[$3];
      var $5 = $3 + 4;
      
      
      HEAP[$iter_addr] = $5;
      
      
      if ($tem != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $tem;
      __label__ = 5;
      break;
     case 3:
      
      
      
      
      
      
      
      if (HEAP[$iter_addr] != HEAP[$iter_addr + 4]) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _poolInit($pool, $ms) {
    
    var $pool_addr;
    var $ms_addr;
    $pool_addr = $pool;
    $ms_addr = $ms;
    
    
    HEAP[$pool_addr] = 0;
    
    
    HEAP[$pool_addr + 4] = 0;
    
    
    HEAP[$pool_addr + 16] = 0;
    
    
    HEAP[$pool_addr + 12] = 0;
    
    
    HEAP[$pool_addr + 8] = 0;
    
    
    
    HEAP[$pool_addr + 20] = $ms_addr;
    return;
  }
  function _poolClear($pool) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pool_addr;
      var $p;
      var $tem;
      $pool_addr = $pool;
      
      
      
      
      
      
      var $6 = HEAP[$pool_addr];
      if (HEAP[$pool_addr + 4] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$pool_addr + 4] = $6;
      __label__ = 4;
      break;
     case 2:
      $p = $6;
      
      if ($6 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      $tem = HEAP[$p];
      
      
      var $15 = HEAP[$pool_addr + 4];
      
      
      HEAP[$p] = $15;
      
      
      
      HEAP[$pool_addr + 4] = $p;
      
      $p = $tem;
      
      if ($tem != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      HEAP[$pool_addr] = 0;
      
      
      HEAP[$pool_addr + 16] = 0;
      
      
      HEAP[$pool_addr + 12] = 0;
      
      
      HEAP[$pool_addr + 8] = 0;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _poolDestroy($pool) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pool_addr;
      var $p;
      var $tem;
      var $tem4;
      $pool_addr = $pool;
      
      
      
      $p = HEAP[$pool_addr];
      
      if (HEAP[$pool_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $tem = HEAP[$p];
      
      
      
      
      var $11 = HEAP[HEAP[$pool_addr + 20] + 8];
      
      
      FUNCTION_TABLE[$11]($p);
      
      $p = $tem;
      
      if ($tem != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      $p = HEAP[$pool_addr + 4];
      
      if (HEAP[$pool_addr + 4] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      $tem4 = HEAP[$p];
      
      
      
      
      var $27 = HEAP[HEAP[$pool_addr + 20] + 8];
      
      
      FUNCTION_TABLE[$27]($p);
      
      $p = $tem4;
      
      if ($tem4 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _poolAppend($pool, $enc, $ptr, $end) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pool_addr;
      var $enc_addr;
      var $ptr_addr = __stackBase__;
      var $end_addr;
      var $retval;
      var $0;
      $pool_addr = $pool;
      $enc_addr = $enc;
      HEAP[$ptr_addr] = $ptr;
      $end_addr = $end;
      
      
      
      
      if (HEAP[$pool_addr + 12] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $6 = _poolGrow($pool_addr);
      
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 7;
      break;
     case 3:
      
      
      var $10 = HEAP[$enc_addr + 60];
      
      
      var $13 = HEAP[$pool_addr + 8];
      
      
      
      
      FUNCTION_TABLE[$10]($enc_addr, $ptr_addr, $end_addr, $pool_addr + 12, $13);
      
      
      
      var $21 = $pool_addr;
      if (HEAP[$ptr_addr] == $end_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $22 = _poolGrow($21);
      
      if ($22 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      
      $0 = HEAP[$21 + 16];
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval8 = $retval;
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _poolCopyString($pool, $s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pool_addr;
      var $s_addr;
      var $retval;
      var $0;
      var $iftmp_301;
      $pool_addr = $pool;
      $s_addr = $s;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] != HEAP[$pool_addr + 8]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $9 = _poolGrow($pool_addr);
      
      if ($9 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_301 = 1;
      $0 = 0;
      __label__ = 6;
      break;
     case 4:
      
      
      var $13 = HEAP[$pool_addr + 12];
      
      var $15 = HEAP[$s_addr];
      HEAP[$13] = $15;
      var $16 = $13 + 1;
      
      
      HEAP[$pool_addr + 12] = $16;
      $iftmp_301 = 0;
      
      
      
      var $22 = HEAP[$s_addr] != 0;
      
      var $24 = $s_addr + 1;
      $s_addr = $24;
      
      if ($22 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      $s_addr = HEAP[$pool_addr + 16];
      
      
      var $30 = HEAP[$pool_addr + 12];
      
      
      HEAP[$pool_addr + 16] = $30;
      
      $0 = $s_addr;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _poolCopyStringN($pool, $s, $n) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pool_addr;
      var $s_addr;
      var $n_addr;
      var $retval;
      var $iftmp_302;
      var $0;
      $pool_addr = $pool;
      $s_addr = $s;
      $n_addr = $n;
      
      
      
      
      if (HEAP[$pool_addr + 12] == 0) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 8;
        break;
      }
     case 1:
      
      var $6 = _poolGrow($pool_addr);
      
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 10;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[$31 + 12] != HEAP[$pool_addr + 8]) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $15 = _poolGrow($pool_addr);
      
      if ($15 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $iftmp_302 = 1;
      $0 = 0;
      __label__ = 10;
      break;
     case 6:
      
      
      var $19 = HEAP[$pool_addr + 12];
      
      var $21 = HEAP[$s_addr];
      HEAP[$19] = $21;
      var $22 = $19 + 1;
      
      
      HEAP[$pool_addr + 12] = $22;
      $iftmp_302 = 0;
      
      var $26 = $n_addr - 1;
      $n_addr = $26;
      
      var $28 = $s_addr + 1;
      $s_addr = $28;
      __lastLabel__ = 6;
      __label__ = 8;
      break;
     case 7:
      var $_pr = $n_addr;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $29 = __lastLabel__ == 6 ? $26 : __lastLabel__ == 7 ? $_pr : $n;
      
      var $31 = $pool_addr;
      if ($29 > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      $s_addr = HEAP[$31 + 16];
      
      
      var $36 = HEAP[$pool_addr + 12];
      
      
      HEAP[$pool_addr + 16] = $36;
      
      $0 = $s_addr;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _poolAppendString($pool, $s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pool_addr;
      var $s_addr;
      var $retval;
      var $0;
      var $iftmp_303;
      $pool_addr = $pool;
      $s_addr = $s;
      __label__ = 5;
      break;
     case 1:
      
      
      
      
      
      
      if (HEAP[$23 + 12] != HEAP[$pool_addr + 8]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $8 = _poolGrow($pool_addr);
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $iftmp_303 = 1;
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      var $12 = HEAP[$pool_addr + 12];
      
      var $14 = HEAP[$s_addr];
      HEAP[$12] = $14;
      var $15 = $12 + 1;
      
      
      HEAP[$pool_addr + 12] = $15;
      $iftmp_303 = 0;
      
      var $19 = $s_addr + 1;
      $s_addr = $19;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $23 = $pool_addr;
      if (HEAP[$s_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      $0 = HEAP[$23 + 16];
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _poolStoreString($pool, $enc, $ptr, $end) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pool_addr;
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $retval;
      var $0;
      $pool_addr = $pool;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      
      
      
      
      var $5 = _poolAppend($pool_addr, $enc_addr, $ptr_addr, $end_addr);
      
      if ($5 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 6;
      break;
     case 2:
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] == HEAP[$pool_addr + 8]) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      var $15 = _poolGrow($pool_addr);
      
      if ($15 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      var $19 = HEAP[$pool_addr + 12];
      HEAP[$19] = 0;
      var $20 = $19 + 1;
      
      
      HEAP[$pool_addr + 12] = $20;
      
      
      
      $0 = HEAP[$pool_addr + 16];
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _poolGrow($pool) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $pool_addr;
      var $retval;
      var $0;
      var $tem;
      var $blockSize;
      var $tem10;
      var $blockSize11;
      $pool_addr = $pool;
      
      
      
      
      if (HEAP[$pool_addr + 4] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      var $9 = $pool_addr;
      if (HEAP[$pool_addr + 16] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $11 = HEAP[$9 + 4];
      
      
      HEAP[$pool_addr] = $11;
      
      
      
      
      var $18 = HEAP[HEAP[$pool_addr + 4]];
      
      
      HEAP[$pool_addr + 4] = $18;
      
      
      
      var $24 = HEAP[$pool_addr];
      HEAP[$24] = 0;
      
      
      
      
      var $29 = HEAP[$pool_addr] + 8;
      
      
      HEAP[$pool_addr + 16] = $29;
      
      
      
      
      
      
      
      
      var $40 = HEAP[$pool_addr + 16] + HEAP[HEAP[$pool_addr] + 4];
      
      
      HEAP[$pool_addr + 8] = $40;
      
      
      var $45 = HEAP[$pool_addr + 16];
      
      
      HEAP[$pool_addr + 12] = $45;
      $0 = 1;
      __label__ = 19;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$9 + 8] - HEAP[$pool_addr + 16] < HEAP[HEAP[$pool_addr + 4] + 4]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      $tem = HEAP[HEAP[$pool_addr + 4]];
      
      
      
      
      
      var $72 = HEAP[$pool_addr];
      var $73 = HEAP[$pool_addr + 4];
      HEAP[$73] = $72;
      
      
      var $76 = HEAP[$pool_addr + 4];
      
      
      HEAP[$pool_addr] = $76;
      
      
      
      HEAP[$pool_addr + 4] = $tem;
      
      
      
      
      
      
      
      
      var $90 = HEAP[$pool_addr + 8] - HEAP[$pool_addr + 16];
      
      
      var $93 = HEAP[$pool_addr + 16];
      
      
      
      
      var $98 = HEAP[$pool_addr] + 8;
      _llvm_memcpy_p0i8_p0i8_i32($98, $93, $90, 1, 0);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $113 = HEAP[$pool_addr] + 8 + (HEAP[$pool_addr + 12] - HEAP[$pool_addr + 16]);
      
      
      HEAP[$pool_addr + 12] = $113;
      
      
      
      
      var $120 = HEAP[$pool_addr] + 8;
      
      
      HEAP[$pool_addr + 16] = $120;
      
      
      
      
      
      
      
      
      var $131 = HEAP[$pool_addr + 16] + HEAP[HEAP[$pool_addr] + 4];
      
      
      HEAP[$pool_addr + 8] = $131;
      $0 = 1;
      __label__ = 19;
      break;
     case 5:
      
      
      
      
      if (HEAP[$pool_addr] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 16] != HEAP[$pool_addr] + 8) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      $blockSize = (HEAP[$pool_addr + 8] - HEAP[$pool_addr + 16]) * 2;
      
      
      
      
      var $161 = HEAP[HEAP[$pool_addr + 20] + 4];
      
      
      
      
      
      var $167 = HEAP[$pool_addr];
      var $168 = FUNCTION_TABLE[$161]($167, $blockSize + 8);
      var $169 = $168;
      
      
      HEAP[$pool_addr] = $169;
      
      
      
      
      if (HEAP[$pool_addr] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 19;
      break;
     case 9:
      
      
      
      var $179 = HEAP[$pool_addr] + 4;
      
      HEAP[$179] = $blockSize;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $195 = HEAP[$pool_addr] + 8 + (HEAP[$pool_addr + 12] - HEAP[$pool_addr + 16]);
      
      
      HEAP[$pool_addr + 12] = $195;
      
      
      
      
      var $202 = HEAP[$pool_addr] + 8;
      
      
      HEAP[$pool_addr + 16] = $202;
      
      
      
      
      var $209 = HEAP[$pool_addr + 16] + $blockSize;
      
      
      HEAP[$pool_addr + 8] = $209;
      __label__ = 18;
      break;
     case 10:
      
      
      
      
      
      
      
      
      
      $blockSize11 = HEAP[$pool_addr + 8] - HEAP[$pool_addr + 16];
      
      if (HEAP[$pool_addr + 8] - HEAP[$pool_addr + 16] <= 1023) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $blockSize11 = 1024;
      __label__ = 13;
      break;
     case 12:
      
      var $223 = $blockSize11 * 2;
      $blockSize11 = $223;
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      var $228 = HEAP[HEAP[$pool_addr + 20]];
      
      
      var $231 = FUNCTION_TABLE[$228]($blockSize11 + 8);
      
      $tem10 = $231;
      
      if ($231 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 19;
      break;
     case 15:
      
      
      
      HEAP[$tem10 + 4] = $blockSize11;
      
      
      var $239 = HEAP[$pool_addr];
      
      
      HEAP[$tem10] = $239;
      
      
      
      HEAP[$pool_addr] = $tem10;
      
      
      
      
      
      
      
      if (HEAP[$pool_addr + 12] != HEAP[$pool_addr + 16]) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      
      
      
      
      var $260 = HEAP[$pool_addr + 12] - HEAP[$pool_addr + 16];
      
      
      var $263 = HEAP[$pool_addr + 16];
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($tem10 + 8, $263, $260, 1, 0);
      __label__ = 17;
      break;
     case 17:
      
      
      
      
      
      
      
      
      
      
      
      
      var $279 = $tem10 + 8 + (HEAP[$pool_addr + 12] - HEAP[$pool_addr + 16]);
      
      
      HEAP[$pool_addr + 12] = $279;
      
      
      
      
      
      HEAP[$pool_addr + 16] = $tem10 + 8;
      
      
      
      
      
      
      
      HEAP[$pool_addr + 8] = $tem10 + 8 + $blockSize11;
      __label__ = 18;
      break;
     case 18:
      $0 = 1;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      
      var $retval2122 = $retval & 255;
      return $retval2122;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nextScaffoldPart($parser) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $0;
      var $dtd;
      var $me;
      var $next;
      var $temp;
      var $parent;
      $parser_addr = $parser;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      
      
      
      if (HEAP[$dtd + 184] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      var $11 = HEAP[$parser_addr + 12];
      
      
      
      var $15 = HEAP[$parser_addr + 468] * 4;
      var $16 = FUNCTION_TABLE[$11]($15);
      var $17 = $16;
      
      
      HEAP[$dtd + 184] = $17;
      
      
      
      
      if (HEAP[$dtd + 184] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 20;
      break;
     case 3:
      
      
      
      var $27 = HEAP[$dtd + 184];
      HEAP[$27] = 0;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      
      if (HEAP[$dtd + 176] >= HEAP[$dtd + 172]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 5:
      
      
      
      
      
      var $40 = $parser_addr + 12;
      if (HEAP[$dtd + 164] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      var $42 = HEAP[$40 + 4];
      
      
      
      var $46 = HEAP[$dtd + 172] * 56;
      
      
      
      var $50 = HEAP[$dtd + 164];
      var $51 = FUNCTION_TABLE[$42]($50, $46);
      
      $temp = $51;
      
      
      if ($temp == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 20;
      break;
     case 8:
      
      
      
      var $58 = HEAP[$dtd + 172] * 2;
      
      
      HEAP[$dtd + 172] = $58;
      __label__ = 12;
      break;
     case 9:
      
      var $62 = HEAP[$40];
      var $63 = FUNCTION_TABLE[$62](896);
      
      $temp = $63;
      
      
      if ($temp == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -1;
      __label__ = 20;
      break;
     case 11:
      
      
      HEAP[$dtd + 172] = 32;
      __label__ = 12;
      break;
     case 12:
      
      
      
      HEAP[$dtd + 164] = $temp;
      __label__ = 13;
      break;
     case 13:
      
      
      
      $next = HEAP[$dtd + 176];
      var $75 = HEAP[$dtd + 176] + 1;
      
      
      HEAP[$dtd + 176] = $75;
      
      
      
      
      
      $me = HEAP[$dtd + 164] + 28 * $next;
      
      
      
      
      if (HEAP[$dtd + 180] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      
      
      $parent = HEAP[$dtd + 164] + 28 * HEAP[HEAP[$dtd + 184] + 4 * (HEAP[$dtd + 180] - 1)];
      
      
      
      
      if (HEAP[$parent + 16] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      var $111 = HEAP[$dtd + 164] + 28 * HEAP[$parent + 16] + 24;
      
      HEAP[$111] = $next;
      __label__ = 16;
      break;
     case 16:
      
      
      
      
      if (HEAP[$parent + 20] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      HEAP[$parent + 12] = $next;
      __label__ = 18;
      break;
     case 18:
      
      
      
      HEAP[$parent + 16] = $next;
      
      
      
      var $126 = HEAP[$parent + 20] + 1;
      
      
      HEAP[$parent + 20] = $126;
      __label__ = 19;
      break;
     case 19:
      
      
      HEAP[$me + 24] = 0;
      
      
      var $133 = HEAP[$me + 24];
      
      
      HEAP[$me + 20] = $133;
      
      
      var $138 = HEAP[$me + 20];
      
      
      HEAP[$me + 16] = $138;
      
      
      var $143 = HEAP[$me + 16];
      
      
      HEAP[$me + 12] = $143;
      
      $0 = $next;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval20 = $retval;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _build_node($parser, $src_node, $dest, $contpos, $strpos) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $src_node_addr;
      var $dest_addr;
      var $contpos_addr;
      var $strpos_addr;
      var $dtd;
      var $src;
      var $i;
      var $cn;
      $parser_addr = $parser;
      $src_node_addr = $src_node;
      $dest_addr = $dest;
      $contpos_addr = $contpos;
      $strpos_addr = $strpos;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      
      
      
      
      
      var $9 = HEAP[HEAP[$dtd + 164] + 28 * $src_node_addr];
      
      
      HEAP[$dest_addr] = $9;
      
      
      
      
      
      
      var $18 = HEAP[HEAP[$dtd + 164] + 28 * $src_node_addr + 4];
      
      
      HEAP[$dest_addr + 4] = $18;
      
      
      
      
      if (HEAP[$dest_addr] == 4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      var $26 = HEAP[$strpos_addr];
      
      
      HEAP[$dest_addr + 8] = $26;
      
      
      
      
      
      
      
      $src = HEAP[HEAP[$dtd + 164] + 28 * $src_node_addr + 8];
      
      var $37 = HEAP[$strpos_addr];
      
      var $39 = HEAP[$src];
      HEAP[$37] = $39;
      var $40 = $37 + 1;
      
      HEAP[$strpos_addr] = $40;
      
      
      
      if (HEAP[$src] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $46 = $src + 1;
      $src = $46;
      
      var $48 = HEAP[$strpos_addr];
      
      var $50 = HEAP[$src];
      HEAP[$48] = $50;
      var $51 = $48 + 1;
      
      HEAP[$strpos_addr] = $51;
      
      
      
      if (HEAP[$src] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 3:
      
      
      HEAP[$dest_addr + 12] = 0;
      
      
      HEAP[$dest_addr + 16] = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      
      
      var $66 = HEAP[HEAP[$dtd + 164] + 28 * $src_node_addr + 20];
      
      
      HEAP[$dest_addr + 12] = $66;
      
      var $70 = HEAP[$contpos_addr];
      
      
      HEAP[$dest_addr + 16] = $70;
      
      
      
      
      
      var $78 = HEAP[$contpos_addr] + 20 * HEAP[$dest_addr + 12];
      
      HEAP[$contpos_addr] = $78;
      $i = 0;
      
      
      
      
      
      
      
      $cn = HEAP[HEAP[$dtd + 164] + 28 * $src_node_addr + 12];
      
      
      
      
      
      var $92 = $dest_addr;
      if (HEAP[$dest_addr + 12] > $i) {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 6;
        break;
      }
     case 5:
      var $93 = __lastLabel__ == 5 ? $116 : $92;
      
      
      
      var $97 = HEAP[$93 + 16] + 20 * $i;
      
      
      
      
      _build_node($parser_addr, $cn, $97, $contpos_addr, $strpos_addr);
      
      var $103 = $i + 1;
      $i = $103;
      
      
      
      
      
      
      var $110 = HEAP[HEAP[$dtd + 164] + 28 * $cn + 24];
      $cn = $110;
      
      
      
      
      
      var $116 = $dest_addr;
      if (HEAP[$dest_addr + 12] > $i) {
        __lastLabel__ = 5;
        __label__ = 5;
        break;
      } else {
        __lastLabel__ = 5;
        __label__ = 6;
        break;
      }
     case 6:
      var $_lcssa = __lastLabel__ == 4 ? $92 : $116;
      
      HEAP[$_lcssa + 8] = 0;
      __label__ = 7;
      break;
     case 7:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _build_model($parser) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $retval;
      var $0;
      var $dtd;
      var $ret;
      var $cpos = __stackBase__;
      var $str = __stackBase__ + 4;
      var $allocsize;
      $parser_addr = $parser;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      
      
      
      
      
      
      
      $allocsize = HEAP[$dtd + 168] + HEAP[$dtd + 176] * 20;
      
      
      
      var $15 = HEAP[$parser_addr + 12];
      
      var $17 = FUNCTION_TABLE[$15]($allocsize);
      
      $ret = $17;
      
      
      if ($ret == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $26 = $ret + 20 * HEAP[$dtd + 176];
      HEAP[$str] = $26;
      
      
      HEAP[$cpos] = $ret + 20;
      
      
      _build_node($parser_addr, 0, $ret, $cpos, $str);
      
      $0 = $ret;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getElementType($parser, $enc, $ptr, $end) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $parser_addr;
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $retval;
      var $0;
      var $dtd;
      var $name;
      var $ret;
      $parser_addr = $parser;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      
      
      
      $dtd = HEAP[$parser_addr + 356];
      
      
      
      
      
      var $9 = _poolStoreString($dtd + 80, $enc_addr, $ptr_addr, $end_addr);
      $name = $9;
      
      
      if ($name == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 9;
      break;
     case 2:
      
      
      
      var $15 = _lookup($dtd + 20, $name, 24);
      
      $ret = $15;
      
      
      if ($ret == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      
      
      var $25 = $dtd + 80;
      if (HEAP[$ret] != $name) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $27 = HEAP[$25 + 16];
      
      
      
      HEAP[$dtd + 80 + 12] = $27;
      __label__ = 8;
      break;
     case 6:
      
      var $32 = HEAP[$25 + 12];
      
      
      
      HEAP[$dtd + 80 + 16] = $32;
      
      
      var $38 = _setElementTypePrefix($parser_addr, $ret);
      
      if ($38 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      
      $0 = $ret;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _prolog0($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 11) {
        __label__ = 3;
        break;
      } else if ($1 == 12) {
        __label__ = 2;
        break;
      } else if ($1 == 13) {
        __label__ = 4;
        break;
      } else if ($1 == 14) {
        __label__ = 5;
        break;
      } else if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 16) {
        __label__ = 6;
        break;
      } else if ($1 == 29) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 92;
      $0 = 0;
      __label__ = 10;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 92;
      $0 = 1;
      __label__ = 10;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 92;
      $0 = 55;
      __label__ = 10;
      break;
     case 4:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 92;
      $0 = 56;
      __label__ = 10;
      break;
     case 5:
      $0 = 0;
      __label__ = 10;
      break;
     case 6:
      
      
      var $12 = HEAP[$enc_addr + 28];
      
      
      
      
      
      var $18 = $ptr_addr + HEAP[$enc_addr + 68] * 2;
      
      
      var $21 = FUNCTION_TABLE[$12]($enc_addr, $18, $end_addr, _KW_DOCTYPE);
      
      if ($21 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 94;
      $0 = 3;
      __label__ = 10;
      break;
     case 8:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 96;
      $0 = 2;
      __label__ = 10;
      break;
     case 9:
      
      
      var $29 = _common($state_addr, $tok_addr);
      $0 = $29;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _prolog1($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 11) {
        __label__ = 2;
        break;
      } else if ($1 == 13) {
        __label__ = 3;
        break;
      } else if ($1 == 14) {
        __label__ = 4;
        break;
      } else if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 16) {
        __label__ = 5;
        break;
      } else if ($1 == 29) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 9;
      break;
     case 2:
      $0 = 55;
      __label__ = 9;
      break;
     case 3:
      $0 = 56;
      __label__ = 9;
      break;
     case 4:
      $0 = 0;
      __label__ = 9;
      break;
     case 5:
      
      
      var $4 = HEAP[$enc_addr + 28];
      
      
      
      
      
      var $10 = $ptr_addr + HEAP[$enc_addr + 68] * 2;
      
      
      var $13 = FUNCTION_TABLE[$4]($enc_addr, $10, $end_addr, _KW_DOCTYPE);
      
      if ($13 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 94;
      $0 = 3;
      __label__ = 9;
      break;
     case 7:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 96;
      $0 = 2;
      __label__ = 9;
      break;
     case 8:
      
      
      var $21 = _common($state_addr, $tok_addr);
      $0 = $21;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _prolog2($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 11) {
        __label__ = 2;
        break;
      } else if ($1 == 13) {
        __label__ = 3;
        break;
      } else if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 29) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 6;
      break;
     case 2:
      $0 = 55;
      __label__ = 6;
      break;
     case 3:
      $0 = 56;
      __label__ = 6;
      break;
     case 4:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 96;
      $0 = 2;
      __label__ = 6;
      break;
     case 5:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _doctype0($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else if ($1 == 41) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 3;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 98;
      $0 = 4;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _doctype1($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 17) {
        __label__ = 3;
        break;
      } else if ($1 == 18) {
        __label__ = 4;
        break;
      } else if ($1 == 25) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      $0 = 3;
      __label__ = 9;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 100;
      $0 = 7;
      __label__ = 9;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 102;
      $0 = 8;
      __label__ = 9;
      break;
     case 4:
      
      
      var $8 = HEAP[$enc_addr + 28];
      
      
      
      var $12 = FUNCTION_TABLE[$8]($enc_addr, $ptr_addr, $end_addr, _KW_SYSTEM);
      
      if ($12 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 104;
      $0 = 3;
      __label__ = 9;
      break;
     case 6:
      
      
      var $18 = HEAP[$enc_addr + 28];
      
      
      
      var $22 = FUNCTION_TABLE[$18]($enc_addr, $ptr_addr, $end_addr, _KW_PUBLIC);
      
      if ($22 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 106;
      $0 = 3;
      __label__ = 9;
      break;
     case 8:
      
      
      var $28 = _common($state_addr, $tok_addr);
      $0 = $28;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _doctype2($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 3;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 104;
      $0 = 6;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _doctype3($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 3;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 108;
      $0 = 5;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _doctype4($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 17) {
        __label__ = 3;
        break;
      } else if ($1 == 25) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      $0 = 3;
      __label__ = 5;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 100;
      $0 = 7;
      __label__ = 5;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 102;
      $0 = 8;
      __label__ = 5;
      break;
     case 4:
      
      
      var $8 = _common($state_addr, $tok_addr);
      $0 = $8;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _doctype5($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 17) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 3;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 102;
      $0 = 8;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _internalSubset($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == -4) {
        __label__ = 14;
        break;
      } else if ($1 == 11) {
        __label__ = 10;
        break;
      } else if ($1 == 13) {
        __label__ = 11;
        break;
      } else if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 16) {
        __label__ = 2;
        break;
      } else if ($1 == 26) {
        __label__ = 13;
        break;
      } else if ($1 == 28) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 16;
      break;
     case 2:
      
      
      var $4 = HEAP[$enc_addr + 28];
      
      
      
      
      
      var $10 = $ptr_addr + HEAP[$enc_addr + 68] * 2;
      
      
      var $13 = FUNCTION_TABLE[$4]($enc_addr, $10, $end_addr, _KW_ENTITY);
      
      if ($13 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 110;
      $0 = 11;
      __label__ = 16;
      break;
     case 4:
      
      
      var $19 = HEAP[$enc_addr + 28];
      
      
      
      
      
      var $25 = $ptr_addr + HEAP[$enc_addr + 68] * 2;
      
      
      var $28 = FUNCTION_TABLE[$19]($enc_addr, $25, $end_addr, _KW_ATTLIST);
      
      if ($28 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 112;
      $0 = 33;
      __label__ = 16;
      break;
     case 6:
      
      
      var $34 = HEAP[$enc_addr + 28];
      
      
      
      
      
      var $40 = $ptr_addr + HEAP[$enc_addr + 68] * 2;
      
      
      var $43 = FUNCTION_TABLE[$34]($enc_addr, $40, $end_addr, _KW_ELEMENT);
      
      if ($43 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 114;
      $0 = 39;
      __label__ = 16;
      break;
     case 8:
      
      
      var $49 = HEAP[$enc_addr + 28];
      
      
      
      
      
      var $55 = $ptr_addr + HEAP[$enc_addr + 68] * 2;
      
      
      var $58 = FUNCTION_TABLE[$49]($enc_addr, $55, $end_addr, _KW_NOTATION);
      
      if ($58 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 116;
      $0 = 17;
      __label__ = 16;
      break;
     case 10:
      $0 = 55;
      __label__ = 16;
      break;
     case 11:
      $0 = 56;
      __label__ = 16;
      break;
     case 12:
      $0 = 60;
      __label__ = 16;
      break;
     case 13:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 118;
      $0 = 3;
      __label__ = 16;
      break;
     case 14:
      $0 = 0;
      __label__ = 16;
      break;
     case 15:
      
      
      var $66 = _common($state_addr, $tok_addr);
      $0 = $66;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _externalSubset0($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 120;
      
      
      if ($tok_addr == 12) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 57;
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      var $10 = _externalSubset1($state_addr, $tok_addr, $ptr_addr, $end_addr, $enc_addr);
      $0 = $10;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _externalSubset1($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == -4) {
        __label__ = 5;
        break;
      } else if ($1 == 15) {
        __label__ = 4;
        break;
      } else if ($1 == 26) {
        __label__ = 8;
        break;
      } else if ($1 == 33) {
        __label__ = 1;
        break;
      } else if ($1 == 34) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 122;
      $0 = 0;
      __label__ = 9;
      break;
     case 2:
      
      
      
      
      if (HEAP[$state_addr + 12] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      var $11 = HEAP[$state_addr + 12] - 1;
      
      
      HEAP[$state_addr + 12] = $11;
      $0 = 0;
      __label__ = 9;
      break;
     case 4:
      $0 = 0;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      if (HEAP[$state_addr + 12] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 9;
      break;
     case 7:
      
      
      
      
      
      var $23 = _internalSubset($state_addr, $tok_addr, $ptr_addr, $end_addr, $enc_addr);
      $0 = $23;
      __label__ = 9;
      break;
     case 8:
      
      
      var $26 = _common($state_addr, $tok_addr);
      $0 = $26;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity0($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 3;
        break;
      } else if ($1 == 22) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 5;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 124;
      $0 = 11;
      __label__ = 5;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 126;
      $0 = 9;
      __label__ = 5;
      break;
     case 4:
      
      
      var $8 = _common($state_addr, $tok_addr);
      $0 = $8;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity1($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 128;
      $0 = 10;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity2($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else if ($1 == 27) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 8;
      break;
     case 2:
      
      
      var $4 = HEAP[$enc_addr + 28];
      
      
      
      var $8 = FUNCTION_TABLE[$4]($enc_addr, $ptr_addr, $end_addr, _KW_SYSTEM);
      
      if ($8 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 130;
      $0 = 11;
      __label__ = 8;
      break;
     case 4:
      
      
      var $14 = HEAP[$enc_addr + 28];
      
      
      
      var $18 = FUNCTION_TABLE[$14]($enc_addr, $ptr_addr, $end_addr, _KW_PUBLIC);
      
      if ($18 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 132;
      $0 = 11;
      __label__ = 8;
      break;
     case 6:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 11;
      $0 = 12;
      __label__ = 8;
      break;
     case 7:
      
      
      var $28 = _common($state_addr, $tok_addr);
      $0 = $28;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity3($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 130;
      $0 = 14;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity4($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 136;
      $0 = 13;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity5($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $iftmp_0;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 17) {
        __label__ = 2;
        break;
      } else if ($1 == 18) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 9;
      break;
     case 2:
      
      
      
      
      if (HEAP[$state_addr + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_0 = FUNCTION_TABLE_OFFSET + 100;
      __label__ = 5;
      break;
     case 4:
      $iftmp_0 = FUNCTION_TABLE_OFFSET + 120;
      __label__ = 5;
      break;
     case 5:
      
      
      
      HEAP[$state_addr] = $iftmp_0;
      $0 = 15;
      __label__ = 9;
      break;
     case 6:
      
      
      var $11 = HEAP[$enc_addr + 28];
      
      
      
      var $15 = FUNCTION_TABLE[$11]($enc_addr, $ptr_addr, $end_addr, _KW_NDATA);
      
      if ($15 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 138;
      $0 = 11;
      __label__ = 9;
      break;
     case 8:
      
      
      var $21 = _common($state_addr, $tok_addr);
      $0 = $21;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity6($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 11;
      $0 = 16;
      __label__ = 4;
      break;
     case 3:
      
      
      var $8 = _common($state_addr, $tok_addr);
      $0 = $8;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity7($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else if ($1 == 27) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 8;
      break;
     case 2:
      
      
      var $4 = HEAP[$enc_addr + 28];
      
      
      
      var $8 = FUNCTION_TABLE[$4]($enc_addr, $ptr_addr, $end_addr, _KW_SYSTEM);
      
      if ($8 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 140;
      $0 = 11;
      __label__ = 8;
      break;
     case 4:
      
      
      var $14 = HEAP[$enc_addr + 28];
      
      
      
      var $18 = FUNCTION_TABLE[$14]($enc_addr, $ptr_addr, $end_addr, _KW_PUBLIC);
      
      if ($18 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 142;
      $0 = 11;
      __label__ = 8;
      break;
     case 6:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 11;
      $0 = 12;
      __label__ = 8;
      break;
     case 7:
      
      
      var $28 = _common($state_addr, $tok_addr);
      $0 = $28;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity8($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 140;
      $0 = 14;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity9($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 144;
      $0 = 13;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _entity10($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $iftmp_1;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 17) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      $0 = 11;
      __label__ = 7;
      break;
     case 2:
      
      
      
      
      if (HEAP[$state_addr + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_1 = FUNCTION_TABLE_OFFSET + 100;
      __label__ = 5;
      break;
     case 4:
      $iftmp_1 = FUNCTION_TABLE_OFFSET + 120;
      __label__ = 5;
      break;
     case 5:
      
      
      
      HEAP[$state_addr] = $iftmp_1;
      $0 = 15;
      __label__ = 7;
      break;
     case 6:
      
      
      var $11 = _common($state_addr, $tok_addr);
      $0 = $11;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _notation0($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 17;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 146;
      $0 = 18;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _notation1($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      $0 = 17;
      __label__ = 7;
      break;
     case 2:
      
      
      var $4 = HEAP[$enc_addr + 28];
      
      
      
      var $8 = FUNCTION_TABLE[$4]($enc_addr, $ptr_addr, $end_addr, _KW_SYSTEM);
      
      if ($8 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 148;
      $0 = 17;
      __label__ = 7;
      break;
     case 4:
      
      
      var $14 = HEAP[$enc_addr + 28];
      
      
      
      var $18 = FUNCTION_TABLE[$14]($enc_addr, $ptr_addr, $end_addr, _KW_PUBLIC);
      
      if ($18 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 150;
      $0 = 17;
      __label__ = 7;
      break;
     case 6:
      
      
      var $24 = _common($state_addr, $tok_addr);
      $0 = $24;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _notation2($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 17;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 152;
      $0 = 21;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _notation3($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 17;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 17;
      $0 = 19;
      __label__ = 4;
      break;
     case 3:
      
      
      var $8 = _common($state_addr, $tok_addr);
      $0 = $8;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _notation4($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $iftmp_2;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 17) {
        __label__ = 3;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      $0 = 17;
      __label__ = 8;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 17;
      $0 = 19;
      __label__ = 8;
      break;
     case 3:
      
      
      
      
      if (HEAP[$state_addr + 16] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $iftmp_2 = FUNCTION_TABLE_OFFSET + 100;
      __label__ = 6;
      break;
     case 5:
      $iftmp_2 = FUNCTION_TABLE_OFFSET + 120;
      __label__ = 6;
      break;
     case 6:
      
      
      
      HEAP[$state_addr] = $iftmp_2;
      $0 = 20;
      __label__ = 8;
      break;
     case 7:
      
      
      var $15 = _common($state_addr, $tok_addr);
      $0 = $15;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist0($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else if ($1 == 41) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 154;
      $0 = 34;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist1($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $iftmp_3;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 17) {
        __label__ = 2;
        break;
      } else if ($1 == 18) {
        __label__ = 6;
        break;
      } else if ($1 == 41) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      if (HEAP[$state_addr + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_3 = FUNCTION_TABLE_OFFSET + 100;
      __label__ = 5;
      break;
     case 4:
      $iftmp_3 = FUNCTION_TABLE_OFFSET + 120;
      __label__ = 5;
      break;
     case 5:
      
      
      
      HEAP[$state_addr] = $iftmp_3;
      $0 = 33;
      __label__ = 8;
      break;
     case 6:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 156;
      $0 = 22;
      __label__ = 8;
      break;
     case 7:
      
      
      var $13 = _common($state_addr, $tok_addr);
      $0 = $13;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist2($state, $tok, $ptr, $end, $enc) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      var $i;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else if ($1 == 23) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 11;
      break;
     case 2:
      $i = 0;
      __lastLabel__ = 2;
      __label__ = 6;
      break;
     case 3:
      
      
      var $4 = HEAP[_types_1939 + $i * 4];
      
      
      
      var $8 = FUNCTION_TABLE[$20]($enc_addr, $ptr_addr, $end_addr, $4);
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 158;
      
      
      $0 = $i + 23;
      __label__ = 11;
      break;
     case 5:
      
      var $15 = $i + 1;
      $i = $15;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $16 = __lastLabel__ == 5 ? $15 : 0;
      
      
      
      var $20 = HEAP[$enc_addr + 28];
      if ($16 <= 7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      var $24 = FUNCTION_TABLE[$20]($enc_addr, $ptr_addr, $end_addr, _KW_NOTATION);
      
      if ($24 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 160;
      $0 = 33;
      __label__ = 11;
      break;
     case 9:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 162;
      $0 = 33;
      __label__ = 11;
      break;
     case 10:
      
      
      var $32 = _common($state_addr, $tok_addr);
      $0 = $32;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist3($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else if ($1 == 19) {
        __label__ = 2;
        break;
      } else if ($1 == 41) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 164;
      $0 = 31;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist4($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 21) {
        __label__ = 3;
        break;
      } else if ($1 == 24) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 5;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 158;
      $0 = 33;
      __label__ = 5;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 162;
      $0 = 33;
      __label__ = 5;
      break;
     case 4:
      
      
      var $8 = _common($state_addr, $tok_addr);
      $0 = $8;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist5($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 23) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 166;
      $0 = 33;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist6($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 168;
      $0 = 32;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist7($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 21) {
        __label__ = 3;
        break;
      } else if ($1 == 24) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 5;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 158;
      $0 = 33;
      __label__ = 5;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 166;
      $0 = 33;
      __label__ = 5;
      break;
     case 4:
      
      
      var $8 = _common($state_addr, $tok_addr);
      $0 = $8;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist8($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 20) {
        __label__ = 2;
        break;
      } else if ($1 == 27) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 10;
      break;
     case 2:
      
      
      var $4 = HEAP[$enc_addr + 28];
      
      
      
      
      var $9 = $ptr_addr + HEAP[$enc_addr + 68];
      
      
      var $12 = FUNCTION_TABLE[$4]($enc_addr, $9, $end_addr, _KW_IMPLIED);
      
      if ($12 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 154;
      $0 = 35;
      __label__ = 10;
      break;
     case 4:
      
      
      var $18 = HEAP[$enc_addr + 28];
      
      
      
      
      var $23 = $ptr_addr + HEAP[$enc_addr + 68];
      
      
      var $26 = FUNCTION_TABLE[$18]($enc_addr, $23, $end_addr, _KW_REQUIRED);
      
      if ($26 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 154;
      $0 = 36;
      __label__ = 10;
      break;
     case 6:
      
      
      var $32 = HEAP[$enc_addr + 28];
      
      
      
      
      var $37 = $ptr_addr + HEAP[$enc_addr + 68];
      
      
      var $40 = FUNCTION_TABLE[$32]($enc_addr, $37, $end_addr, _KW_FIXED);
      
      if ($40 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 170;
      $0 = 33;
      __label__ = 10;
      break;
     case 8:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 154;
      $0 = 37;
      __label__ = 10;
      break;
     case 9:
      
      
      var $48 = _common($state_addr, $tok_addr);
      $0 = $48;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _attlist9($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 27) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 33;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 154;
      $0 = 38;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element0($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else if ($1 == 41) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 39;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 172;
      $0 = 40;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element1($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else if ($1 == 23) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      $0 = 39;
      __label__ = 8;
      break;
     case 2:
      
      
      var $4 = HEAP[$enc_addr + 28];
      
      
      
      var $8 = FUNCTION_TABLE[$4]($enc_addr, $ptr_addr, $end_addr, _KW_EMPTY);
      
      if ($8 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 39;
      $0 = 42;
      __label__ = 8;
      break;
     case 4:
      
      
      var $16 = HEAP[$enc_addr + 28];
      
      
      
      var $20 = FUNCTION_TABLE[$16]($enc_addr, $ptr_addr, $end_addr, _KW_ANY);
      
      if ($20 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 39;
      $0 = 41;
      __label__ = 8;
      break;
     case 6:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 174;
      
      
      HEAP[$state_addr + 4] = 1;
      $0 = 44;
      __label__ = 8;
      break;
     case 7:
      
      
      var $32 = _common($state_addr, $tok_addr);
      $0 = $32;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element2($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 5;
        break;
      } else if ($1 == 20) {
        __label__ = 2;
        break;
      } else if ($1 == 23) {
        __label__ = 4;
        break;
      } else if ($1 == 30) {
        __label__ = 6;
        break;
      } else if ($1 == 31) {
        __label__ = 7;
        break;
      } else if ($1 == 32) {
        __label__ = 8;
        break;
      } else if ($1 == 41) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      $0 = 39;
      __label__ = 10;
      break;
     case 2:
      
      
      var $4 = HEAP[$enc_addr + 28];
      
      
      
      
      var $9 = $ptr_addr + HEAP[$enc_addr + 68];
      
      
      var $12 = FUNCTION_TABLE[$4]($enc_addr, $9, $end_addr, _KW_PCDATA);
      
      if ($12 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 176;
      $0 = 43;
      __label__ = 10;
      break;
     case 4:
      
      
      HEAP[$state_addr + 4] = 2;
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 178;
      $0 = 44;
      __label__ = 10;
      break;
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 180;
      $0 = 51;
      __label__ = 10;
      break;
     case 6:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 180;
      $0 = 53;
      __label__ = 10;
      break;
     case 7:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 180;
      $0 = 52;
      __label__ = 10;
      break;
     case 8:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 180;
      $0 = 54;
      __label__ = 10;
      break;
     case 9:
      
      
      var $30 = _common($state_addr, $tok_addr);
      $0 = $30;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element3($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 21) {
        __label__ = 4;
        break;
      } else if ($1 == 24) {
        __label__ = 2;
        break;
      } else if ($1 == 36) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      $0 = 39;
      __label__ = 6;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 39;
      $0 = 45;
      __label__ = 6;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 39;
      $0 = 46;
      __label__ = 6;
      break;
     case 4:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 182;
      $0 = 39;
      __label__ = 6;
      break;
     case 5:
      
      
      var $14 = _common($state_addr, $tok_addr);
      $0 = $14;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element4($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else if ($1 == 41) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 39;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 184;
      $0 = 51;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element5($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 21) {
        __label__ = 3;
        break;
      } else if ($1 == 36) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      $0 = 39;
      __label__ = 5;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 39;
      $0 = 46;
      __label__ = 5;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 182;
      $0 = 39;
      __label__ = 5;
      break;
     case 4:
      
      
      var $10 = _common($state_addr, $tok_addr);
      $0 = $10;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element6($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 3;
        break;
      } else if ($1 == 23) {
        __label__ = 2;
        break;
      } else if ($1 == 30) {
        __label__ = 4;
        break;
      } else if ($1 == 31) {
        __label__ = 5;
        break;
      } else if ($1 == 32) {
        __label__ = 6;
        break;
      } else if ($1 == 41) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      $0 = 39;
      __label__ = 8;
      break;
     case 2:
      
      
      
      var $5 = HEAP[$state_addr + 4] + 1;
      
      
      HEAP[$state_addr + 4] = $5;
      $0 = 44;
      __label__ = 8;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 180;
      $0 = 51;
      __label__ = 8;
      break;
     case 4:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 180;
      $0 = 53;
      __label__ = 8;
      break;
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 180;
      $0 = 52;
      __label__ = 8;
      break;
     case 6:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 180;
      $0 = 54;
      __label__ = 8;
      break;
     case 7:
      
      
      var $18 = _common($state_addr, $tok_addr);
      $0 = $18;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _element7($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 21) {
        __label__ = 15;
        break;
      } else if ($1 == 24) {
        __label__ = 2;
        break;
      } else if ($1 == 35) {
        __label__ = 8;
        break;
      } else if ($1 == 36) {
        __label__ = 5;
        break;
      } else if ($1 == 37) {
        __label__ = 11;
        break;
      } else if ($1 == 38) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 1:
      $0 = 39;
      __label__ = 17;
      break;
     case 2:
      
      
      
      var $5 = HEAP[$state_addr + 4] - 1;
      
      
      HEAP[$state_addr + 4] = $5;
      
      
      
      
      if (HEAP[$state_addr + 4] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 39;
      __label__ = 4;
      break;
     case 4:
      $0 = 45;
      __label__ = 17;
      break;
     case 5:
      
      
      
      var $19 = HEAP[$state_addr + 4] - 1;
      
      
      HEAP[$state_addr + 4] = $19;
      
      
      
      
      if (HEAP[$state_addr + 4] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 39;
      __label__ = 7;
      break;
     case 7:
      $0 = 46;
      __label__ = 17;
      break;
     case 8:
      
      
      
      var $33 = HEAP[$state_addr + 4] - 1;
      
      
      HEAP[$state_addr + 4] = $33;
      
      
      
      
      if (HEAP[$state_addr + 4] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 39;
      __label__ = 10;
      break;
     case 10:
      $0 = 47;
      __label__ = 17;
      break;
     case 11:
      
      
      
      var $47 = HEAP[$state_addr + 4] - 1;
      
      
      HEAP[$state_addr + 4] = $47;
      
      
      
      
      if (HEAP[$state_addr + 4] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 134;
      
      
      HEAP[$state_addr + 8] = 39;
      __label__ = 13;
      break;
     case 13:
      $0 = 48;
      __label__ = 17;
      break;
     case 14:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 178;
      $0 = 50;
      __label__ = 17;
      break;
     case 15:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 178;
      $0 = 49;
      __label__ = 17;
      break;
     case 16:
      
      
      var $64 = _common($state_addr, $tok_addr);
      $0 = $64;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _condSect0($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 18) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      
      
      var $4 = HEAP[$enc_addr + 28];
      
      
      
      var $8 = FUNCTION_TABLE[$4]($enc_addr, $ptr_addr, $end_addr, _KW_INCLUDE);
      
      if ($8 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 186;
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      var $14 = HEAP[$enc_addr + 28];
      
      
      
      var $18 = FUNCTION_TABLE[$14]($enc_addr, $ptr_addr, $end_addr, _KW_IGNORE);
      
      if ($18 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 188;
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      
      var $24 = _common($state_addr, $tok_addr);
      $0 = $24;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _condSect1($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 25) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 120;
      
      
      
      var $7 = HEAP[$state_addr + 12] + 1;
      
      
      HEAP[$state_addr + 12] = $7;
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      var $12 = _common($state_addr, $tok_addr);
      $0 = $12;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _condSect2($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 25) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 4;
      break;
     case 2:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 120;
      $0 = 58;
      __label__ = 4;
      break;
     case 3:
      
      
      var $6 = _common($state_addr, $tok_addr);
      $0 = $6;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _declClose($state, $tok, $ptr, $end, $enc) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $ptr_addr;
      var $end_addr;
      var $enc_addr;
      var $retval;
      var $iftmp_5;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $enc_addr = $enc;
      var $1 = $tok_addr;
      if ($1 == 15) {
        __label__ = 1;
        break;
      } else if ($1 == 17) {
        __label__ = 2;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      
      
      $0 = HEAP[$state_addr + 8];
      __label__ = 7;
      break;
     case 2:
      
      
      
      
      if (HEAP[$state_addr + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_5 = FUNCTION_TABLE_OFFSET + 100;
      __label__ = 5;
      break;
     case 4:
      $iftmp_5 = FUNCTION_TABLE_OFFSET + 120;
      __label__ = 5;
      break;
     case 5:
      
      
      
      HEAP[$state_addr] = $iftmp_5;
      
      
      
      $0 = HEAP[$state_addr + 8];
      __label__ = 7;
      break;
     case 6:
      
      
      var $17 = _common($state_addr, $tok_addr);
      $0 = $17;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _error($state, $tok, $ptr, $end, $enc) {
    
    var $state_addr;
    var $tok_addr;
    var $ptr_addr;
    var $end_addr;
    var $retval;
    var $0;
    $state_addr = $state;
    $tok_addr = $tok;
    $ptr_addr = $ptr;
    $end_addr = $end;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _common($state, $tok) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $tok_addr;
      var $retval;
      var $0;
      $state_addr = $state;
      $tok_addr = $tok;
      
      
      
      
      if (HEAP[$state_addr + 16] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      if ($tok_addr == 28) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 59;
      __label__ = 4;
      break;
     case 3:
      
      
      HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 96;
      $0 = -1;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _PyExpat_XmlPrologStateInit($state) {
    
    var $state_addr;
    $state_addr = $state;
    
    
    HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 190;
    
    
    HEAP[$state_addr + 16] = 1;
    
    
    HEAP[$state_addr + 12] = 0;
    
    
    HEAP[$state_addr + 20] = 0;
    return;
  }
  function _PyExpat_XmlPrologStateInitExternalEntity($state) {
    
    var $state_addr;
    $state_addr = $state;
    
    
    HEAP[$state_addr] = FUNCTION_TABLE_OFFSET + 192;
    
    
    HEAP[$state_addr + 16] = 0;
    
    
    HEAP[$state_addr + 12] = 0;
    return;
  }
  function _isNever($enc, $p) {
    
    var $enc_addr;
    var $retval;
    var $0;
    $enc_addr = $enc;
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _utf8_isName2($enc, $p) {
    
    var $enc_addr;
    var $p_addr;
    var $retval;
    var $0;
    $enc_addr = $enc;
    $p_addr = $p;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $0 = 1 << (HEAP[$p_addr + 1] & 31) & HEAP[_namingBitmap + ((HEAP[$p_addr] & 3) * 2 + HEAP[_namePages + (HEAP[$p_addr] >>> 2 & 7)] * 8 + (HEAP[$p_addr + 1] >>> 5 & 1)) * 4];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _utf8_isName3($enc, $p) {
    
    var $enc_addr;
    var $p_addr;
    var $retval;
    var $0;
    $enc_addr = $enc;
    $p_addr = $p;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $0 = 1 << (HEAP[$p_addr + 2] & 31) & HEAP[_namingBitmap + ((HEAP[$p_addr + 1] & 3) * 2 + HEAP[_namePages + ((HEAP[$p_addr + 1] >>> 2 & 15) + (HEAP[$p_addr] & 15) * 16)] * 8 + (HEAP[$p_addr + 2] >>> 5 & 1)) * 4];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _utf8_isNmstrt2($enc, $p) {
    
    var $enc_addr;
    var $p_addr;
    var $retval;
    var $0;
    $enc_addr = $enc;
    $p_addr = $p;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $0 = 1 << (HEAP[$p_addr + 1] & 31) & HEAP[_namingBitmap + ((HEAP[$p_addr] & 3) * 2 + HEAP[_nmstrtPages + (HEAP[$p_addr] >>> 2 & 7)] * 8 + (HEAP[$p_addr + 1] >>> 5 & 1)) * 4];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _utf8_isNmstrt3($enc, $p) {
    
    var $enc_addr;
    var $p_addr;
    var $retval;
    var $0;
    $enc_addr = $enc;
    $p_addr = $p;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $0 = 1 << (HEAP[$p_addr + 2] & 31) & HEAP[_namingBitmap + ((HEAP[$p_addr + 1] & 3) * 2 + HEAP[_nmstrtPages + ((HEAP[$p_addr + 1] >>> 2 & 15) + (HEAP[$p_addr] & 15) * 16)] * 8 + (HEAP[$p_addr + 2] >>> 5 & 1)) * 4];
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _utf8_isInvalid2($enc, $p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $p_addr;
      var $retval;
      var $iftmp_18;
      var $0;
      $enc_addr = $enc;
      $p_addr = $p;
      
      
      
      if (HEAP[$p_addr] <= 193) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$p_addr + 1] >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      
      
      if ((HEAP[$p_addr + 1] & 192) == 192) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_18 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_18 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $iftmp_18;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _utf8_isInvalid3($enc, $p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $p_addr;
      var $retval;
      var $iftmp_32;
      var $iftmp_29;
      var $iftmp_22;
      var $0;
      $enc_addr = $enc;
      $p_addr = $p;
      
      
      
      
      if (HEAP[$p_addr + 2] >= 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$p_addr] != -17;
      if ($7) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $11 = HEAP[$p_addr + 1] != -65;
      if ($11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[$p_addr + 2] > 189) {
        __label__ = 18;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      if ((HEAP[$p_addr + 2] & 192) == 192) {
        __label__ = 18;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $24 = HEAP[$p_addr] == -32;
      
      
      var $27 = HEAP[$p_addr + 1];
      if ($24) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 6:
      
      if ($27 <= 159) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      
      
      if ((HEAP[$p_addr + 1] & 192) == 192) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $iftmp_29 = 1;
      __label__ = 10;
      break;
     case 9:
      $iftmp_29 = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if (($iftmp_29 & 255) != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 11:
      
      if ($27 >= 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      var $40 = HEAP[$p_addr] == -19;
      
      
      var $43 = HEAP[$p_addr + 1];
      if ($40) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      if ($43 > 159) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      if (($43 & 192) == 192) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $iftmp_32 = 1;
      __label__ = 17;
      break;
     case 16:
      $iftmp_32 = 0;
      __label__ = 17;
      break;
     case 17:
      
      
      
      if (($iftmp_32 & 255) != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $iftmp_22 = 1;
      __label__ = 20;
      break;
     case 19:
      $iftmp_22 = 0;
      __label__ = 20;
      break;
     case 20:
      
      $0 = $iftmp_22;
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _utf8_isInvalid4($enc, $p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $p_addr;
      var $retval;
      var $iftmp_46;
      var $iftmp_43;
      var $iftmp_37;
      var $0;
      $enc_addr = $enc;
      $p_addr = $p;
      
      
      
      
      if (HEAP[$p_addr + 3] >= 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      if ((HEAP[$p_addr + 3] & 192) == 192) {
        __label__ = 17;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$p_addr + 2] >= 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      if ((HEAP[$p_addr + 2] & 192) == 192) {
        __label__ = 17;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $23 = HEAP[$p_addr] == -16;
      
      
      var $26 = HEAP[$p_addr + 1];
      if ($23) {
        __label__ = 5;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      
      if ($26 <= 143) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      if ((HEAP[$p_addr + 1] & 192) == 192) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $iftmp_43 = 1;
      __label__ = 9;
      break;
     case 8:
      $iftmp_43 = 0;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (($iftmp_43 & 255) != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 10:
      
      if ($26 >= 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $39 = HEAP[$p_addr] == -12;
      
      
      var $42 = HEAP[$p_addr + 1];
      if ($39) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      if ($42 > 143) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      if (($42 & 192) == 192) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $iftmp_46 = 1;
      __label__ = 16;
      break;
     case 15:
      $iftmp_46 = 0;
      __label__ = 16;
      break;
     case 16:
      
      
      
      if (($iftmp_46 & 255) != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $iftmp_37 = 1;
      __label__ = 19;
      break;
     case 18:
      $iftmp_37 = 0;
      __label__ = 19;
      break;
     case 19:
      
      $0 = $iftmp_37;
      
      $retval = $0;
      var $retval20 = $retval;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanComment($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$ptr_addr] != 45) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 32;
      break;
     case 3:
      
      var $10 = $ptr_addr + 1;
      $ptr_addr = $10;
      __label__ = 30;
      break;
     case 4:
      
      
      
      
      
      
      
      
      var $19 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($19 == 0) {
        __label__ = 20;
        break;
      } else if ($19 == 1) {
        __label__ = 20;
        break;
      } else if ($19 == 5) {
        __label__ = 5;
        break;
      } else if ($19 == 6) {
        __label__ = 10;
        break;
      } else if ($19 == 7) {
        __label__ = 15;
        break;
      } else if ($19 == 8) {
        __label__ = 20;
        break;
      } else if ($19 == 27) {
        __label__ = 21;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 5:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 32;
      break;
     case 7:
      
      
      
      var $29 = HEAP[$enc_addr + 356];
      
      
      var $32 = FUNCTION_TABLE[$29]($enc_addr, $ptr_addr);
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 32;
      break;
     case 9:
      
      var $37 = $ptr_addr + 2;
      $ptr_addr = $37;
      __label__ = 30;
      break;
     case 10:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -2;
      __label__ = 32;
      break;
     case 12:
      
      
      
      var $47 = HEAP[$enc_addr + 360];
      
      
      var $50 = FUNCTION_TABLE[$47]($enc_addr, $ptr_addr);
      
      if ($50 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 32;
      break;
     case 14:
      
      var $55 = $ptr_addr + 3;
      $ptr_addr = $55;
      __label__ = 30;
      break;
     case 15:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = -2;
      __label__ = 32;
      break;
     case 17:
      
      
      
      var $65 = HEAP[$enc_addr + 364];
      
      
      var $68 = FUNCTION_TABLE[$65]($enc_addr, $ptr_addr);
      
      if ($68 != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 32;
      break;
     case 19:
      
      var $73 = $ptr_addr + 4;
      $ptr_addr = $73;
      __label__ = 30;
      break;
     case 20:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 32;
      break;
     case 21:
      
      var $77 = $ptr_addr + 1;
      $ptr_addr = $77;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = -1;
      __label__ = 32;
      break;
     case 23:
      
      
      
      if (HEAP[$ptr_addr] == 45) {
        __label__ = 24;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 24:
      
      var $85 = $ptr_addr + 1;
      $ptr_addr = $85;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = -1;
      __label__ = 32;
      break;
     case 26:
      
      
      
      if (HEAP[$ptr_addr] != 62) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 32;
      break;
     case 28:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 13;
      __label__ = 32;
      break;
     case 29:
      
      var $98 = $ptr_addr + 1;
      $ptr_addr = $98;
      __label__ = 30;
      break;
     case 30:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      $0 = -1;
      __label__ = 32;
      break;
     case 32:
      
      $retval = $0;
      var $retval33 = $retval;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanDecl($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 17;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $12 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($12 == 20) {
        __label__ = 4;
        break;
      } else if ($12 == 22) {
        __label__ = 5;
        break;
      } else if ($12 == 24) {
        __label__ = 5;
        break;
      } else if ($12 == 27) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      
      var $18 = _normal_scanComment($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $18;
      __label__ = 17;
      break;
     case 4:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 33;
      __label__ = 17;
      break;
     case 5:
      
      var $23 = $ptr_addr + 1;
      $ptr_addr = $23;
      __label__ = 15;
      break;
     case 6:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 17;
      break;
     case 7:
      
      
      
      
      
      
      
      
      var $34 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($34 == 9) {
        __label__ = 12;
        break;
      } else if ($34 == 10) {
        __label__ = 12;
        break;
      } else if ($34 == 21) {
        __label__ = 12;
        break;
      } else if ($34 == 22) {
        __label__ = 13;
        break;
      } else if ($34 == 24) {
        __label__ = 13;
        break;
      } else if ($34 == 30) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 8:
      
      
      
      
      if ($ptr_addr + 1 == $end_addr) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = -1;
      __label__ = 17;
      break;
     case 10:
      
      
      
      
      
      
      
      
      
      var $48 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr + 1]];
      if ($48 == 9) {
        __label__ = 11;
        break;
      } else if ($48 == 10) {
        __label__ = 11;
        break;
      } else if ($48 == 21) {
        __label__ = 11;
        break;
      } else if ($48 == 30) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 17;
      break;
     case 12:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 16;
      __label__ = 17;
      break;
     case 13:
      
      var $54 = $ptr_addr + 1;
      $ptr_addr = $54;
      __label__ = 15;
      break;
     case 14:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 17;
      break;
     case 15:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 7;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      $0 = -1;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_checkPiTarget($enc, $ptr, $end, $tokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $tokPtr_addr;
      var $retval;
      var $0;
      var $upper;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $tokPtr_addr = $tokPtr;
      $upper = 0;
      
      HEAP[$tokPtr_addr] = 11;
      
      
      
      
      
      
      if ($end_addr - $ptr_addr != 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 1;
      __label__ = 14;
      break;
     case 2:
      
      
      var $10 = HEAP[$ptr_addr];
      if ($10 == 88) {
        __label__ = 3;
        break;
      } else if ($10 == 120) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $upper = 1;
      __label__ = 5;
      break;
     case 4:
      $0 = 1;
      __label__ = 14;
      break;
     case 5:
      
      var $12 = $ptr_addr + 1;
      $ptr_addr = $12;
      
      
      var $15 = HEAP[$ptr_addr];
      if ($15 == 77) {
        __label__ = 6;
        break;
      } else if ($15 == 109) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $upper = 1;
      __label__ = 8;
      break;
     case 7:
      $0 = 1;
      __label__ = 14;
      break;
     case 8:
      
      var $17 = $ptr_addr + 1;
      $ptr_addr = $17;
      
      
      var $20 = HEAP[$ptr_addr];
      if ($20 == 76) {
        __label__ = 9;
        break;
      } else if ($20 == 108) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $upper = 1;
      __label__ = 12;
      break;
     case 10:
      $0 = 1;
      __label__ = 14;
      break;
     case 11:
      
      
      if ($upper != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 14;
      break;
     case 13:
      
      HEAP[$tokPtr_addr] = 12;
      $0 = 1;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanPi($enc, $ptr, $end, $nextTokPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      var $tok = __stackBase__;
      var $target;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      $target = $ptr_addr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 75;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $13 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($13 == 5) {
        __label__ = 5;
        break;
      } else if ($13 == 6) {
        __label__ = 10;
        break;
      } else if ($13 == 7) {
        __label__ = 15;
        break;
      } else if ($13 == 22) {
        __label__ = 4;
        break;
      } else if ($13 == 24) {
        __label__ = 4;
        break;
      } else if ($13 == 29) {
        __label__ = 3;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 3:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 4:
      
      var $17 = $ptr_addr + 1;
      $ptr_addr = $17;
      __label__ = 73;
      break;
     case 5:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 75;
      break;
     case 7:
      
      
      
      var $27 = HEAP[$enc_addr + 344];
      
      
      var $30 = FUNCTION_TABLE[$27]($enc_addr, $ptr_addr);
      
      if ($30 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 9:
      
      var $35 = $ptr_addr + 2;
      $ptr_addr = $35;
      __label__ = 73;
      break;
     case 10:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -2;
      __label__ = 75;
      break;
     case 12:
      
      
      
      var $45 = HEAP[$enc_addr + 348];
      
      
      var $48 = FUNCTION_TABLE[$45]($enc_addr, $ptr_addr);
      
      if ($48 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 14:
      
      var $53 = $ptr_addr + 3;
      $ptr_addr = $53;
      __label__ = 73;
      break;
     case 15:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = -2;
      __label__ = 75;
      break;
     case 17:
      
      
      
      var $63 = HEAP[$enc_addr + 352];
      
      
      var $66 = FUNCTION_TABLE[$63]($enc_addr, $ptr_addr);
      
      if ($66 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 19:
      
      var $71 = $ptr_addr + 4;
      $ptr_addr = $71;
      __label__ = 73;
      break;
     case 20:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 21:
      
      
      
      
      
      
      
      
      var $82 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($82 == 5) {
        __label__ = 24;
        break;
      } else if ($82 == 6) {
        __label__ = 29;
        break;
      } else if ($82 == 7) {
        __label__ = 34;
        break;
      } else if ($82 == 9) {
        __label__ = 39;
        break;
      } else if ($82 == 10) {
        __label__ = 39;
        break;
      } else if ($82 == 15) {
        __label__ = 66;
        break;
      } else if ($82 == 21) {
        __label__ = 39;
        break;
      } else if ($82 == 22) {
        __label__ = 23;
        break;
      } else if ($82 == 24) {
        __label__ = 23;
        break;
      } else if ($82 == 25) {
        __label__ = 23;
        break;
      } else if ($82 == 26) {
        __label__ = 23;
        break;
      } else if ($82 == 27) {
        __label__ = 23;
        break;
      } else if ($82 == 29) {
        __label__ = 22;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 22:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 23:
      
      var $86 = $ptr_addr + 1;
      $ptr_addr = $86;
      __label__ = 73;
      break;
     case 24:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = -2;
      __label__ = 75;
      break;
     case 26:
      
      
      
      var $96 = HEAP[$enc_addr + 332];
      
      
      var $99 = FUNCTION_TABLE[$96]($enc_addr, $ptr_addr);
      
      if ($99 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 28:
      
      var $104 = $ptr_addr + 2;
      $ptr_addr = $104;
      __label__ = 73;
      break;
     case 29:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $0 = -2;
      __label__ = 75;
      break;
     case 31:
      
      
      
      var $114 = HEAP[$enc_addr + 336];
      
      
      var $117 = FUNCTION_TABLE[$114]($enc_addr, $ptr_addr);
      
      if ($117 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 33:
      
      var $122 = $ptr_addr + 3;
      $ptr_addr = $122;
      __label__ = 73;
      break;
     case 34:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      $0 = -2;
      __label__ = 75;
      break;
     case 36:
      
      
      
      var $132 = HEAP[$enc_addr + 340];
      
      
      var $135 = FUNCTION_TABLE[$132]($enc_addr, $ptr_addr);
      
      if ($135 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 38:
      
      var $140 = $ptr_addr + 4;
      $ptr_addr = $140;
      __label__ = 73;
      break;
     case 39:
      
      
      
      var $144 = _normal_checkPiTarget($enc_addr, $target, $ptr_addr, $tok);
      
      if ($144 == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 41:
      
      var $149 = $ptr_addr + 1;
      $ptr_addr = $149;
      __label__ = 64;
      break;
     case 42:
      
      
      
      
      
      
      
      
      var $158 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($158 == 0) {
        __label__ = 58;
        break;
      } else if ($158 == 1) {
        __label__ = 58;
        break;
      } else if ($158 == 5) {
        __label__ = 43;
        break;
      } else if ($158 == 6) {
        __label__ = 48;
        break;
      } else if ($158 == 7) {
        __label__ = 53;
        break;
      } else if ($158 == 8) {
        __label__ = 58;
        break;
      } else if ($158 == 15) {
        __label__ = 59;
        break;
      } else {
        __label__ = 63;
        break;
      }
     case 43:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      $0 = -2;
      __label__ = 75;
      break;
     case 45:
      
      
      
      var $168 = HEAP[$enc_addr + 356];
      
      
      var $171 = FUNCTION_TABLE[$168]($enc_addr, $ptr_addr);
      
      if ($171 != 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 47:
      
      var $176 = $ptr_addr + 2;
      $ptr_addr = $176;
      __label__ = 64;
      break;
     case 48:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      $0 = -2;
      __label__ = 75;
      break;
     case 50:
      
      
      
      var $186 = HEAP[$enc_addr + 360];
      
      
      var $189 = FUNCTION_TABLE[$186]($enc_addr, $ptr_addr);
      
      if ($189 != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 52:
      
      var $194 = $ptr_addr + 3;
      $ptr_addr = $194;
      __label__ = 64;
      break;
     case 53:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      $0 = -2;
      __label__ = 75;
      break;
     case 55:
      
      
      
      var $204 = HEAP[$enc_addr + 364];
      
      
      var $207 = FUNCTION_TABLE[$204]($enc_addr, $ptr_addr);
      
      if ($207 != 0) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 57:
      
      var $212 = $ptr_addr + 4;
      $ptr_addr = $212;
      __label__ = 64;
      break;
     case 58:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 59:
      
      var $216 = $ptr_addr + 1;
      $ptr_addr = $216;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      $0 = -1;
      __label__ = 75;
      break;
     case 61:
      
      
      
      if (HEAP[$ptr_addr] == 62) {
        __label__ = 62;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 62:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      
      $0 = HEAP[$tok];
      __label__ = 75;
      break;
     case 63:
      
      var $228 = $ptr_addr + 1;
      $ptr_addr = $228;
      __label__ = 64;
      break;
     case 64:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 42;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 65:
      $0 = -1;
      __label__ = 75;
      break;
     case 66:
      
      
      
      var $235 = _normal_checkPiTarget($enc_addr, $target, $ptr_addr, $tok);
      
      if ($235 == 0) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 68:
      
      var $240 = $ptr_addr + 1;
      $ptr_addr = $240;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      $0 = -1;
      __label__ = 75;
      break;
     case 70:
      
      
      
      if (HEAP[$ptr_addr] == 62) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      
      $0 = HEAP[$tok];
      __label__ = 75;
      break;
     case 72:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 75;
      break;
     case 73:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 21;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      $0 = -1;
      __label__ = 75;
      break;
     case 75:
      
      $retval = $0;
      var $retval77 = $retval;
      STACKTOP = __stackBase__;
      return $retval77;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanCdataSection($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      var $i;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 8;
      break;
     case 2:
      $i = 0;
      __lastLabel__ = 2;
      __label__ = 6;
      break;
     case 3:
      
      
      
      
      
      
      if (HEAP[$ptr_addr] != HEAP[_CDATA_LSQB_9078 + $i]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 8;
      break;
     case 5:
      
      var $16 = $i + 1;
      $i = $16;
      
      var $18 = $ptr_addr + 1;
      $ptr_addr = $18;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $19 = __lastLabel__ == 5 ? $16 : 0;
      
      if ($19 <= 5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 8;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_cdataSectionTok($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -4;
      __label__ = 51;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $12 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($12 == 0) {
        __label__ = 32;
        break;
      } else if ($12 == 1) {
        __label__ = 32;
        break;
      } else if ($12 == 4) {
        __label__ = 3;
        break;
      } else if ($12 == 5) {
        __label__ = 17;
        break;
      } else if ($12 == 6) {
        __label__ = 22;
        break;
      } else if ($12 == 7) {
        __label__ = 27;
        break;
      } else if ($12 == 8) {
        __label__ = 32;
        break;
      } else if ($12 == 9) {
        __label__ = 11;
        break;
      } else if ($12 == 10) {
        __label__ = 16;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 3:
      
      var $14 = $ptr_addr + 1;
      $ptr_addr = $14;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 51;
      break;
     case 5:
      
      
      
      if (HEAP[$ptr_addr] != 93) {
        __label__ = 49;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $22 = $ptr_addr + 1;
      $ptr_addr = $22;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 51;
      break;
     case 8:
      
      
      
      var $29 = $ptr_addr;
      if (HEAP[$ptr_addr] != 62) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $30 = $29 + -1;
      $ptr_addr = $30;
      __label__ = 49;
      break;
     case 10:
      
      
      HEAP[$nextTokPtr_addr] = $29 + 1;
      $0 = 40;
      __label__ = 51;
      break;
     case 11:
      
      var $34 = $ptr_addr + 1;
      $ptr_addr = $34;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = -1;
      __label__ = 51;
      break;
     case 13:
      
      
      
      
      
      
      
      
      
      if (HEAP[$enc_addr + 76 + HEAP[$ptr_addr]] == 10) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      var $48 = $ptr_addr + 1;
      $ptr_addr = $48;
      __label__ = 15;
      break;
     case 15:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 7;
      __label__ = 51;
      break;
     case 16:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 7;
      __label__ = 51;
      break;
     case 17:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = -2;
      __label__ = 51;
      break;
     case 19:
      
      
      
      var $63 = HEAP[$enc_addr + 356];
      
      
      var $66 = FUNCTION_TABLE[$63]($enc_addr, $ptr_addr);
      
      if ($66 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 21:
      
      var $71 = $ptr_addr + 2;
      $ptr_addr = $71;
      __label__ = 49;
      break;
     case 22:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = -2;
      __label__ = 51;
      break;
     case 24:
      
      
      
      var $81 = HEAP[$enc_addr + 360];
      
      
      var $84 = FUNCTION_TABLE[$81]($enc_addr, $ptr_addr);
      
      if ($84 != 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 26:
      
      var $89 = $ptr_addr + 3;
      $ptr_addr = $89;
      __label__ = 49;
      break;
     case 27:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $0 = -2;
      __label__ = 51;
      break;
     case 29:
      
      
      
      var $99 = HEAP[$enc_addr + 364];
      
      
      var $102 = FUNCTION_TABLE[$99]($enc_addr, $ptr_addr);
      
      if ($102 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 31:
      
      var $107 = $ptr_addr + 4;
      $ptr_addr = $107;
      __label__ = 49;
      break;
     case 32:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 33:
      
      var $111 = $ptr_addr + 1;
      $ptr_addr = $111;
      __label__ = 49;
      break;
     case 34:
      
      
      
      
      
      
      
      
      var $120 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($120 == 0) {
        __label__ = 47;
        break;
      } else if ($120 == 1) {
        __label__ = 47;
        break;
      } else if ($120 == 4) {
        __label__ = 47;
        break;
      } else if ($120 == 5) {
        __label__ = 35;
        break;
      } else if ($120 == 6) {
        __label__ = 39;
        break;
      } else if ($120 == 7) {
        __label__ = 43;
        break;
      } else if ($120 == 8) {
        __label__ = 47;
        break;
      } else if ($120 == 9) {
        __label__ = 47;
        break;
      } else if ($120 == 10) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 35:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 37;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      var $130 = HEAP[$enc_addr + 356];
      
      
      var $133 = FUNCTION_TABLE[$130]($enc_addr, $ptr_addr);
      
      if ($133 != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 51;
      break;
     case 38:
      
      var $138 = $ptr_addr + 2;
      $ptr_addr = $138;
      __label__ = 49;
      break;
     case 39:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      var $148 = HEAP[$enc_addr + 360];
      
      
      var $151 = FUNCTION_TABLE[$148]($enc_addr, $ptr_addr);
      
      if ($151 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 51;
      break;
     case 42:
      
      var $156 = $ptr_addr + 3;
      $ptr_addr = $156;
      __label__ = 49;
      break;
     case 43:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 45;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      
      var $166 = HEAP[$enc_addr + 364];
      
      
      var $169 = FUNCTION_TABLE[$166]($enc_addr, $ptr_addr);
      
      if ($169 != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 51;
      break;
     case 46:
      
      var $174 = $ptr_addr + 4;
      $ptr_addr = $174;
      __label__ = 49;
      break;
     case 47:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 51;
      break;
     case 48:
      
      var $178 = $ptr_addr + 1;
      $ptr_addr = $178;
      __label__ = 49;
      break;
     case 49:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 34;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 51;
      break;
     case 51:
      
      $retval = $0;
      var $retval52 = $retval;
      return $retval52;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanEndTag($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 51;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $12 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($12 == 5) {
        __label__ = 5;
        break;
      } else if ($12 == 6) {
        __label__ = 10;
        break;
      } else if ($12 == 7) {
        __label__ = 15;
        break;
      } else if ($12 == 22) {
        __label__ = 4;
        break;
      } else if ($12 == 24) {
        __label__ = 4;
        break;
      } else if ($12 == 29) {
        __label__ = 3;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 3:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 4:
      
      var $16 = $ptr_addr + 1;
      $ptr_addr = $16;
      __label__ = 49;
      break;
     case 5:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 51;
      break;
     case 7:
      
      
      
      var $26 = HEAP[$enc_addr + 344];
      
      
      var $29 = FUNCTION_TABLE[$26]($enc_addr, $ptr_addr);
      
      if ($29 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 9:
      
      var $34 = $ptr_addr + 2;
      $ptr_addr = $34;
      __label__ = 49;
      break;
     case 10:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -2;
      __label__ = 51;
      break;
     case 12:
      
      
      
      var $44 = HEAP[$enc_addr + 348];
      
      
      var $47 = FUNCTION_TABLE[$44]($enc_addr, $ptr_addr);
      
      if ($47 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 14:
      
      var $52 = $ptr_addr + 3;
      $ptr_addr = $52;
      __label__ = 49;
      break;
     case 15:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = -2;
      __label__ = 51;
      break;
     case 17:
      
      
      
      var $62 = HEAP[$enc_addr + 352];
      
      
      var $65 = FUNCTION_TABLE[$62]($enc_addr, $ptr_addr);
      
      if ($65 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 19:
      
      var $70 = $ptr_addr + 4;
      $ptr_addr = $70;
      __label__ = 49;
      break;
     case 20:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 21:
      
      
      
      
      
      
      
      
      var $81 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($81 == 5) {
        __label__ = 24;
        break;
      } else if ($81 == 6) {
        __label__ = 29;
        break;
      } else if ($81 == 7) {
        __label__ = 34;
        break;
      } else if ($81 == 9) {
        __label__ = 39;
        break;
      } else if ($81 == 10) {
        __label__ = 39;
        break;
      } else if ($81 == 11) {
        __label__ = 47;
        break;
      } else if ($81 == 21) {
        __label__ = 39;
        break;
      } else if ($81 == 22) {
        __label__ = 23;
        break;
      } else if ($81 == 23) {
        __label__ = 46;
        break;
      } else if ($81 == 24) {
        __label__ = 23;
        break;
      } else if ($81 == 25) {
        __label__ = 23;
        break;
      } else if ($81 == 26) {
        __label__ = 23;
        break;
      } else if ($81 == 27) {
        __label__ = 23;
        break;
      } else if ($81 == 29) {
        __label__ = 22;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 22:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 23:
      
      var $85 = $ptr_addr + 1;
      $ptr_addr = $85;
      __label__ = 49;
      break;
     case 24:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = -2;
      __label__ = 51;
      break;
     case 26:
      
      
      
      var $95 = HEAP[$enc_addr + 332];
      
      
      var $98 = FUNCTION_TABLE[$95]($enc_addr, $ptr_addr);
      
      if ($98 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 28:
      
      var $103 = $ptr_addr + 2;
      $ptr_addr = $103;
      __label__ = 49;
      break;
     case 29:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $0 = -2;
      __label__ = 51;
      break;
     case 31:
      
      
      
      var $113 = HEAP[$enc_addr + 336];
      
      
      var $116 = FUNCTION_TABLE[$113]($enc_addr, $ptr_addr);
      
      if ($116 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 33:
      
      var $121 = $ptr_addr + 3;
      $ptr_addr = $121;
      __label__ = 49;
      break;
     case 34:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      $0 = -2;
      __label__ = 51;
      break;
     case 36:
      
      
      
      var $131 = HEAP[$enc_addr + 340];
      
      
      var $134 = FUNCTION_TABLE[$131]($enc_addr, $ptr_addr);
      
      if ($134 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 38:
      
      var $139 = $ptr_addr + 4;
      $ptr_addr = $139;
      __label__ = 49;
      break;
     case 39:
      
      var $141 = $ptr_addr + 1;
      $ptr_addr = $141;
      __label__ = 44;
      break;
     case 40:
      
      
      
      
      
      
      
      
      var $150 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($150 == 9) {
        __label__ = 41;
        break;
      } else if ($150 == 10) {
        __label__ = 41;
        break;
      } else if ($150 == 11) {
        __label__ = 42;
        break;
      } else if ($150 == 21) {
        __label__ = 41;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 41:
      
      var $152 = $ptr_addr + 1;
      $ptr_addr = $152;
      __label__ = 44;
      break;
     case 42:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 5;
      __label__ = 51;
      break;
     case 43:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 44:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 40;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      $0 = -1;
      __label__ = 51;
      break;
     case 46:
      
      var $162 = $ptr_addr + 1;
      $ptr_addr = $162;
      __label__ = 49;
      break;
     case 47:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 5;
      __label__ = 51;
      break;
     case 48:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 51;
      break;
     case 49:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 21;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      $0 = -1;
      __label__ = 51;
      break;
     case 51:
      
      $retval = $0;
      var $retval52 = $retval;
      return $retval52;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanHexCharRef($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      var $_off = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]] + -24;
      
      if ($_off < 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $14 = $ptr_addr + 1;
      $ptr_addr = $14;
      __label__ = 8;
      break;
     case 3:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 10;
      break;
     case 4:
      
      
      
      
      
      
      
      
      var $25 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($25 == 18) {
        __label__ = 6;
        break;
      } else if ($25 == 24) {
        __label__ = 5;
        break;
      } else if ($25 == 25) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      var $27 = $ptr_addr + 1;
      $ptr_addr = $27;
      __label__ = 8;
      break;
     case 6:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 10;
      __label__ = 10;
      break;
     case 7:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 10;
      break;
     case 8:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      $0 = -1;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanCharRef($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$ptr_addr] == 120) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      var $12 = _normal_scanHexCharRef($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $12;
      __label__ = 12;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$enc_addr + 76 + HEAP[$ptr_addr]] == 25) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $23 = $ptr_addr + 1;
      $ptr_addr = $23;
      __label__ = 10;
      break;
     case 5:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 12;
      break;
     case 6:
      
      
      
      
      
      
      
      
      var $34 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($34 == 18) {
        __label__ = 8;
        break;
      } else if ($34 == 25) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      var $36 = $ptr_addr + 1;
      $ptr_addr = $36;
      __label__ = 10;
      break;
     case 8:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 10;
      __label__ = 12;
      break;
     case 9:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 12;
      break;
     case 10:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      $0 = -1;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanRef($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 44;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $12 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($12 == 5) {
        __label__ = 5;
        break;
      } else if ($12 == 6) {
        __label__ = 10;
        break;
      } else if ($12 == 7) {
        __label__ = 15;
        break;
      } else if ($12 == 19) {
        __label__ = 20;
        break;
      } else if ($12 == 22) {
        __label__ = 4;
        break;
      } else if ($12 == 24) {
        __label__ = 4;
        break;
      } else if ($12 == 29) {
        __label__ = 3;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 3:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 4:
      
      var $16 = $ptr_addr + 1;
      $ptr_addr = $16;
      __label__ = 42;
      break;
     case 5:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 44;
      break;
     case 7:
      
      
      
      var $26 = HEAP[$enc_addr + 344];
      
      
      var $29 = FUNCTION_TABLE[$26]($enc_addr, $ptr_addr);
      
      if ($29 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 9:
      
      var $34 = $ptr_addr + 2;
      $ptr_addr = $34;
      __label__ = 42;
      break;
     case 10:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -2;
      __label__ = 44;
      break;
     case 12:
      
      
      
      var $44 = HEAP[$enc_addr + 348];
      
      
      var $47 = FUNCTION_TABLE[$44]($enc_addr, $ptr_addr);
      
      if ($47 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 14:
      
      var $52 = $ptr_addr + 3;
      $ptr_addr = $52;
      __label__ = 42;
      break;
     case 15:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = -2;
      __label__ = 44;
      break;
     case 17:
      
      
      
      var $62 = HEAP[$enc_addr + 352];
      
      
      var $65 = FUNCTION_TABLE[$62]($enc_addr, $ptr_addr);
      
      if ($65 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 19:
      
      var $70 = $ptr_addr + 4;
      $ptr_addr = $70;
      __label__ = 42;
      break;
     case 20:
      
      
      
      
      
      var $76 = _normal_scanCharRef($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $76;
      __label__ = 44;
      break;
     case 21:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 22:
      
      
      
      
      
      
      
      
      var $87 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($87 == 5) {
        __label__ = 25;
        break;
      } else if ($87 == 6) {
        __label__ = 30;
        break;
      } else if ($87 == 7) {
        __label__ = 35;
        break;
      } else if ($87 == 18) {
        __label__ = 40;
        break;
      } else if ($87 == 22) {
        __label__ = 24;
        break;
      } else if ($87 == 24) {
        __label__ = 24;
        break;
      } else if ($87 == 25) {
        __label__ = 24;
        break;
      } else if ($87 == 26) {
        __label__ = 24;
        break;
      } else if ($87 == 27) {
        __label__ = 24;
        break;
      } else if ($87 == 29) {
        __label__ = 23;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 23:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 24:
      
      var $91 = $ptr_addr + 1;
      $ptr_addr = $91;
      __label__ = 42;
      break;
     case 25:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $0 = -2;
      __label__ = 44;
      break;
     case 27:
      
      
      
      var $101 = HEAP[$enc_addr + 332];
      
      
      var $104 = FUNCTION_TABLE[$101]($enc_addr, $ptr_addr);
      
      if ($104 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 29:
      
      var $109 = $ptr_addr + 2;
      $ptr_addr = $109;
      __label__ = 42;
      break;
     case 30:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = -2;
      __label__ = 44;
      break;
     case 32:
      
      
      
      var $119 = HEAP[$enc_addr + 336];
      
      
      var $122 = FUNCTION_TABLE[$119]($enc_addr, $ptr_addr);
      
      if ($122 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 34:
      
      var $127 = $ptr_addr + 3;
      $ptr_addr = $127;
      __label__ = 42;
      break;
     case 35:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      $0 = -2;
      __label__ = 44;
      break;
     case 37:
      
      
      
      var $137 = HEAP[$enc_addr + 340];
      
      
      var $140 = FUNCTION_TABLE[$137]($enc_addr, $ptr_addr);
      
      if ($140 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 39:
      
      var $145 = $ptr_addr + 4;
      $ptr_addr = $145;
      __label__ = 42;
      break;
     case 40:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 9;
      __label__ = 44;
      break;
     case 41:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 42:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 22;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      $0 = -1;
      __label__ = 44;
      break;
     case 44:
      
      $retval = $0;
      var $retval45 = $retval;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanAtts($enc, $ptr, $end, $nextTokPtr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr = __stackBase__;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      var $hadColon;
      var $t;
      var $open;
      var $t58;
      var $tok;
      $enc_addr = $enc;
      HEAP[$ptr_addr] = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      $hadColon = 0;
      __label__ = 112;
      break;
     case 1:
      
      
      
      
      
      
      
      
      var $9 = HEAP[$enc_addr + 76 + HEAP[HEAP[$ptr_addr]]];
      if ($9 == 5) {
        __label__ = 4;
        break;
      } else if ($9 == 6) {
        __label__ = 9;
        break;
      } else if ($9 == 7) {
        __label__ = 14;
        break;
      } else if ($9 == 9) {
        __label__ = 42;
        break;
      } else if ($9 == 10) {
        __label__ = 42;
        break;
      } else if ($9 == 14) {
        __label__ = 47;
        break;
      } else if ($9 == 21) {
        __label__ = 42;
        break;
      } else if ($9 == 22) {
        __label__ = 3;
        break;
      } else if ($9 == 23) {
        __label__ = 19;
        break;
      } else if ($9 == 24) {
        __label__ = 3;
        break;
      } else if ($9 == 25) {
        __label__ = 3;
        break;
      } else if ($9 == 26) {
        __label__ = 3;
        break;
      } else if ($9 == 27) {
        __label__ = 3;
        break;
      } else if ($9 == 29) {
        __label__ = 2;
        break;
      } else {
        __label__ = 111;
        break;
      }
     case 2:
      var $10 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $10;
      $0 = 0;
      __label__ = 114;
      break;
     case 3:
      
      var $13 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $13;
      __label__ = 112;
      break;
     case 4:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -2;
      __label__ = 114;
      break;
     case 6:
      
      
      
      var $23 = HEAP[$enc_addr + 332];
      var $24 = HEAP[$ptr_addr];
      
      var $26 = FUNCTION_TABLE[$23]($enc_addr, $24);
      
      var $28 = HEAP[$ptr_addr];
      if ($26 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      HEAP[$nextTokPtr_addr] = $28;
      $0 = 0;
      __label__ = 114;
      break;
     case 8:
      var $30 = $28 + 2;
      HEAP[$ptr_addr] = $30;
      __label__ = 112;
      break;
     case 9:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 2) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -2;
      __label__ = 114;
      break;
     case 11:
      
      
      
      var $40 = HEAP[$enc_addr + 336];
      var $41 = HEAP[$ptr_addr];
      
      var $43 = FUNCTION_TABLE[$40]($enc_addr, $41);
      
      var $45 = HEAP[$ptr_addr];
      if ($43 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      HEAP[$nextTokPtr_addr] = $45;
      $0 = 0;
      __label__ = 114;
      break;
     case 13:
      var $47 = $45 + 3;
      HEAP[$ptr_addr] = $47;
      __label__ = 112;
      break;
     case 14:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 3) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = -2;
      __label__ = 114;
      break;
     case 16:
      
      
      
      var $57 = HEAP[$enc_addr + 340];
      var $58 = HEAP[$ptr_addr];
      
      var $60 = FUNCTION_TABLE[$57]($enc_addr, $58);
      
      var $62 = HEAP[$ptr_addr];
      if ($60 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      HEAP[$nextTokPtr_addr] = $62;
      $0 = 0;
      __label__ = 114;
      break;
     case 18:
      var $64 = $62 + 4;
      HEAP[$ptr_addr] = $64;
      __label__ = 112;
      break;
     case 19:
      
      
      if ($hadColon != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      var $67 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $67;
      $0 = 0;
      __label__ = 114;
      break;
     case 21:
      $hadColon = 1;
      
      var $70 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $70;
      
      
      
      if (HEAP[$ptr_addr] == $end_addr) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = -1;
      __label__ = 114;
      break;
     case 23:
      
      
      
      
      
      
      
      
      var $82 = HEAP[$enc_addr + 76 + HEAP[HEAP[$ptr_addr]]];
      if ($82 == 5) {
        __label__ = 26;
        break;
      } else if ($82 == 6) {
        __label__ = 31;
        break;
      } else if ($82 == 7) {
        __label__ = 36;
        break;
      } else if ($82 == 22) {
        __label__ = 25;
        break;
      } else if ($82 == 24) {
        __label__ = 25;
        break;
      } else if ($82 == 29) {
        __label__ = 24;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 24:
      var $83 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $83;
      $0 = 0;
      __label__ = 114;
      break;
     case 25:
      
      var $86 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $86;
      __label__ = 112;
      break;
     case 26:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 1) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      $0 = -2;
      __label__ = 114;
      break;
     case 28:
      
      
      
      var $96 = HEAP[$enc_addr + 344];
      var $97 = HEAP[$ptr_addr];
      
      var $99 = FUNCTION_TABLE[$96]($enc_addr, $97);
      
      var $101 = HEAP[$ptr_addr];
      if ($99 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      HEAP[$nextTokPtr_addr] = $101;
      $0 = 0;
      __label__ = 114;
      break;
     case 30:
      var $103 = $101 + 2;
      HEAP[$ptr_addr] = $103;
      __label__ = 112;
      break;
     case 31:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 2) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      $0 = -2;
      __label__ = 114;
      break;
     case 33:
      
      
      
      var $113 = HEAP[$enc_addr + 348];
      var $114 = HEAP[$ptr_addr];
      
      var $116 = FUNCTION_TABLE[$113]($enc_addr, $114);
      
      var $118 = HEAP[$ptr_addr];
      if ($116 == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      HEAP[$nextTokPtr_addr] = $118;
      $0 = 0;
      __label__ = 114;
      break;
     case 35:
      var $120 = $118 + 3;
      HEAP[$ptr_addr] = $120;
      __label__ = 112;
      break;
     case 36:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 3) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      $0 = -2;
      __label__ = 114;
      break;
     case 38:
      
      
      
      var $130 = HEAP[$enc_addr + 352];
      var $131 = HEAP[$ptr_addr];
      
      var $133 = FUNCTION_TABLE[$130]($enc_addr, $131);
      
      var $135 = HEAP[$ptr_addr];
      if ($133 == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      HEAP[$nextTokPtr_addr] = $135;
      $0 = 0;
      __label__ = 114;
      break;
     case 40:
      var $137 = $135 + 4;
      HEAP[$ptr_addr] = $137;
      __label__ = 112;
      break;
     case 41:
      var $138 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $138;
      $0 = 0;
      __label__ = 114;
      break;
     case 42:
      
      var $141 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $141;
      
      
      
      if (HEAP[$ptr_addr] == $end_addr) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      $0 = -1;
      __label__ = 114;
      break;
     case 44:
      
      
      
      
      
      
      
      
      
      $t = HEAP[$enc_addr + 76 + HEAP[HEAP[$ptr_addr]]];
      
      
      if ($t == 14) {
        __label__ = 47;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      var $156 = $t;
      if ($156 == 9) {
        __label__ = 42;
        break;
      } else if ($156 == 10) {
        __label__ = 42;
        break;
      } else if ($156 == 21) {
        __label__ = 42;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      var $157 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $157;
      $0 = 0;
      __label__ = 114;
      break;
     case 47:
      $hadColon = 0;
      __label__ = 48;
      break;
     case 48:
      
      var $160 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $160;
      
      
      
      if (HEAP[$ptr_addr] == $end_addr) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      $0 = -1;
      __label__ = 114;
      break;
     case 50:
      
      
      
      
      
      
      
      
      
      $open = HEAP[$enc_addr + 76 + HEAP[HEAP[$ptr_addr]]];
      
      
      
      
      
      if ($open == 12 | $open == 13) {
        __label__ = 53;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      var $177 = $open;
      if ($177 == 9) {
        __label__ = 48;
        break;
      } else if ($177 == 10) {
        __label__ = 48;
        break;
      } else if ($177 == 21) {
        __label__ = 48;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      var $178 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $178;
      $0 = 0;
      __label__ = 114;
      break;
     case 53:
      
      var $181 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $181;
      __label__ = 54;
      break;
     case 54:
      
      
      
      if (HEAP[$ptr_addr] == $end_addr) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      $0 = -1;
      __label__ = 114;
      break;
     case 56:
      
      
      
      
      
      
      
      
      
      $t58 = HEAP[$enc_addr + 76 + HEAP[HEAP[$ptr_addr]]];
      
      
      
      if ($t58 == $open) {
        __label__ = 80;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 57:
      var $197 = $t58;
      if ($197 == 0) {
        __label__ = 73;
        break;
      } else if ($197 == 1) {
        __label__ = 73;
        break;
      } else if ($197 == 2) {
        __label__ = 78;
        break;
      } else if ($197 == 3) {
        __label__ = 74;
        break;
      } else if ($197 == 5) {
        __label__ = 58;
        break;
      } else if ($197 == 6) {
        __label__ = 63;
        break;
      } else if ($197 == 7) {
        __label__ = 68;
        break;
      } else if ($197 == 8) {
        __label__ = 73;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 58:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 1) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      $0 = -2;
      __label__ = 114;
      break;
     case 60:
      
      
      
      var $207 = HEAP[$enc_addr + 356];
      var $208 = HEAP[$ptr_addr];
      
      var $210 = FUNCTION_TABLE[$207]($enc_addr, $208);
      
      var $212 = HEAP[$ptr_addr];
      if ($210 != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      HEAP[$nextTokPtr_addr] = $212;
      $0 = 0;
      __label__ = 114;
      break;
     case 62:
      var $214 = $212 + 2;
      HEAP[$ptr_addr] = $214;
      __label__ = 54;
      break;
     case 63:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 2) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      $0 = -2;
      __label__ = 114;
      break;
     case 65:
      
      
      
      var $224 = HEAP[$enc_addr + 360];
      var $225 = HEAP[$ptr_addr];
      
      var $227 = FUNCTION_TABLE[$224]($enc_addr, $225);
      
      var $229 = HEAP[$ptr_addr];
      if ($227 != 0) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      
      HEAP[$nextTokPtr_addr] = $229;
      $0 = 0;
      __label__ = 114;
      break;
     case 67:
      var $231 = $229 + 3;
      HEAP[$ptr_addr] = $231;
      __label__ = 54;
      break;
     case 68:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 3) {
        __label__ = 69;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 69:
      $0 = -2;
      __label__ = 114;
      break;
     case 70:
      
      
      
      var $241 = HEAP[$enc_addr + 364];
      var $242 = HEAP[$ptr_addr];
      
      var $244 = FUNCTION_TABLE[$241]($enc_addr, $242);
      
      var $246 = HEAP[$ptr_addr];
      if ($244 != 0) {
        __label__ = 71;
        break;
      } else {
        __label__ = 72;
        break;
      }
     case 71:
      
      HEAP[$nextTokPtr_addr] = $246;
      $0 = 0;
      __label__ = 114;
      break;
     case 72:
      var $248 = $246 + 4;
      HEAP[$ptr_addr] = $248;
      __label__ = 54;
      break;
     case 73:
      var $249 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $249;
      $0 = 0;
      __label__ = 114;
      break;
     case 74:
      
      var $252 = HEAP[$ptr_addr] + 1;
      
      
      var $255 = _normal_scanRef($enc_addr, $252, $end_addr, $ptr_addr);
      $tok = $255;
      
      
      if ($tok <= 0) {
        __label__ = 75;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 75:
      
      
      if ($tok == 0) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      var $260 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $260;
      __label__ = 77;
      break;
     case 77:
      
      $0 = $tok;
      __label__ = 114;
      break;
     case 78:
      var $263 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $263;
      $0 = 0;
      __label__ = 114;
      break;
     case 79:
      
      var $266 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $266;
      __label__ = 54;
      break;
     case 80:
      
      var $268 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $268;
      
      
      
      if (HEAP[$ptr_addr] == $end_addr) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 81:
      $0 = -1;
      __label__ = 114;
      break;
     case 82:
      
      
      
      
      
      
      
      
      var $280 = HEAP[$enc_addr + 76 + HEAP[HEAP[$ptr_addr]]];
      if ($280 == 9) {
        __label__ = 84;
        break;
      } else if ($280 == 10) {
        __label__ = 84;
        break;
      } else if ($280 == 11) {
        __label__ = 104;
        break;
      } else if ($280 == 17) {
        __label__ = 105;
        break;
      } else if ($280 == 21) {
        __label__ = 84;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 83:
      var $281 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $281;
      $0 = 0;
      __label__ = 114;
      break;
     case 84:
      
      var $284 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $284;
      
      
      
      if (HEAP[$ptr_addr] == $end_addr) {
        __label__ = 85;
        break;
      } else {
        __label__ = 86;
        break;
      }
     case 85:
      $0 = -1;
      __label__ = 114;
      break;
     case 86:
      
      
      
      
      
      
      
      
      var $296 = HEAP[$enc_addr + 76 + HEAP[HEAP[$ptr_addr]]];
      if ($296 == 5) {
        __label__ = 89;
        break;
      } else if ($296 == 6) {
        __label__ = 94;
        break;
      } else if ($296 == 7) {
        __label__ = 99;
        break;
      } else if ($296 == 9) {
        __label__ = 84;
        break;
      } else if ($296 == 10) {
        __label__ = 84;
        break;
      } else if ($296 == 11) {
        __label__ = 104;
        break;
      } else if ($296 == 17) {
        __label__ = 105;
        break;
      } else if ($296 == 21) {
        __label__ = 84;
        break;
      } else if ($296 == 22) {
        __label__ = 88;
        break;
      } else if ($296 == 24) {
        __label__ = 88;
        break;
      } else if ($296 == 29) {
        __label__ = 87;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 87:
      var $297 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $297;
      $0 = 0;
      __label__ = 114;
      break;
     case 88:
      
      var $300 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $300;
      __label__ = 112;
      break;
     case 89:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 1) {
        __label__ = 90;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 90:
      $0 = -2;
      __label__ = 114;
      break;
     case 91:
      
      
      
      var $310 = HEAP[$enc_addr + 344];
      var $311 = HEAP[$ptr_addr];
      
      var $313 = FUNCTION_TABLE[$310]($enc_addr, $311);
      
      var $315 = HEAP[$ptr_addr];
      if ($313 == 0) {
        __label__ = 92;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 92:
      
      HEAP[$nextTokPtr_addr] = $315;
      $0 = 0;
      __label__ = 114;
      break;
     case 93:
      var $317 = $315 + 2;
      HEAP[$ptr_addr] = $317;
      __label__ = 112;
      break;
     case 94:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 2) {
        __label__ = 95;
        break;
      } else {
        __label__ = 96;
        break;
      }
     case 95:
      $0 = -2;
      __label__ = 114;
      break;
     case 96:
      
      
      
      var $327 = HEAP[$enc_addr + 348];
      var $328 = HEAP[$ptr_addr];
      
      var $330 = FUNCTION_TABLE[$327]($enc_addr, $328);
      
      var $332 = HEAP[$ptr_addr];
      if ($330 == 0) {
        __label__ = 97;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 97:
      
      HEAP[$nextTokPtr_addr] = $332;
      $0 = 0;
      __label__ = 114;
      break;
     case 98:
      var $334 = $332 + 3;
      HEAP[$ptr_addr] = $334;
      __label__ = 112;
      break;
     case 99:
      
      
      
      
      
      
      if ($end_addr - HEAP[$ptr_addr] <= 3) {
        __label__ = 100;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 100:
      $0 = -2;
      __label__ = 114;
      break;
     case 101:
      
      
      
      var $344 = HEAP[$enc_addr + 352];
      var $345 = HEAP[$ptr_addr];
      
      var $347 = FUNCTION_TABLE[$344]($enc_addr, $345);
      
      var $349 = HEAP[$ptr_addr];
      if ($347 == 0) {
        __label__ = 102;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 102:
      
      HEAP[$nextTokPtr_addr] = $349;
      $0 = 0;
      __label__ = 114;
      break;
     case 103:
      var $351 = $349 + 4;
      HEAP[$ptr_addr] = $351;
      __label__ = 112;
      break;
     case 104:
      
      var $353 = HEAP[$ptr_addr] + 1;
      
      HEAP[$nextTokPtr_addr] = $353;
      $0 = 1;
      __label__ = 114;
      break;
     case 105:
      
      var $356 = HEAP[$ptr_addr] + 1;
      HEAP[$ptr_addr] = $356;
      
      
      
      if (HEAP[$ptr_addr] == $end_addr) {
        __label__ = 106;
        break;
      } else {
        __label__ = 107;
        break;
      }
     case 106:
      $0 = -1;
      __label__ = 114;
      break;
     case 107:
      
      
      
      var $363 = HEAP[$ptr_addr];
      if (HEAP[HEAP[$ptr_addr]] != 62) {
        __label__ = 108;
        break;
      } else {
        __label__ = 109;
        break;
      }
     case 108:
      
      HEAP[$nextTokPtr_addr] = $363;
      $0 = 0;
      __label__ = 114;
      break;
     case 109:
      var $365 = $363 + 1;
      
      HEAP[$nextTokPtr_addr] = $365;
      $0 = 3;
      __label__ = 114;
      break;
     case 110:
      var $367 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $367;
      $0 = 0;
      __label__ = 114;
      break;
     case 111:
      var $369 = HEAP[$ptr_addr];
      
      HEAP[$nextTokPtr_addr] = $369;
      $0 = 0;
      __label__ = 114;
      break;
     case 112:
      
      
      
      if (HEAP[$ptr_addr] != $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 113;
        break;
      }
     case 113:
      $0 = -1;
      __label__ = 114;
      break;
     case 114:
      
      $retval = $0;
      var $retval124 = $retval;
      STACKTOP = __stackBase__;
      return $retval124;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanLt($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      var $hadColon;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 104;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $12 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($12 == 5) {
        __label__ = 5;
        break;
      } else if ($12 == 6) {
        __label__ = 10;
        break;
      } else if ($12 == 7) {
        __label__ = 15;
        break;
      } else if ($12 == 15) {
        __label__ = 26;
        break;
      } else if ($12 == 16) {
        __label__ = 20;
        break;
      } else if ($12 == 17) {
        __label__ = 27;
        break;
      } else if ($12 == 22) {
        __label__ = 4;
        break;
      } else if ($12 == 24) {
        __label__ = 4;
        break;
      } else if ($12 == 29) {
        __label__ = 3;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 3:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 4:
      
      var $16 = $ptr_addr + 1;
      $ptr_addr = $16;
      __label__ = 29;
      break;
     case 5:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 104;
      break;
     case 7:
      
      
      
      var $26 = HEAP[$enc_addr + 344];
      
      
      var $29 = FUNCTION_TABLE[$26]($enc_addr, $ptr_addr);
      
      if ($29 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 9:
      
      var $34 = $ptr_addr + 2;
      $ptr_addr = $34;
      __label__ = 29;
      break;
     case 10:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -2;
      __label__ = 104;
      break;
     case 12:
      
      
      
      var $44 = HEAP[$enc_addr + 348];
      
      
      var $47 = FUNCTION_TABLE[$44]($enc_addr, $ptr_addr);
      
      if ($47 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 14:
      
      var $52 = $ptr_addr + 3;
      $ptr_addr = $52;
      __label__ = 29;
      break;
     case 15:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = -2;
      __label__ = 104;
      break;
     case 17:
      
      
      
      var $62 = HEAP[$enc_addr + 352];
      
      
      var $65 = FUNCTION_TABLE[$62]($enc_addr, $ptr_addr);
      
      if ($65 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 19:
      
      var $70 = $ptr_addr + 4;
      $ptr_addr = $70;
      __label__ = 29;
      break;
     case 20:
      
      var $72 = $ptr_addr + 1;
      $ptr_addr = $72;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $0 = -1;
      __label__ = 104;
      break;
     case 22:
      
      
      
      
      
      
      
      
      var $84 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($84 == 20) {
        __label__ = 24;
        break;
      } else if ($84 == 27) {
        __label__ = 23;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 23:
      
      
      
      
      
      var $90 = _normal_scanComment($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $90;
      __label__ = 104;
      break;
     case 24:
      
      
      
      
      
      var $96 = _normal_scanCdataSection($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $96;
      __label__ = 104;
      break;
     case 25:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 26:
      
      
      
      
      
      var $104 = _normal_scanPi($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $104;
      __label__ = 104;
      break;
     case 27:
      
      
      
      
      
      var $110 = _normal_scanEndTag($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $110;
      __label__ = 104;
      break;
     case 28:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 29:
      $hadColon = 0;
      __label__ = 102;
      break;
     case 30:
      
      
      
      
      
      
      
      
      var $121 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($121 == 5) {
        __label__ = 33;
        break;
      } else if ($121 == 6) {
        __label__ = 38;
        break;
      } else if ($121 == 7) {
        __label__ = 43;
        break;
      } else if ($121 == 9) {
        __label__ = 71;
        break;
      } else if ($121 == 10) {
        __label__ = 71;
        break;
      } else if ($121 == 11) {
        __label__ = 95;
        break;
      } else if ($121 == 17) {
        __label__ = 96;
        break;
      } else if ($121 == 21) {
        __label__ = 71;
        break;
      } else if ($121 == 22) {
        __label__ = 32;
        break;
      } else if ($121 == 23) {
        __label__ = 48;
        break;
      } else if ($121 == 24) {
        __label__ = 32;
        break;
      } else if ($121 == 25) {
        __label__ = 32;
        break;
      } else if ($121 == 26) {
        __label__ = 32;
        break;
      } else if ($121 == 27) {
        __label__ = 32;
        break;
      } else if ($121 == 29) {
        __label__ = 31;
        break;
      } else {
        __label__ = 101;
        break;
      }
     case 31:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 32:
      
      var $125 = $ptr_addr + 1;
      $ptr_addr = $125;
      __label__ = 102;
      break;
     case 33:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      $0 = -2;
      __label__ = 104;
      break;
     case 35:
      
      
      
      var $135 = HEAP[$enc_addr + 332];
      
      
      var $138 = FUNCTION_TABLE[$135]($enc_addr, $ptr_addr);
      
      if ($138 == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 37:
      
      var $143 = $ptr_addr + 2;
      $ptr_addr = $143;
      __label__ = 102;
      break;
     case 38:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      $0 = -2;
      __label__ = 104;
      break;
     case 40:
      
      
      
      var $153 = HEAP[$enc_addr + 336];
      
      
      var $156 = FUNCTION_TABLE[$153]($enc_addr, $ptr_addr);
      
      if ($156 == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 42:
      
      var $161 = $ptr_addr + 3;
      $ptr_addr = $161;
      __label__ = 102;
      break;
     case 43:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      $0 = -2;
      __label__ = 104;
      break;
     case 45:
      
      
      
      var $171 = HEAP[$enc_addr + 340];
      
      
      var $174 = FUNCTION_TABLE[$171]($enc_addr, $ptr_addr);
      
      if ($174 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 47:
      
      var $179 = $ptr_addr + 4;
      $ptr_addr = $179;
      __label__ = 102;
      break;
     case 48:
      
      
      if ($hadColon != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 50:
      $hadColon = 1;
      
      var $185 = $ptr_addr + 1;
      $ptr_addr = $185;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      $0 = -1;
      __label__ = 104;
      break;
     case 52:
      
      
      
      
      
      
      
      
      var $197 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($197 == 5) {
        __label__ = 55;
        break;
      } else if ($197 == 6) {
        __label__ = 60;
        break;
      } else if ($197 == 7) {
        __label__ = 65;
        break;
      } else if ($197 == 22) {
        __label__ = 54;
        break;
      } else if ($197 == 24) {
        __label__ = 54;
        break;
      } else if ($197 == 29) {
        __label__ = 53;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 53:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 54:
      
      var $201 = $ptr_addr + 1;
      $ptr_addr = $201;
      __label__ = 102;
      break;
     case 55:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      $0 = -2;
      __label__ = 104;
      break;
     case 57:
      
      
      
      var $211 = HEAP[$enc_addr + 344];
      
      
      var $214 = FUNCTION_TABLE[$211]($enc_addr, $ptr_addr);
      
      if ($214 == 0) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 59:
      
      var $219 = $ptr_addr + 2;
      $ptr_addr = $219;
      __label__ = 102;
      break;
     case 60:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      $0 = -2;
      __label__ = 104;
      break;
     case 62:
      
      
      
      var $229 = HEAP[$enc_addr + 348];
      
      
      var $232 = FUNCTION_TABLE[$229]($enc_addr, $ptr_addr);
      
      if ($232 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 64;
        break;
      }
     case 63:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 64:
      
      var $237 = $ptr_addr + 3;
      $ptr_addr = $237;
      __label__ = 102;
      break;
     case 65:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 66;
        break;
      } else {
        __label__ = 67;
        break;
      }
     case 66:
      $0 = -2;
      __label__ = 104;
      break;
     case 67:
      
      
      
      var $247 = HEAP[$enc_addr + 352];
      
      
      var $250 = FUNCTION_TABLE[$247]($enc_addr, $ptr_addr);
      
      if ($250 == 0) {
        __label__ = 68;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 68:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 69:
      
      var $255 = $ptr_addr + 4;
      $ptr_addr = $255;
      __label__ = 102;
      break;
     case 70:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 71:
      
      var $259 = $ptr_addr + 1;
      $ptr_addr = $259;
      __label__ = 93;
      break;
     case 72:
      
      
      
      
      
      
      
      
      var $268 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($268 == 5) {
        __label__ = 75;
        break;
      } else if ($268 == 6) {
        __label__ = 80;
        break;
      } else if ($268 == 7) {
        __label__ = 85;
        break;
      } else if ($268 == 9) {
        __label__ = 90;
        break;
      } else if ($268 == 10) {
        __label__ = 90;
        break;
      } else if ($268 == 11) {
        __label__ = 95;
        break;
      } else if ($268 == 17) {
        __label__ = 96;
        break;
      } else if ($268 == 21) {
        __label__ = 90;
        break;
      } else if ($268 == 22) {
        __label__ = 74;
        break;
      } else if ($268 == 24) {
        __label__ = 74;
        break;
      } else if ($268 == 29) {
        __label__ = 73;
        break;
      } else {
        __label__ = 91;
        break;
      }
     case 73:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 74:
      
      var $272 = $ptr_addr + 1;
      $ptr_addr = $272;
      __label__ = 92;
      break;
     case 75:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 76;
        break;
      } else {
        __label__ = 77;
        break;
      }
     case 76:
      $0 = -2;
      __label__ = 104;
      break;
     case 77:
      
      
      
      var $282 = HEAP[$enc_addr + 344];
      
      
      var $285 = FUNCTION_TABLE[$282]($enc_addr, $ptr_addr);
      
      if ($285 == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 79;
        break;
      }
     case 78:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 79:
      
      var $290 = $ptr_addr + 2;
      $ptr_addr = $290;
      __label__ = 92;
      break;
     case 80:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 81;
        break;
      } else {
        __label__ = 82;
        break;
      }
     case 81:
      $0 = -2;
      __label__ = 104;
      break;
     case 82:
      
      
      
      var $300 = HEAP[$enc_addr + 348];
      
      
      var $303 = FUNCTION_TABLE[$300]($enc_addr, $ptr_addr);
      
      if ($303 == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 84:
      
      var $308 = $ptr_addr + 3;
      $ptr_addr = $308;
      __label__ = 92;
      break;
     case 85:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 86;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 86:
      $0 = -2;
      __label__ = 104;
      break;
     case 87:
      
      
      
      var $318 = HEAP[$enc_addr + 352];
      
      
      var $321 = FUNCTION_TABLE[$318]($enc_addr, $ptr_addr);
      
      if ($321 == 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 89;
        break;
      }
     case 88:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 89:
      
      var $326 = $ptr_addr + 4;
      $ptr_addr = $326;
      __label__ = 92;
      break;
     case 90:
      
      var $328 = $ptr_addr + 1;
      $ptr_addr = $328;
      __label__ = 93;
      break;
     case 91:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 92:
      
      
      
      
      var $335 = _normal_scanAtts($enc_addr, $ptr_addr, $end_addr, $nextTokPtr_addr);
      $0 = $335;
      __label__ = 104;
      break;
     case 93:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 72;
        break;
      } else {
        __label__ = 94;
        break;
      }
     case 94:
      $0 = -1;
      __label__ = 104;
      break;
     case 95:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 2;
      __label__ = 104;
      break;
     case 96:
      
      var $343 = $ptr_addr + 1;
      $ptr_addr = $343;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 97;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 97:
      $0 = -1;
      __label__ = 104;
      break;
     case 98:
      
      
      
      if (HEAP[$ptr_addr] != 62) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 100:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 4;
      __label__ = 104;
      break;
     case 101:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 104;
      break;
     case 102:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 30;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 103:
      $0 = -1;
      __label__ = 104;
      break;
     case 104:
      
      $retval = $0;
      var $retval105 = $retval;
      return $retval105;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_contentTok($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -4;
      __label__ = 60;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $12 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($12 == 0) {
        __label__ = 34;
        break;
      } else if ($12 == 1) {
        __label__ = 34;
        break;
      } else if ($12 == 2) {
        __label__ = 3;
        break;
      } else if ($12 == 3) {
        __label__ = 4;
        break;
      } else if ($12 == 4) {
        __label__ = 11;
        break;
      } else if ($12 == 5) {
        __label__ = 19;
        break;
      } else if ($12 == 6) {
        __label__ = 24;
        break;
      } else if ($12 == 7) {
        __label__ = 29;
        break;
      } else if ($12 == 8) {
        __label__ = 34;
        break;
      } else if ($12 == 9) {
        __label__ = 5;
        break;
      } else if ($12 == 10) {
        __label__ = 10;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 3:
      
      
      
      
      
      var $18 = _normal_scanLt($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $18;
      __label__ = 60;
      break;
     case 4:
      
      
      
      
      
      var $24 = _normal_scanRef($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $24;
      __label__ = 60;
      break;
     case 5:
      
      var $26 = $ptr_addr + 1;
      $ptr_addr = $26;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -3;
      __label__ = 60;
      break;
     case 7:
      
      
      
      
      
      
      
      
      
      if (HEAP[$enc_addr + 76 + HEAP[$ptr_addr]] == 10) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $40 = $ptr_addr + 1;
      $ptr_addr = $40;
      __label__ = 9;
      break;
     case 9:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 7;
      __label__ = 60;
      break;
     case 10:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 7;
      __label__ = 60;
      break;
     case 11:
      
      var $47 = $ptr_addr + 1;
      $ptr_addr = $47;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = -5;
      __label__ = 60;
      break;
     case 13:
      
      
      
      if (HEAP[$ptr_addr] != 93) {
        __label__ = 58;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      var $55 = $ptr_addr + 1;
      $ptr_addr = $55;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = -5;
      __label__ = 60;
      break;
     case 16:
      
      
      
      if (HEAP[$ptr_addr] != 62) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $63 = $ptr_addr + -1;
      $ptr_addr = $63;
      __label__ = 58;
      break;
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 60;
      break;
     case 19:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = -2;
      __label__ = 60;
      break;
     case 21:
      
      
      
      var $75 = HEAP[$enc_addr + 356];
      
      
      var $78 = FUNCTION_TABLE[$75]($enc_addr, $ptr_addr);
      
      if ($78 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 60;
      break;
     case 23:
      
      var $83 = $ptr_addr + 2;
      $ptr_addr = $83;
      __label__ = 58;
      break;
     case 24:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = -2;
      __label__ = 60;
      break;
     case 26:
      
      
      
      var $93 = HEAP[$enc_addr + 360];
      
      
      var $96 = FUNCTION_TABLE[$93]($enc_addr, $ptr_addr);
      
      if ($96 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 60;
      break;
     case 28:
      
      var $101 = $ptr_addr + 3;
      $ptr_addr = $101;
      __label__ = 58;
      break;
     case 29:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $0 = -2;
      __label__ = 60;
      break;
     case 31:
      
      
      
      var $111 = HEAP[$enc_addr + 364];
      
      
      var $114 = FUNCTION_TABLE[$111]($enc_addr, $ptr_addr);
      
      if ($114 != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 60;
      break;
     case 33:
      
      var $119 = $ptr_addr + 4;
      $ptr_addr = $119;
      __label__ = 58;
      break;
     case 34:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 60;
      break;
     case 35:
      
      var $123 = $ptr_addr + 1;
      $ptr_addr = $123;
      __label__ = 58;
      break;
     case 36:
      
      
      
      
      
      
      
      
      var $132 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($132 == 0) {
        __label__ = 56;
        break;
      } else if ($132 == 1) {
        __label__ = 56;
        break;
      } else if ($132 == 2) {
        __label__ = 56;
        break;
      } else if ($132 == 3) {
        __label__ = 56;
        break;
      } else if ($132 == 4) {
        __label__ = 49;
        break;
      } else if ($132 == 5) {
        __label__ = 37;
        break;
      } else if ($132 == 6) {
        __label__ = 41;
        break;
      } else if ($132 == 7) {
        __label__ = 45;
        break;
      } else if ($132 == 8) {
        __label__ = 56;
        break;
      } else if ($132 == 9) {
        __label__ = 56;
        break;
      } else if ($132 == 10) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 37:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 39;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 38:
      
      
      
      var $142 = HEAP[$enc_addr + 356];
      
      
      var $145 = FUNCTION_TABLE[$142]($enc_addr, $ptr_addr);
      
      if ($145 != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 60;
      break;
     case 40:
      
      var $150 = $ptr_addr + 2;
      $ptr_addr = $150;
      __label__ = 58;
      break;
     case 41:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 43;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      
      var $160 = HEAP[$enc_addr + 360];
      
      
      var $163 = FUNCTION_TABLE[$160]($enc_addr, $ptr_addr);
      
      if ($163 != 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 60;
      break;
     case 44:
      
      var $168 = $ptr_addr + 3;
      $ptr_addr = $168;
      __label__ = 58;
      break;
     case 45:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 47;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      
      
      var $178 = HEAP[$enc_addr + 364];
      
      
      var $181 = FUNCTION_TABLE[$178]($enc_addr, $ptr_addr);
      
      if ($181 != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 60;
      break;
     case 48:
      
      var $186 = $ptr_addr + 4;
      $ptr_addr = $186;
      __label__ = 58;
      break;
     case 49:
      
      
      
      
      if ($ptr_addr + 1 != $end_addr) {
        __label__ = 50;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 50:
      
      
      
      
      var $195 = $ptr_addr;
      if (HEAP[$ptr_addr + 1] != 93) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      var $196 = $195 + 1;
      $ptr_addr = $196;
      __label__ = 58;
      break;
     case 52:
      
      
      
      if ($195 + 2 != $end_addr) {
        __label__ = 53;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 53:
      
      
      
      
      var $204 = $ptr_addr;
      if (HEAP[$ptr_addr + 2] != 62) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      var $205 = $204 + 1;
      $ptr_addr = $205;
      __label__ = 58;
      break;
     case 55:
      
      
      HEAP[$nextTokPtr_addr] = $204 + 2;
      $0 = 0;
      __label__ = 60;
      break;
     case 56:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 60;
      break;
     case 57:
      
      var $211 = $ptr_addr + 1;
      $ptr_addr = $211;
      __label__ = 58;
      break;
     case 58:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 36;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 59:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 60;
      break;
     case 60:
      
      $retval = $0;
      var $retval61 = $retval;
      return $retval61;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanPercent($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -22;
      __label__ = 44;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $12 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($12 == 5) {
        __label__ = 5;
        break;
      } else if ($12 == 6) {
        __label__ = 10;
        break;
      } else if ($12 == 7) {
        __label__ = 15;
        break;
      } else if ($12 == 9) {
        __label__ = 20;
        break;
      } else if ($12 == 10) {
        __label__ = 20;
        break;
      } else if ($12 == 21) {
        __label__ = 20;
        break;
      } else if ($12 == 22) {
        __label__ = 4;
        break;
      } else if ($12 == 24) {
        __label__ = 4;
        break;
      } else if ($12 == 29) {
        __label__ = 3;
        break;
      } else if ($12 == 30) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 3:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 4:
      
      var $16 = $ptr_addr + 1;
      $ptr_addr = $16;
      __label__ = 42;
      break;
     case 5:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 44;
      break;
     case 7:
      
      
      
      var $26 = HEAP[$enc_addr + 344];
      
      
      var $29 = FUNCTION_TABLE[$26]($enc_addr, $ptr_addr);
      
      if ($29 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 9:
      
      var $34 = $ptr_addr + 2;
      $ptr_addr = $34;
      __label__ = 42;
      break;
     case 10:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -2;
      __label__ = 44;
      break;
     case 12:
      
      
      
      var $44 = HEAP[$enc_addr + 348];
      
      
      var $47 = FUNCTION_TABLE[$44]($enc_addr, $ptr_addr);
      
      if ($47 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 14:
      
      var $52 = $ptr_addr + 3;
      $ptr_addr = $52;
      __label__ = 42;
      break;
     case 15:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = -2;
      __label__ = 44;
      break;
     case 17:
      
      
      
      var $62 = HEAP[$enc_addr + 352];
      
      
      var $65 = FUNCTION_TABLE[$62]($enc_addr, $ptr_addr);
      
      if ($65 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 19:
      
      var $70 = $ptr_addr + 4;
      $ptr_addr = $70;
      __label__ = 42;
      break;
     case 20:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 22;
      __label__ = 44;
      break;
     case 21:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 22:
      
      
      
      
      
      
      
      
      var $83 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($83 == 5) {
        __label__ = 25;
        break;
      } else if ($83 == 6) {
        __label__ = 30;
        break;
      } else if ($83 == 7) {
        __label__ = 35;
        break;
      } else if ($83 == 18) {
        __label__ = 40;
        break;
      } else if ($83 == 22) {
        __label__ = 24;
        break;
      } else if ($83 == 24) {
        __label__ = 24;
        break;
      } else if ($83 == 25) {
        __label__ = 24;
        break;
      } else if ($83 == 26) {
        __label__ = 24;
        break;
      } else if ($83 == 27) {
        __label__ = 24;
        break;
      } else if ($83 == 29) {
        __label__ = 23;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 23:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 24:
      
      var $87 = $ptr_addr + 1;
      $ptr_addr = $87;
      __label__ = 42;
      break;
     case 25:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $0 = -2;
      __label__ = 44;
      break;
     case 27:
      
      
      
      var $97 = HEAP[$enc_addr + 332];
      
      
      var $100 = FUNCTION_TABLE[$97]($enc_addr, $ptr_addr);
      
      if ($100 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 29:
      
      var $105 = $ptr_addr + 2;
      $ptr_addr = $105;
      __label__ = 42;
      break;
     case 30:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      $0 = -2;
      __label__ = 44;
      break;
     case 32:
      
      
      
      var $115 = HEAP[$enc_addr + 336];
      
      
      var $118 = FUNCTION_TABLE[$115]($enc_addr, $ptr_addr);
      
      if ($118 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 34:
      
      var $123 = $ptr_addr + 3;
      $ptr_addr = $123;
      __label__ = 42;
      break;
     case 35:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      $0 = -2;
      __label__ = 44;
      break;
     case 37:
      
      
      
      var $133 = HEAP[$enc_addr + 340];
      
      
      var $136 = FUNCTION_TABLE[$133]($enc_addr, $ptr_addr);
      
      if ($136 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 39:
      
      var $141 = $ptr_addr + 4;
      $ptr_addr = $141;
      __label__ = 42;
      break;
     case 40:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 28;
      __label__ = 44;
      break;
     case 41:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 44;
      break;
     case 42:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 22;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      $0 = -1;
      __label__ = 44;
      break;
     case 44:
      
      $retval = $0;
      var $retval45 = $retval;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanPoundName($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 43;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $12 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($12 == 5) {
        __label__ = 5;
        break;
      } else if ($12 == 6) {
        __label__ = 10;
        break;
      } else if ($12 == 7) {
        __label__ = 15;
        break;
      } else if ($12 == 22) {
        __label__ = 4;
        break;
      } else if ($12 == 24) {
        __label__ = 4;
        break;
      } else if ($12 == 29) {
        __label__ = 3;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 3:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 4:
      
      var $16 = $ptr_addr + 1;
      $ptr_addr = $16;
      __label__ = 41;
      break;
     case 5:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 43;
      break;
     case 7:
      
      
      
      var $26 = HEAP[$enc_addr + 344];
      
      
      var $29 = FUNCTION_TABLE[$26]($enc_addr, $ptr_addr);
      
      if ($29 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 9:
      
      var $34 = $ptr_addr + 2;
      $ptr_addr = $34;
      __label__ = 41;
      break;
     case 10:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = -2;
      __label__ = 43;
      break;
     case 12:
      
      
      
      var $44 = HEAP[$enc_addr + 348];
      
      
      var $47 = FUNCTION_TABLE[$44]($enc_addr, $ptr_addr);
      
      if ($47 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 14:
      
      var $52 = $ptr_addr + 3;
      $ptr_addr = $52;
      __label__ = 41;
      break;
     case 15:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = -2;
      __label__ = 43;
      break;
     case 17:
      
      
      
      var $62 = HEAP[$enc_addr + 352];
      
      
      var $65 = FUNCTION_TABLE[$62]($enc_addr, $ptr_addr);
      
      if ($65 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 19:
      
      var $70 = $ptr_addr + 4;
      $ptr_addr = $70;
      __label__ = 41;
      break;
     case 20:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 21:
      
      
      
      
      
      
      
      
      var $81 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($81 == 5) {
        __label__ = 24;
        break;
      } else if ($81 == 6) {
        __label__ = 29;
        break;
      } else if ($81 == 7) {
        __label__ = 34;
        break;
      } else if ($81 == 9) {
        __label__ = 39;
        break;
      } else if ($81 == 10) {
        __label__ = 39;
        break;
      } else if ($81 == 11) {
        __label__ = 39;
        break;
      } else if ($81 == 21) {
        __label__ = 39;
        break;
      } else if ($81 == 22) {
        __label__ = 23;
        break;
      } else if ($81 == 24) {
        __label__ = 23;
        break;
      } else if ($81 == 25) {
        __label__ = 23;
        break;
      } else if ($81 == 26) {
        __label__ = 23;
        break;
      } else if ($81 == 27) {
        __label__ = 23;
        break;
      } else if ($81 == 29) {
        __label__ = 22;
        break;
      } else if ($81 == 30) {
        __label__ = 39;
        break;
      } else if ($81 == 32) {
        __label__ = 39;
        break;
      } else if ($81 == 36) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 22:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 23:
      
      var $85 = $ptr_addr + 1;
      $ptr_addr = $85;
      __label__ = 41;
      break;
     case 24:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      $0 = -2;
      __label__ = 43;
      break;
     case 26:
      
      
      
      var $95 = HEAP[$enc_addr + 332];
      
      
      var $98 = FUNCTION_TABLE[$95]($enc_addr, $ptr_addr);
      
      if ($98 == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 28:
      
      var $103 = $ptr_addr + 2;
      $ptr_addr = $103;
      __label__ = 41;
      break;
     case 29:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $0 = -2;
      __label__ = 43;
      break;
     case 31:
      
      
      
      var $113 = HEAP[$enc_addr + 336];
      
      
      var $116 = FUNCTION_TABLE[$113]($enc_addr, $ptr_addr);
      
      if ($116 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 33:
      
      var $121 = $ptr_addr + 3;
      $ptr_addr = $121;
      __label__ = 41;
      break;
     case 34:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      $0 = -2;
      __label__ = 43;
      break;
     case 36:
      
      
      
      var $131 = HEAP[$enc_addr + 340];
      
      
      var $134 = FUNCTION_TABLE[$131]($enc_addr, $ptr_addr);
      
      if ($134 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 38:
      
      var $139 = $ptr_addr + 4;
      $ptr_addr = $139;
      __label__ = 41;
      break;
     case 39:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 20;
      __label__ = 43;
      break;
     case 40:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 43;
      break;
     case 41:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 21;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      $0 = -20;
      __label__ = 43;
      break;
     case 43:
      
      $retval = $0;
      var $retval44 = $retval;
      return $retval44;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_scanLit($open, $enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $open_addr;
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      var $t;
      $open_addr = $open;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      __label__ = 25;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      $t = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      var $10 = $t;
      if ($10 == 0) {
        __label__ = 17;
        break;
      } else if ($10 == 1) {
        __label__ = 17;
        break;
      } else if ($10 == 5) {
        __label__ = 2;
        break;
      } else if ($10 == 6) {
        __label__ = 7;
        break;
      } else if ($10 == 7) {
        __label__ = 12;
        break;
      } else if ($10 == 8) {
        __label__ = 17;
        break;
      } else if ($10 == 12) {
        __label__ = 18;
        break;
      } else if ($10 == 13) {
        __label__ = 18;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 2:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -2;
      __label__ = 27;
      break;
     case 4:
      
      
      
      var $20 = HEAP[$enc_addr + 356];
      
      
      var $23 = FUNCTION_TABLE[$20]($enc_addr, $ptr_addr);
      
      if ($23 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 27;
      break;
     case 6:
      
      var $28 = $ptr_addr + 2;
      $ptr_addr = $28;
      __label__ = 25;
      break;
     case 7:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -2;
      __label__ = 27;
      break;
     case 9:
      
      
      
      var $38 = HEAP[$enc_addr + 360];
      
      
      var $41 = FUNCTION_TABLE[$38]($enc_addr, $ptr_addr);
      
      if ($41 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 27;
      break;
     case 11:
      
      var $46 = $ptr_addr + 3;
      $ptr_addr = $46;
      __label__ = 25;
      break;
     case 12:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = -2;
      __label__ = 27;
      break;
     case 14:
      
      
      
      var $56 = HEAP[$enc_addr + 364];
      
      
      var $59 = FUNCTION_TABLE[$56]($enc_addr, $ptr_addr);
      
      if ($59 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 27;
      break;
     case 16:
      
      var $64 = $ptr_addr + 4;
      $ptr_addr = $64;
      __label__ = 25;
      break;
     case 17:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 27;
      break;
     case 18:
      
      var $68 = $ptr_addr + 1;
      $ptr_addr = $68;
      
      
      
      if ($t != $open_addr) {
        __label__ = 25;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = -27;
      __label__ = 27;
      break;
     case 21:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      
      
      
      
      
      
      
      
      var $85 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($85 == 9) {
        __label__ = 22;
        break;
      } else if ($85 == 10) {
        __label__ = 22;
        break;
      } else if ($85 == 11) {
        __label__ = 22;
        break;
      } else if ($85 == 20) {
        __label__ = 22;
        break;
      } else if ($85 == 21) {
        __label__ = 22;
        break;
      } else if ($85 == 30) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = 27;
      __label__ = 27;
      break;
     case 23:
      $0 = 0;
      __label__ = 27;
      break;
     case 24:
      
      var $87 = $ptr_addr + 1;
      $ptr_addr = $87;
      __label__ = 25;
      break;
     case 25:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      $0 = -1;
      __label__ = 27;
      break;
     case 27:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_prologTok($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      var $tok;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -4;
      __label__ = 120;
      break;
     case 2:
      
      
      
      
      
      
      
      
      var $12 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($12 == 2) {
        __label__ = 5;
        break;
      } else if ($12 == 4) {
        __label__ = 22;
        break;
      } else if ($12 == 5) {
        __label__ = 42;
        break;
      } else if ($12 == 6) {
        __label__ = 49;
        break;
      } else if ($12 == 7) {
        __label__ = 56;
        break;
      } else if ($12 == 9) {
        __label__ = 12;
        break;
      } else if ($12 == 10) {
        __label__ = 14;
        break;
      } else if ($12 == 11) {
        __label__ = 40;
        break;
      } else if ($12 == 12) {
        __label__ = 3;
        break;
      } else if ($12 == 13) {
        __label__ = 4;
        break;
      } else if ($12 == 19) {
        __label__ = 41;
        break;
      } else if ($12 == 20) {
        __label__ = 21;
        break;
      } else if ($12 == 21) {
        __label__ = 14;
        break;
      } else if ($12 == 22) {
        __label__ = 63;
        break;
      } else if ($12 == 23) {
        __label__ = 64;
        break;
      } else if ($12 == 24) {
        __label__ = 63;
        break;
      } else if ($12 == 25) {
        __label__ = 64;
        break;
      } else if ($12 == 26) {
        __label__ = 64;
        break;
      } else if ($12 == 27) {
        __label__ = 64;
        break;
      } else if ($12 == 30) {
        __label__ = 19;
        break;
      } else if ($12 == 31) {
        __label__ = 30;
        break;
      } else if ($12 == 32) {
        __label__ = 31;
        break;
      } else if ($12 == 35) {
        __label__ = 20;
        break;
      } else if ($12 == 36) {
        __label__ = 39;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 3:
      
      
      
      
      
      var $18 = _normal_scanLit(12, $enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $18;
      __label__ = 120;
      break;
     case 4:
      
      
      
      
      
      var $24 = _normal_scanLit(13, $enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $24;
      __label__ = 120;
      break;
     case 5:
      
      var $26 = $ptr_addr + 1;
      $ptr_addr = $26;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 120;
      break;
     case 7:
      
      
      
      
      
      
      
      
      var $38 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($38 == 5) {
        __label__ = 10;
        break;
      } else if ($38 == 6) {
        __label__ = 10;
        break;
      } else if ($38 == 7) {
        __label__ = 10;
        break;
      } else if ($38 == 15) {
        __label__ = 9;
        break;
      } else if ($38 == 16) {
        __label__ = 8;
        break;
      } else if ($38 == 22) {
        __label__ = 10;
        break;
      } else if ($38 == 24) {
        __label__ = 10;
        break;
      } else if ($38 == 29) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      
      
      var $44 = _normal_scanDecl($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $44;
      __label__ = 120;
      break;
     case 9:
      
      
      
      
      
      var $50 = _normal_scanPi($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $50;
      __label__ = 120;
      break;
     case 10:
      
      var $52 = $ptr_addr + -1;
      
      HEAP[$nextTokPtr_addr] = $52;
      $0 = 29;
      __label__ = 120;
      break;
     case 11:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 12:
      
      
      
      
      if ($ptr_addr + 1 == $end_addr) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$nextTokPtr_addr] = $end_addr;
      $0 = -15;
      __label__ = 120;
      break;
     case 14:
      
      var $63 = $ptr_addr + 1;
      $ptr_addr = $63;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 18;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      
      var $75 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($75 == 9) {
        __label__ = 16;
        break;
      } else if ($75 == 10) {
        __label__ = 14;
        break;
      } else if ($75 == 21) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      if ($ptr_addr + 1 != $end_addr) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 15;
      __label__ = 120;
      break;
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 15;
      __label__ = 120;
      break;
     case 19:
      
      
      
      
      
      var $89 = _normal_scanPercent($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $89;
      __label__ = 120;
      break;
     case 20:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 38;
      __label__ = 120;
      break;
     case 21:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 25;
      __label__ = 120;
      break;
     case 22:
      
      var $97 = $ptr_addr + 1;
      $ptr_addr = $97;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = -26;
      __label__ = 120;
      break;
     case 24:
      
      
      
      if (HEAP[$ptr_addr] == 93) {
        __label__ = 25;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 25:
      
      
      
      
      if ($ptr_addr + 1 == $end_addr) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $0 = -1;
      __label__ = 120;
      break;
     case 27:
      
      
      
      
      if (HEAP[$ptr_addr + 1] == 62) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 2;
      $0 = 34;
      __label__ = 120;
      break;
     case 29:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 26;
      __label__ = 120;
      break;
     case 30:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 23;
      __label__ = 120;
      break;
     case 31:
      
      var $121 = $ptr_addr + 1;
      $ptr_addr = $121;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      $0 = -24;
      __label__ = 120;
      break;
     case 33:
      
      
      
      
      
      
      
      
      var $133 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($133 == 9) {
        __label__ = 37;
        break;
      } else if ($133 == 10) {
        __label__ = 37;
        break;
      } else if ($133 == 11) {
        __label__ = 37;
        break;
      } else if ($133 == 15) {
        __label__ = 35;
        break;
      } else if ($133 == 21) {
        __label__ = 37;
        break;
      } else if ($133 == 32) {
        __label__ = 37;
        break;
      } else if ($133 == 33) {
        __label__ = 34;
        break;
      } else if ($133 == 34) {
        __label__ = 36;
        break;
      } else if ($133 == 35) {
        __label__ = 37;
        break;
      } else if ($133 == 36) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 34:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 36;
      __label__ = 120;
      break;
     case 35:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 35;
      __label__ = 120;
      break;
     case 36:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 37;
      __label__ = 120;
      break;
     case 37:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 24;
      __label__ = 120;
      break;
     case 38:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 39:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 21;
      __label__ = 120;
      break;
     case 40:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 17;
      __label__ = 120;
      break;
     case 41:
      
      
      
      
      
      var $158 = _normal_scanPoundName($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $158;
      __label__ = 120;
      break;
     case 42:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      $0 = -2;
      __label__ = 120;
      break;
     case 44:
      
      
      
      var $168 = HEAP[$enc_addr + 344];
      
      
      var $171 = FUNCTION_TABLE[$168]($enc_addr, $ptr_addr);
      
      if ($171 != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      var $174 = $ptr_addr + 2;
      $ptr_addr = $174;
      $tok = 18;
      __label__ = 118;
      break;
     case 46:
      
      
      
      var $178 = HEAP[$enc_addr + 332];
      
      
      var $181 = FUNCTION_TABLE[$178]($enc_addr, $ptr_addr);
      
      if ($181 != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      
      var $184 = $ptr_addr + 2;
      $ptr_addr = $184;
      $tok = 19;
      __label__ = 118;
      break;
     case 48:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 49:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      $0 = -2;
      __label__ = 120;
      break;
     case 51:
      
      
      
      var $196 = HEAP[$enc_addr + 348];
      
      
      var $199 = FUNCTION_TABLE[$196]($enc_addr, $ptr_addr);
      
      if ($199 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      
      var $202 = $ptr_addr + 3;
      $ptr_addr = $202;
      $tok = 18;
      __label__ = 118;
      break;
     case 53:
      
      
      
      var $206 = HEAP[$enc_addr + 336];
      
      
      var $209 = FUNCTION_TABLE[$206]($enc_addr, $ptr_addr);
      
      if ($209 != 0) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      
      var $212 = $ptr_addr + 3;
      $ptr_addr = $212;
      $tok = 19;
      __label__ = 118;
      break;
     case 55:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 56:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      $0 = -2;
      __label__ = 120;
      break;
     case 58:
      
      
      
      var $224 = HEAP[$enc_addr + 352];
      
      
      var $227 = FUNCTION_TABLE[$224]($enc_addr, $ptr_addr);
      
      if ($227 != 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      
      var $230 = $ptr_addr + 4;
      $ptr_addr = $230;
      $tok = 18;
      __label__ = 118;
      break;
     case 60:
      
      
      
      var $234 = HEAP[$enc_addr + 340];
      
      
      var $237 = FUNCTION_TABLE[$234]($enc_addr, $ptr_addr);
      
      if ($237 != 0) {
        __label__ = 61;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 61:
      
      var $240 = $ptr_addr + 4;
      $ptr_addr = $240;
      $tok = 19;
      __label__ = 118;
      break;
     case 62:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 63:
      $tok = 18;
      
      var $244 = $ptr_addr + 1;
      $ptr_addr = $244;
      __label__ = 118;
      break;
     case 64:
      $tok = 19;
      
      var $246 = $ptr_addr + 1;
      $ptr_addr = $246;
      __label__ = 118;
      break;
     case 65:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 66:
      
      
      
      
      
      
      
      
      var $257 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($257 == 5) {
        __label__ = 69;
        break;
      } else if ($257 == 6) {
        __label__ = 74;
        break;
      } else if ($257 == 7) {
        __label__ = 79;
        break;
      } else if ($257 == 9) {
        __label__ = 84;
        break;
      } else if ($257 == 10) {
        __label__ = 84;
        break;
      } else if ($257 == 11) {
        __label__ = 84;
        break;
      } else if ($257 == 15) {
        __label__ = 114;
        break;
      } else if ($257 == 20) {
        __label__ = 84;
        break;
      } else if ($257 == 21) {
        __label__ = 84;
        break;
      } else if ($257 == 22) {
        __label__ = 68;
        break;
      } else if ($257 == 23) {
        __label__ = 85;
        break;
      } else if ($257 == 24) {
        __label__ = 68;
        break;
      } else if ($257 == 25) {
        __label__ = 68;
        break;
      } else if ($257 == 26) {
        __label__ = 68;
        break;
      } else if ($257 == 27) {
        __label__ = 68;
        break;
      } else if ($257 == 29) {
        __label__ = 67;
        break;
      } else if ($257 == 30) {
        __label__ = 84;
        break;
      } else if ($257 == 32) {
        __label__ = 84;
        break;
      } else if ($257 == 33) {
        __label__ = 111;
        break;
      } else if ($257 == 34) {
        __label__ = 108;
        break;
      } else if ($257 == 35) {
        __label__ = 84;
        break;
      } else if ($257 == 36) {
        __label__ = 84;
        break;
      } else {
        __label__ = 117;
        break;
      }
     case 67:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 68:
      
      var $261 = $ptr_addr + 1;
      $ptr_addr = $261;
      __label__ = 118;
      break;
     case 69:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 70;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 70:
      $0 = -2;
      __label__ = 120;
      break;
     case 71:
      
      
      
      var $271 = HEAP[$enc_addr + 332];
      
      
      var $274 = FUNCTION_TABLE[$271]($enc_addr, $ptr_addr);
      
      if ($274 == 0) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 73:
      
      var $279 = $ptr_addr + 2;
      $ptr_addr = $279;
      __label__ = 118;
      break;
     case 74:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 75;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 75:
      $0 = -2;
      __label__ = 120;
      break;
     case 76:
      
      
      
      var $289 = HEAP[$enc_addr + 336];
      
      
      var $292 = FUNCTION_TABLE[$289]($enc_addr, $ptr_addr);
      
      if ($292 == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 78:
      
      var $297 = $ptr_addr + 3;
      $ptr_addr = $297;
      __label__ = 118;
      break;
     case 79:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      $0 = -2;
      __label__ = 120;
      break;
     case 81:
      
      
      
      var $307 = HEAP[$enc_addr + 340];
      
      
      var $310 = FUNCTION_TABLE[$307]($enc_addr, $ptr_addr);
      
      if ($310 == 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 83;
        break;
      }
     case 82:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 83:
      
      var $315 = $ptr_addr + 4;
      $ptr_addr = $315;
      __label__ = 118;
      break;
     case 84:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      
      $0 = $tok;
      __label__ = 120;
      break;
     case 85:
      
      var $320 = $ptr_addr + 1;
      $ptr_addr = $320;
      var $321 = $tok;
      if ($321 == 18) {
        __label__ = 86;
        break;
      } else if ($321 == 41) {
        __label__ = 107;
        break;
      } else {
        __label__ = 118;
        break;
      }
     case 86:
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 87;
        break;
      } else {
        __label__ = 88;
        break;
      }
     case 87:
      $0 = -1;
      __label__ = 120;
      break;
     case 88:
      $tok = 41;
      
      
      
      
      
      
      
      
      var $333 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($333 == 5) {
        __label__ = 91;
        break;
      } else if ($333 == 6) {
        __label__ = 96;
        break;
      } else if ($333 == 7) {
        __label__ = 101;
        break;
      } else if ($333 == 22) {
        __label__ = 90;
        break;
      } else if ($333 == 24) {
        __label__ = 90;
        break;
      } else if ($333 == 25) {
        __label__ = 90;
        break;
      } else if ($333 == 26) {
        __label__ = 90;
        break;
      } else if ($333 == 27) {
        __label__ = 90;
        break;
      } else if ($333 == 29) {
        __label__ = 89;
        break;
      } else {
        __label__ = 106;
        break;
      }
     case 89:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 90:
      
      var $337 = $ptr_addr + 1;
      $ptr_addr = $337;
      __label__ = 118;
      break;
     case 91:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 92;
        break;
      } else {
        __label__ = 93;
        break;
      }
     case 92:
      $0 = -2;
      __label__ = 120;
      break;
     case 93:
      
      
      
      var $347 = HEAP[$enc_addr + 332];
      
      
      var $350 = FUNCTION_TABLE[$347]($enc_addr, $ptr_addr);
      
      if ($350 == 0) {
        __label__ = 94;
        break;
      } else {
        __label__ = 95;
        break;
      }
     case 94:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 95:
      
      var $355 = $ptr_addr + 2;
      $ptr_addr = $355;
      __label__ = 118;
      break;
     case 96:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 97;
        break;
      } else {
        __label__ = 98;
        break;
      }
     case 97:
      $0 = -2;
      __label__ = 120;
      break;
     case 98:
      
      
      
      var $365 = HEAP[$enc_addr + 336];
      
      
      var $368 = FUNCTION_TABLE[$365]($enc_addr, $ptr_addr);
      
      if ($368 == 0) {
        __label__ = 99;
        break;
      } else {
        __label__ = 100;
        break;
      }
     case 99:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 100:
      
      var $373 = $ptr_addr + 3;
      $ptr_addr = $373;
      __label__ = 118;
      break;
     case 101:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 102;
        break;
      } else {
        __label__ = 103;
        break;
      }
     case 102:
      $0 = -2;
      __label__ = 120;
      break;
     case 103:
      
      
      
      var $383 = HEAP[$enc_addr + 340];
      
      
      var $386 = FUNCTION_TABLE[$383]($enc_addr, $ptr_addr);
      
      if ($386 == 0) {
        __label__ = 104;
        break;
      } else {
        __label__ = 105;
        break;
      }
     case 104:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 105:
      
      var $391 = $ptr_addr + 4;
      $ptr_addr = $391;
      __label__ = 118;
      break;
     case 106:
      $tok = 19;
      __label__ = 118;
      break;
     case 107:
      $tok = 19;
      __label__ = 118;
      break;
     case 108:
      
      
      if ($tok == 19) {
        __label__ = 109;
        break;
      } else {
        __label__ = 110;
        break;
      }
     case 109:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 110:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 32;
      __label__ = 120;
      break;
     case 111:
      
      
      if ($tok == 19) {
        __label__ = 112;
        break;
      } else {
        __label__ = 113;
        break;
      }
     case 112:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 113:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 31;
      __label__ = 120;
      break;
     case 114:
      
      
      if ($tok == 19) {
        __label__ = 115;
        break;
      } else {
        __label__ = 116;
        break;
      }
     case 115:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 116:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 30;
      __label__ = 120;
      break;
     case 117:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 120;
      break;
     case 118:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 66;
        break;
      } else {
        __label__ = 119;
        break;
      }
     case 119:
      
      
      $0 = 0 - $tok;
      __label__ = 120;
      break;
     case 120:
      
      $retval = $0;
      var $retval125 = $retval;
      return $retval125;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_attributeValueTok($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      var $start;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -4;
      __label__ = 27;
      break;
     case 2:
      
      $start = $ptr_addr;
      __label__ = 25;
      break;
     case 3:
      
      
      
      
      
      
      
      
      var $13 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($13 == 2) {
        __label__ = 10;
        break;
      } else if ($13 == 3) {
        __label__ = 7;
        break;
      } else if ($13 == 5) {
        __label__ = 4;
        break;
      } else if ($13 == 6) {
        __label__ = 5;
        break;
      } else if ($13 == 7) {
        __label__ = 6;
        break;
      } else if ($13 == 9) {
        __label__ = 14;
        break;
      } else if ($13 == 10) {
        __label__ = 11;
        break;
      } else if ($13 == 21) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 4:
      
      var $15 = $ptr_addr + 2;
      $ptr_addr = $15;
      __label__ = 25;
      break;
     case 5:
      
      var $17 = $ptr_addr + 3;
      $ptr_addr = $17;
      __label__ = 25;
      break;
     case 6:
      
      var $19 = $ptr_addr + 4;
      $ptr_addr = $19;
      __label__ = 25;
      break;
     case 7:
      
      
      
      if ($ptr_addr == $start) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $28 = _normal_scanRef($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $28;
      __label__ = 27;
      break;
     case 9:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 27;
      break;
     case 10:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 27;
      break;
     case 11:
      
      
      
      if ($ptr_addr == $start) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 7;
      __label__ = 27;
      break;
     case 13:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 27;
      break;
     case 14:
      
      
      
      if ($ptr_addr == $start) {
        __label__ = 15;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 15:
      
      var $45 = $ptr_addr + 1;
      $ptr_addr = $45;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = -3;
      __label__ = 27;
      break;
     case 17:
      
      
      
      
      
      
      
      
      
      if (HEAP[$enc_addr + 76 + HEAP[$ptr_addr]] == 10) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      var $59 = $ptr_addr + 1;
      $ptr_addr = $59;
      __label__ = 19;
      break;
     case 19:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 7;
      __label__ = 27;
      break;
     case 20:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 27;
      break;
     case 21:
      
      
      
      if ($ptr_addr == $start) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 39;
      __label__ = 27;
      break;
     case 23:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 27;
      break;
     case 24:
      
      var $73 = $ptr_addr + 1;
      $ptr_addr = $73;
      __label__ = 25;
      break;
     case 25:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 27;
      break;
     case 27:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_entityValueTok($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $iftmp_458;
      var $0;
      var $start;
      var $tok;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -4;
      __label__ = 29;
      break;
     case 2:
      
      $start = $ptr_addr;
      __label__ = 27;
      break;
     case 3:
      
      
      
      
      
      
      
      
      var $13 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($13 == 3) {
        __label__ = 7;
        break;
      } else if ($13 == 5) {
        __label__ = 4;
        break;
      } else if ($13 == 6) {
        __label__ = 5;
        break;
      } else if ($13 == 7) {
        __label__ = 6;
        break;
      } else if ($13 == 9) {
        __label__ = 19;
        break;
      } else if ($13 == 10) {
        __label__ = 16;
        break;
      } else if ($13 == 30) {
        __label__ = 10;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 4:
      
      var $15 = $ptr_addr + 2;
      $ptr_addr = $15;
      __label__ = 27;
      break;
     case 5:
      
      var $17 = $ptr_addr + 3;
      $ptr_addr = $17;
      __label__ = 27;
      break;
     case 6:
      
      var $19 = $ptr_addr + 4;
      $ptr_addr = $19;
      __label__ = 27;
      break;
     case 7:
      
      
      
      if ($ptr_addr == $start) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      
      var $28 = _normal_scanRef($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $0 = $28;
      __label__ = 29;
      break;
     case 9:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 29;
      break;
     case 10:
      
      
      
      if ($ptr_addr == $start) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      
      
      var $39 = _normal_scanPercent($enc_addr, $ptr_addr + 1, $end_addr, $nextTokPtr_addr);
      $tok = $39;
      
      
      if ($tok != 22) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      $iftmp_458 = $tok;
      __label__ = 14;
      break;
     case 13:
      $iftmp_458 = 0;
      __label__ = 14;
      break;
     case 14:
      
      $0 = $iftmp_458;
      __label__ = 29;
      break;
     case 15:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 29;
      break;
     case 16:
      
      
      
      if ($ptr_addr == $start) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr + 1;
      $0 = 7;
      __label__ = 29;
      break;
     case 18:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 29;
      break;
     case 19:
      
      
      
      if ($ptr_addr == $start) {
        __label__ = 20;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 20:
      
      var $58 = $ptr_addr + 1;
      $ptr_addr = $58;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $0 = -3;
      __label__ = 29;
      break;
     case 22:
      
      
      
      
      
      
      
      
      
      if (HEAP[$enc_addr + 76 + HEAP[$ptr_addr]] == 10) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      var $72 = $ptr_addr + 1;
      $ptr_addr = $72;
      __label__ = 24;
      break;
     case 24:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 7;
      __label__ = 29;
      break;
     case 25:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 29;
      break;
     case 26:
      
      var $78 = $ptr_addr + 1;
      $ptr_addr = $78;
      __label__ = 27;
      break;
     case 27:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 6;
      __label__ = 29;
      break;
     case 29:
      
      $retval = $0;
      var $retval29 = $retval;
      return $retval29;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_ignoreSectionTok($enc, $ptr, $end, $nextTokPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $nextTokPtr_addr;
      var $retval;
      var $0;
      var $level;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $nextTokPtr_addr = $nextTokPtr;
      $level = 0;
      __label__ = 35;
      break;
     case 1:
      
      
      
      
      
      
      
      
      var $9 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($9 == 0) {
        __label__ = 17;
        break;
      } else if ($9 == 1) {
        __label__ = 17;
        break;
      } else if ($9 == 2) {
        __label__ = 18;
        break;
      } else if ($9 == 4) {
        __label__ = 25;
        break;
      } else if ($9 == 5) {
        __label__ = 2;
        break;
      } else if ($9 == 6) {
        __label__ = 7;
        break;
      } else if ($9 == 7) {
        __label__ = 12;
        break;
      } else if ($9 == 8) {
        __label__ = 17;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 2:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -2;
      __label__ = 37;
      break;
     case 4:
      
      
      
      var $19 = HEAP[$enc_addr + 356];
      
      
      var $22 = FUNCTION_TABLE[$19]($enc_addr, $ptr_addr);
      
      if ($22 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 37;
      break;
     case 6:
      
      var $27 = $ptr_addr + 2;
      $ptr_addr = $27;
      __label__ = 35;
      break;
     case 7:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -2;
      __label__ = 37;
      break;
     case 9:
      
      
      
      var $37 = HEAP[$enc_addr + 360];
      
      
      var $40 = FUNCTION_TABLE[$37]($enc_addr, $ptr_addr);
      
      if ($40 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 37;
      break;
     case 11:
      
      var $45 = $ptr_addr + 3;
      $ptr_addr = $45;
      __label__ = 35;
      break;
     case 12:
      
      
      
      
      
      
      if ($end_addr - $ptr_addr <= 3) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = -2;
      __label__ = 37;
      break;
     case 14:
      
      
      
      var $55 = HEAP[$enc_addr + 364];
      
      
      var $58 = FUNCTION_TABLE[$55]($enc_addr, $ptr_addr);
      
      if ($58 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 37;
      break;
     case 16:
      
      var $63 = $ptr_addr + 4;
      $ptr_addr = $63;
      __label__ = 35;
      break;
     case 17:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 37;
      break;
     case 18:
      
      var $67 = $ptr_addr + 1;
      $ptr_addr = $67;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = -1;
      __label__ = 37;
      break;
     case 20:
      
      
      
      if (HEAP[$ptr_addr] == 33) {
        __label__ = 21;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 21:
      
      var $75 = $ptr_addr + 1;
      $ptr_addr = $75;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $0 = -1;
      __label__ = 37;
      break;
     case 23:
      
      
      
      if (HEAP[$ptr_addr] == 91) {
        __label__ = 24;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 24:
      
      var $83 = $level + 1;
      $level = $83;
      
      var $85 = $ptr_addr + 1;
      $ptr_addr = $85;
      __label__ = 35;
      break;
     case 25:
      
      var $87 = $ptr_addr + 1;
      $ptr_addr = $87;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $0 = -1;
      __label__ = 37;
      break;
     case 27:
      
      
      
      if (HEAP[$ptr_addr] == 93) {
        __label__ = 28;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 28:
      
      var $95 = $ptr_addr + 1;
      $ptr_addr = $95;
      
      
      
      if ($ptr_addr == $end_addr) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      $0 = -1;
      __label__ = 37;
      break;
     case 30:
      
      
      
      if (HEAP[$ptr_addr] == 62) {
        __label__ = 31;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 31:
      
      var $103 = $ptr_addr + 1;
      $ptr_addr = $103;
      
      
      if ($level == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      HEAP[$nextTokPtr_addr] = $ptr_addr;
      $0 = 42;
      __label__ = 37;
      break;
     case 33:
      
      var $109 = $level - 1;
      $level = $109;
      __label__ = 35;
      break;
     case 34:
      
      var $111 = $ptr_addr + 1;
      $ptr_addr = $111;
      __label__ = 35;
      break;
     case 35:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      $0 = -1;
      __label__ = 37;
      break;
     case 37:
      
      $retval = $0;
      var $retval39 = $retval;
      return $retval39;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_isPublicId($enc, $ptr, $end, $badPtr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $badPtr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      $badPtr_addr = $badPtr;
      
      var $2 = $ptr_addr + 1;
      $ptr_addr = $2;
      
      var $4 = $end_addr + -1;
      $end_addr = $4;
      __label__ = 8;
      break;
     case 1:
      
      
      
      
      
      
      
      
      var $13 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($13 == 9) {
        __label__ = 7;
        break;
      } else if ($13 == 10) {
        __label__ = 7;
        break;
      } else if ($13 == 13) {
        __label__ = 7;
        break;
      } else if ($13 == 14) {
        __label__ = 7;
        break;
      } else if ($13 == 15) {
        __label__ = 7;
        break;
      } else if ($13 == 16) {
        __label__ = 7;
        break;
      } else if ($13 == 17) {
        __label__ = 7;
        break;
      } else if ($13 == 18) {
        __label__ = 7;
        break;
      } else if ($13 == 19) {
        __label__ = 7;
        break;
      } else if ($13 == 21) {
        __label__ = 2;
        break;
      } else if ($13 == 22) {
        __label__ = 4;
        break;
      } else if ($13 == 23) {
        __label__ = 7;
        break;
      } else if ($13 == 24) {
        __label__ = 7;
        break;
      } else if ($13 == 25) {
        __label__ = 7;
        break;
      } else if ($13 == 26) {
        __label__ = 4;
        break;
      } else if ($13 == 27) {
        __label__ = 7;
        break;
      } else if ($13 == 30) {
        __label__ = 7;
        break;
      } else if ($13 == 31) {
        __label__ = 7;
        break;
      } else if ($13 == 32) {
        __label__ = 7;
        break;
      } else if ($13 == 33) {
        __label__ = 7;
        break;
      } else if ($13 == 34) {
        __label__ = 7;
        break;
      } else if ($13 == 35) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      if (HEAP[$ptr_addr] == 9) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      HEAP[$badPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 10;
      break;
     case 4:
      
      
      
      if (HEAP[$ptr_addr] >= 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $24 = HEAP[$ptr_addr];
      if ($24 == 36) {
        __label__ = 7;
        break;
      } else if ($24 == 64) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      HEAP[$badPtr_addr] = $ptr_addr;
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      
      var $28 = $ptr_addr + 1;
      $ptr_addr = $28;
      __label__ = 8;
      break;
     case 8:
      
      
      
      if ($ptr_addr != $end_addr) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      $0 = 1;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_getAtts($enc, $ptr, $attsMax, $atts) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $attsMax_addr;
      var $atts_addr;
      var $retval;
      var $0;
      var $state;
      var $nAtts;
      var $open;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $attsMax_addr = $attsMax;
      $atts_addr = $atts;
      $state = 1;
      $nAtts = 0;
      $open = 0;
      
      var $2 = $ptr_addr + 1;
      $ptr_addr = $2;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      
      
      
      var $11 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($11 == 3) {
        __label__ = 37;
        break;
      } else if ($11 == 5) {
        __label__ = 2;
        break;
      } else if ($11 == 6) {
        __label__ = 7;
        break;
      } else if ($11 == 7) {
        __label__ = 12;
        break;
      } else if ($11 == 9) {
        __label__ = 49;
        break;
      } else if ($11 == 10) {
        __label__ = 49;
        break;
      } else if ($11 == 11) {
        __label__ = 54;
        break;
      } else if ($11 == 12) {
        __label__ = 21;
        break;
      } else if ($11 == 13) {
        __label__ = 29;
        break;
      } else if ($11 == 17) {
        __label__ = 54;
        break;
      } else if ($11 == 21) {
        __label__ = 39;
        break;
      } else if ($11 == 22) {
        __label__ = 17;
        break;
      } else if ($11 == 24) {
        __label__ = 17;
        break;
      } else if ($11 == 29) {
        __label__ = 17;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 2:
      
      
      if ($state == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts] = $ptr_addr;
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 12] = 1;
      __label__ = 5;
      break;
     case 5:
      $state = 1;
      __label__ = 6;
      break;
     case 6:
      
      var $27 = $ptr_addr + 1;
      $ptr_addr = $27;
      __label__ = 56;
      break;
     case 7:
      
      
      if ($state == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts] = $ptr_addr;
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 12] = 1;
      __label__ = 10;
      break;
     case 10:
      $state = 1;
      __label__ = 11;
      break;
     case 11:
      
      var $43 = $ptr_addr + 2;
      $ptr_addr = $43;
      __label__ = 56;
      break;
     case 12:
      
      
      if ($state == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 13:
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts] = $ptr_addr;
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 12] = 1;
      __label__ = 15;
      break;
     case 15:
      $state = 1;
      __label__ = 16;
      break;
     case 16:
      
      var $59 = $ptr_addr + 3;
      $ptr_addr = $59;
      __label__ = 56;
      break;
     case 17:
      
      
      if ($state == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 18:
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts] = $ptr_addr;
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 12] = 1;
      __label__ = 20;
      break;
     case 20:
      $state = 1;
      __label__ = 56;
      break;
     case 21:
      
      
      if ($state != 2) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 4] = $ptr_addr + 1;
      __label__ = 24;
      break;
     case 24:
      $state = 2;
      $open = 12;
      __label__ = 56;
      break;
     case 25:
      
      
      if ($open == 12) {
        __label__ = 26;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 26:
      $state = 0;
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 8] = $ptr_addr;
      __label__ = 28;
      break;
     case 28:
      
      var $96 = $nAtts + 1;
      $nAtts = $96;
      __label__ = 56;
      break;
     case 29:
      
      
      if ($state != 2) {
        __label__ = 30;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 30:
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 4] = $ptr_addr + 1;
      __label__ = 32;
      break;
     case 32:
      $state = 2;
      $open = 13;
      __label__ = 56;
      break;
     case 33:
      
      
      if ($open == 13) {
        __label__ = 34;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 34:
      $state = 0;
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 8] = $ptr_addr;
      __label__ = 36;
      break;
     case 36:
      
      var $119 = $nAtts + 1;
      $nAtts = $119;
      __label__ = 56;
      break;
     case 37:
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 38;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 38:
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 12] = 0;
      __label__ = 56;
      break;
     case 39:
      
      
      if ($state == 1) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      $state = 0;
      __label__ = 56;
      break;
     case 41:
      
      
      if ($state == 2) {
        __label__ = 42;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 42:
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 43;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 43:
      
      
      
      
      
      
      if (HEAP[$atts_addr + 16 * $nAtts + 12] != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 44:
      
      
      
      
      
      
      
      if (HEAP[$atts_addr + 16 * $nAtts + 4] == $ptr_addr) {
        __label__ = 48;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 45:
      
      
      
      if (HEAP[$ptr_addr] != 32) {
        __label__ = 48;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      
      
      
      if (HEAP[$ptr_addr + 1] == 32) {
        __label__ = 48;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[$enc_addr + 76 + HEAP[$ptr_addr + 1]] == $open) {
        __label__ = 48;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 48:
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 12] = 0;
      __label__ = 56;
      break;
     case 49:
      
      
      if ($state == 1) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      $state = 0;
      __label__ = 56;
      break;
     case 51:
      
      
      if ($state == 2) {
        __label__ = 52;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 52:
      
      
      
      if ($nAtts < $attsMax_addr) {
        __label__ = 53;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 53:
      
      
      
      
      HEAP[$atts_addr + 16 * $nAtts + 12] = 0;
      __label__ = 56;
      break;
     case 54:
      
      
      if ($state != 2) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      $0 = $nAtts;
      
      $retval = $0;
      var $retval62 = $retval;
      return $retval62;
     case 56:
      
      var $186 = $ptr_addr + 1;
      $ptr_addr = $186;
      __label__ = 1;
      break;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_charRefNumber($enc, $ptr) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $retval;
      var $0;
      var $result;
      var $c;
      var $c12;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $result = 0;
      
      var $2 = $ptr_addr + 2;
      $ptr_addr = $2;
      
      
      
      if (HEAP[$ptr_addr] == 120) {
        __label__ = 1;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 1:
      
      var $7 = $ptr_addr + 1;
      $ptr_addr = $7;
      __label__ = 10;
      break;
     case 2:
      
      
      
      $c = HEAP[$ptr_addr];
      var $11 = $c;
      if ($11 == 48) {
        __label__ = 3;
        break;
      } else if ($11 == 49) {
        __label__ = 3;
        break;
      } else if ($11 == 50) {
        __label__ = 3;
        break;
      } else if ($11 == 51) {
        __label__ = 3;
        break;
      } else if ($11 == 52) {
        __label__ = 3;
        break;
      } else if ($11 == 53) {
        __label__ = 3;
        break;
      } else if ($11 == 54) {
        __label__ = 3;
        break;
      } else if ($11 == 55) {
        __label__ = 3;
        break;
      } else if ($11 == 56) {
        __label__ = 3;
        break;
      } else if ($11 == 57) {
        __label__ = 3;
        break;
      } else if ($11 == 65) {
        __label__ = 4;
        break;
      } else if ($11 == 66) {
        __label__ = 4;
        break;
      } else if ($11 == 67) {
        __label__ = 4;
        break;
      } else if ($11 == 68) {
        __label__ = 4;
        break;
      } else if ($11 == 69) {
        __label__ = 4;
        break;
      } else if ($11 == 70) {
        __label__ = 4;
        break;
      } else if ($11 == 97) {
        __label__ = 5;
        break;
      } else if ($11 == 98) {
        __label__ = 5;
        break;
      } else if ($11 == 99) {
        __label__ = 5;
        break;
      } else if ($11 == 100) {
        __label__ = 5;
        break;
      } else if ($11 == 101) {
        __label__ = 5;
        break;
      } else if ($11 == 102) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      var $13 = $result << 4;
      $result = $13;
      
      
      
      var $17 = $c - 48 | $result;
      $result = $17;
      __lastLabel__ = 3;
      __label__ = 7;
      break;
     case 4:
      
      var $19 = $result << 4;
      $result = $19;
      
      
      
      var $23 = $c - 55 + $result;
      $result = $23;
      __lastLabel__ = 4;
      __label__ = 7;
      break;
     case 5:
      
      var $25 = $result << 4;
      $result = $25;
      
      
      
      var $29 = $c - 87 + $result;
      $result = $29;
      __lastLabel__ = 5;
      __label__ = 7;
      break;
     case 6:
      var $_pr = $result;
      __lastLabel__ = 6;
      __label__ = 7;
      break;
     case 7:
      var $30 = __lastLabel__ == 6 ? $_pr : __lastLabel__ == 5 ? $29 : __lastLabel__ == 4 ? $23 : $17;
      
      if ($30 > 1114111) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 16;
      break;
     case 9:
      
      var $33 = $ptr_addr + 1;
      $ptr_addr = $33;
      __label__ = 10;
      break;
     case 10:
      
      
      
      if (HEAP[$ptr_addr] != 59) {
        __label__ = 2;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      
      
      $c12 = HEAP[$ptr_addr];
      
      var $41 = $result * 10;
      $result = $41;
      
      
      var $44 = $c12 + -48;
      var $45 = $44 + $result;
      $result = $45;
      
      
      if ($result > 1114111) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = -1;
      __label__ = 16;
      break;
     case 13:
      
      var $49 = $ptr_addr + 1;
      $ptr_addr = $49;
      __label__ = 14;
      break;
     case 14:
      
      
      
      if (HEAP[$ptr_addr] != 59) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      var $54 = _checkCharRefNumber($result);
      $0 = $54;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval18 = $retval;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_predefinedEntityName($enc, $ptr, $end) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
      
      
      
      
      var $5 = $end_addr - $ptr_addr;
      if ($5 == 2) {
        __label__ = 1;
        break;
      } else if ($5 == 3) {
        __label__ = 5;
        break;
      } else if ($5 == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$ptr_addr + 1] == 116) {
        __label__ = 2;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 2:
      
      
      var $12 = HEAP[$ptr_addr];
      if ($12 == 103) {
        __label__ = 4;
        break;
      } else if ($12 == 108) {
        __label__ = 3;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 3:
      $0 = 60;
      __label__ = 19;
      break;
     case 4:
      $0 = 62;
      __label__ = 19;
      break;
     case 5:
      
      
      
      if (HEAP[$ptr_addr] == 97) {
        __label__ = 6;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 6:
      
      var $17 = $ptr_addr + 1;
      $ptr_addr = $17;
      
      
      
      if (HEAP[$ptr_addr] == 109) {
        __label__ = 7;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 7:
      
      var $22 = $ptr_addr + 1;
      $ptr_addr = $22;
      
      
      
      if (HEAP[$ptr_addr] == 112) {
        __label__ = 8;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 8:
      $0 = 38;
      __label__ = 19;
      break;
     case 9:
      
      
      var $28 = HEAP[$ptr_addr];
      if ($28 == 97) {
        __label__ = 14;
        break;
      } else if ($28 == 113) {
        __label__ = 10;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 10:
      
      var $30 = $ptr_addr + 1;
      $ptr_addr = $30;
      
      
      
      if (HEAP[$ptr_addr] == 117) {
        __label__ = 11;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 11:
      
      var $35 = $ptr_addr + 1;
      $ptr_addr = $35;
      
      
      
      if (HEAP[$ptr_addr] == 111) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 12:
      
      var $40 = $ptr_addr + 1;
      $ptr_addr = $40;
      
      
      
      if (HEAP[$ptr_addr] == 116) {
        __label__ = 13;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 13:
      $0 = 34;
      __label__ = 19;
      break;
     case 14:
      
      var $45 = $ptr_addr + 1;
      $ptr_addr = $45;
      
      
      
      if (HEAP[$ptr_addr] == 112) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      
      var $50 = $ptr_addr + 1;
      $ptr_addr = $50;
      
      
      
      if (HEAP[$ptr_addr] == 111) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      var $55 = $ptr_addr + 1;
      $ptr_addr = $55;
      
      
      
      if (HEAP[$ptr_addr] == 115) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = 39;
      __label__ = 19;
      break;
     case 18:
      $0 = 0;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_sameName($enc, $ptr1, $ptr2) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr1_addr;
      var $ptr2_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr1_addr = $ptr1;
      $ptr2_addr = $ptr2;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      
      
      
      var $9 = HEAP[$enc_addr + 76 + HEAP[$ptr1_addr]];
      if ($9 == 5) {
        __label__ = 6;
        break;
      } else if ($9 == 6) {
        __label__ = 4;
        break;
      } else if ($9 == 7) {
        __label__ = 2;
        break;
      } else if ($9 == 22) {
        __label__ = 10;
        break;
      } else if ($9 == 23) {
        __label__ = 10;
        break;
      } else if ($9 == 24) {
        __label__ = 10;
        break;
      } else if ($9 == 25) {
        __label__ = 10;
        break;
      } else if ($9 == 26) {
        __label__ = 10;
        break;
      } else if ($9 == 27) {
        __label__ = 10;
        break;
      } else if ($9 == 29) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 2:
      
      
      
      
      
      var $15 = HEAP[$ptr1_addr] != HEAP[$ptr2_addr];
      
      var $17 = $ptr1_addr + 1;
      $ptr1_addr = $17;
      
      var $19 = $ptr2_addr + 1;
      $ptr2_addr = $19;
      
      if ($15 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 17;
      break;
     case 4:
      
      
      
      
      
      var $25 = HEAP[$ptr1_addr] != HEAP[$ptr2_addr];
      
      var $27 = $ptr1_addr + 1;
      $ptr1_addr = $27;
      
      var $29 = $ptr2_addr + 1;
      $ptr2_addr = $29;
      
      if ($25 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 17;
      break;
     case 6:
      
      
      
      
      
      var $35 = HEAP[$ptr1_addr] != HEAP[$ptr2_addr];
      
      var $37 = $ptr1_addr + 1;
      $ptr1_addr = $37;
      
      var $39 = $ptr2_addr + 1;
      $ptr2_addr = $39;
      
      if ($35 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 17;
      break;
     case 8:
      
      
      
      
      
      var $45 = HEAP[$ptr1_addr] != HEAP[$ptr2_addr];
      
      var $47 = $ptr1_addr + 1;
      $ptr1_addr = $47;
      
      var $49 = $ptr2_addr + 1;
      $ptr2_addr = $49;
      
      if ($45 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 17;
      break;
     case 10:
      
      
      
      
      
      var $55 = HEAP[$ptr2_addr] != HEAP[$ptr1_addr];
      
      var $57 = $ptr2_addr + 1;
      $ptr2_addr = $57;
      
      var $59 = $ptr1_addr + 1;
      $ptr1_addr = $59;
      
      if ($55 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 17;
      break;
     case 12:
      
      
      
      
      
      if (HEAP[$ptr1_addr] == HEAP[$ptr2_addr]) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 1;
      __label__ = 17;
      break;
     case 14:
      
      
      
      
      
      
      
      
      var $73 = HEAP[$enc_addr + 76 + HEAP[$ptr2_addr]];
      if ($73 == 5) {
        __label__ = 15;
        break;
      } else if ($73 == 6) {
        __label__ = 15;
        break;
      } else if ($73 == 7) {
        __label__ = 15;
        break;
      } else if ($73 == 22) {
        __label__ = 15;
        break;
      } else if ($73 == 23) {
        __label__ = 15;
        break;
      } else if ($73 == 24) {
        __label__ = 15;
        break;
      } else if ($73 == 25) {
        __label__ = 15;
        break;
      } else if ($73 == 26) {
        __label__ = 15;
        break;
      } else if ($73 == 27) {
        __label__ = 15;
        break;
      } else if ($73 == 29) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 17;
      break;
     case 16:
      $0 = 1;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval24 = $retval;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_nameMatchesAscii($enc, $ptr1, $end1, $ptr2) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr1_addr;
      var $end1_addr;
      var $ptr2_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr1_addr = $ptr1;
      $end1_addr = $end1;
      $ptr2_addr = $ptr2;
      __label__ = 6;
      break;
     case 1:
      if ($15) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 8;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[$ptr1_addr] != HEAP[$ptr2_addr]) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 8;
      break;
     case 5:
      
      var $7 = $ptr1_addr + 1;
      $ptr1_addr = $7;
      
      var $9 = $ptr2_addr + 1;
      $ptr2_addr = $9;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      var $15 = $ptr1_addr == $end1_addr;
      if (HEAP[$ptr2_addr] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      $0 = $15;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_nameLength($enc, $ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $retval;
      var $0;
      var $start;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      
      $start = $ptr_addr;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      
      
      
      var $10 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($10 == 5) {
        __label__ = 2;
        break;
      } else if ($10 == 6) {
        __label__ = 3;
        break;
      } else if ($10 == 7) {
        __label__ = 4;
        break;
      } else if ($10 == 22) {
        __label__ = 5;
        break;
      } else if ($10 == 23) {
        __label__ = 5;
        break;
      } else if ($10 == 24) {
        __label__ = 5;
        break;
      } else if ($10 == 25) {
        __label__ = 5;
        break;
      } else if ($10 == 26) {
        __label__ = 5;
        break;
      } else if ($10 == 27) {
        __label__ = 5;
        break;
      } else if ($10 == 29) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 2:
      
      var $12 = $ptr_addr + 2;
      $ptr_addr = $12;
      __label__ = 1;
      break;
     case 3:
      
      var $14 = $ptr_addr + 3;
      $ptr_addr = $14;
      __label__ = 1;
      break;
     case 4:
      
      var $16 = $ptr_addr + 4;
      $ptr_addr = $16;
      __label__ = 1;
      break;
     case 5:
      
      var $18 = $ptr_addr + 1;
      $ptr_addr = $18;
      __label__ = 1;
      break;
     case 6:
      
      
      
      
      
      $0 = $ptr_addr - $start;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_skipS($enc, $ptr) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $retval;
      var $0;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      
      
      
      var $9 = HEAP[$enc_addr + 76 + HEAP[$ptr_addr]];
      if ($9 == 9) {
        __label__ = 2;
        break;
      } else if ($9 == 10) {
        __label__ = 2;
        break;
      } else if ($9 == 21) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $11 = $ptr_addr + 1;
      $ptr_addr = $11;
      __label__ = 1;
      break;
     case 3:
      
      $0 = $ptr_addr;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normal_updatePosition($enc, $ptr, $end, $pos) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $enc_addr;
      var $ptr_addr;
      var $end_addr;
      var $pos_addr;
      $enc_addr = $enc;
      $ptr_addr = $ptr;
      $end_addr = $end;
    }