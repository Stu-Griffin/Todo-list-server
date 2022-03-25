"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_controller_1 = __importDefault(require("../../controller/todos.controller"));
const router = (0, express_1.Router)();
router.get('/all/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return todos_controller_1.default.getAll(req, res); }));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return todos_controller_1.default.getAllUsersTodos(req, res); }));
router.get('/one/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return todos_controller_1.default.getOne(req, res); }));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return todos_controller_1.default.post(req, res); }));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return todos_controller_1.default.put(req, res); }));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return todos_controller_1.default.delete(req, res); }));
exports.default = router;
