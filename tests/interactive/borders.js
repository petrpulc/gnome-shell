/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

const Clutter = imports.gi.Clutter;
const St = imports.gi.St;

const UI = imports.testcommon.ui;

UI.init();
let stage = Clutter.Stage.get_default();
stage.width = 640;
stage.height = 480;

let vbox = new St.BoxLayout({ width: stage.width,
                              height: stage.height,
                              style: 'background: #ffee88;' });
stage.add_actor(vbox);

let scroll = new St.ScrollView();
vbox.add(scroll, { expand: true });

let box = new St.BoxLayout({ vertical: true,
                             style: 'padding: 10px;'
                                    + 'spacing: 20px;' });
scroll.add_actor(box);

box.add(new St.Label({ text: "Hello World",
                       style: 'border: 1px solid black; '
                              + 'padding: 5px;' }));

box.add(new St.Label({ text: "Hello Round World",
                       style: 'border: 3px solid green; '
                              + 'border-radius: 8px; '
                              + 'padding: 5px;' }));

box.add(new St.Label({ text: "Hello Background",
                       style: 'border: 3px solid green; '
                              + 'border-radius: 8px; '
                              + 'background: white; '
                              + 'padding: 5px;' }));

box.add(new St.Label({ text: "Hello Translucent Black Border",
                       style: 'border: 3px solid rgba(0, 0, 0, 0.4); '
                              + 'background: white; ' }));

box.add(new St.Label({ text: "Hello Translucent Background",
                       style: 'background: rgba(255, 255, 255, 0.3);' }));

box.add(new St.Label({ text: "Border, Padding, Content: 20px" }));

let b1 = new St.BoxLayout({ vertical: true,
                            style: 'border: 20px solid black; '
                                   + 'background: white; '
                                   + 'padding: 20px;' });
box.add(b1);

b1.add(new St.BoxLayout({ width: 20, height: 20,
                          style: 'background: black' }));

box.add(new St.Label({ text: "Translucent big blue border, with rounding",
                       style: 'border: 20px solid rgba(0, 0, 255, 0.2); '
                              + 'border-radius: 10px; '
                              + 'background: white; '
                              + 'padding: 10px;' }));

box.add(new St.Label({ text: "Transparent border",
                       style: 'border: 20px solid transparent; '
                              + 'background: white; '
                              + 'padding: 10px;' }));

box.add(new St.Label({ text: "Border Image",
                       style_class: "border-image",
                       style: "padding: 10px;" }));

stage.show();
Clutter.main();
stage.destroy();
